import { z } from 'zod';

// Common bad words and inappropriate content patterns
const BAD_WORDS = [
  'fuck', 'shit', 'bitch', 'ass', 'damn', 'hell', 'crap', 'piss', 'dick', 'cock',
  'pussy', 'cunt', 'whore', 'slut', 'bastard', 'motherfucker', 'fucker', 'shithead',
  'asshole', 'dumbass', 'jackass', 'dickhead', 'prick', 'twat', 'wanker', 'bollocks',
  'bugger', 'bloody', 'sod', 'git', 'tosser', 'knob', 'bellend', 'minge', 'fanny',
  'spunk', 'wank', 'jizz', 'cum', 'sperm', 'cock', 'penis', 'vagina', 'clit',
  'tits', 'boobs', 'breasts', 'nipple', 'anus', 'butthole', 'asshole',
];

// Patterns for detecting spam, scripts, and malicious content
const SPAM_PATTERNS = [
  /\b(viagra|cialis|levitra|casino|poker|bet|gambling|loan|debt|credit|mortgage)\b/i,
  /\b(free\s+(money|cash|prize|gift|offer|trial|download))\b/i,
  /\b(click\s+here|buy\s+now|limited\s+time|act\s+now|urgent|immediate)\b/i,
  /\b(earn\s+\$\d+|make\s+\$\d+\s+per\s+(day|hour|week))\b/i,
  /\b(work\s+from\s+home|home\s+based\s+business|online\s+income)\b/i,
  /\b(weight\s+loss|diet\s+pills|fat\s+burner|slimming)\b/i,
  /\b(penis\s+enlargement|male\s+enhancement|size\s+increase)\b/i,
  /\b(pharmacy|medication|prescription|drugs)\b/i,
  /\b(lottery|winner|prize|jackpot|million)\b/i,
  /\b(investment|forex|bitcoin|crypto|trading)\b/i,
];

// HTML/script injection patterns
const INJECTION_PATTERNS = [
  /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
  /<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,
  /<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /data:text\/html/gi,
  /vbscript:/gi,
  /expression\s*\(/gi,
];

// URL patterns for detecting spam links
const SPAM_URL_PATTERNS = [
  /https?:\/\/(www\.)?(viagra|cialis|casino|poker|bet|loan|debt|credit|mortgage|pharmacy|medication|weightloss|diet|penis|male-enhancement|lottery|investment|forex|bitcoin|crypto|trading)\./i,
  /https?:\/\/(www\.)?(free-money|earn-cash|work-from-home|home-business|online-income)\./i,
];

/**
 * Sanitizes text by removing bad words and inappropriate content
 */
export const sanitizeText = (text: string): string => {
  if (!text || typeof text !== 'string') return text;
  
  let sanitized = text;
  
  // Remove HTML/script injections
  INJECTION_PATTERNS.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });
  
  // Replace bad words with asterisks
  BAD_WORDS.forEach(badWord => {
    const regex = new RegExp(`\\b${badWord}\\b`, 'gi');
    sanitized = sanitized.replace(regex, '*'.repeat(badWord.length));
  });
  
  // Remove spam patterns
  SPAM_PATTERNS.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });
  
  // Remove spam URLs
  SPAM_URL_PATTERNS.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });
  
  // Remove excessive whitespace and normalize
  sanitized = sanitized.replace(/\s+/g, ' ').trim();
  
  return sanitized;
};

/**
 * Validates email format and common spam patterns
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;
  
  // Check for common spam email patterns
  const spamEmails = [
    /^[a-z]{1,3}\d{1,3}@/i, // Very short usernames with numbers
    /^[a-z]+\d{4,}@/i, // Usernames with many numbers
    /@(temp|disposable|throwaway|10min|guerrilla)\./i, // Disposable email domains
    /@(mailinator|tempmail|yopmail|getairmail)\./i, // Known disposable domains
  ];
  
  return !spamEmails.some(pattern => pattern.test(email));
};

/**
 * Validates phone number format
 */
export const validatePhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  
  // Check if it's a reasonable length (7-15 digits)
  if (digitsOnly.length < 7 || digitsOnly.length > 15) return false;
  
  // Check for suspicious patterns (all same digits, sequential, etc.)
  if (/^(\d)\1{6,}$/.test(digitsOnly)) return false; // All same digits
  if (/^1234567|7654321/.test(digitsOnly)) return false; // Sequential
  
  return true;
};

/**
 * Validates message content for spam and inappropriate content
 */
export const validateMessage = (message: string): { isValid: boolean; reason?: string } => {
  if (!message || message.length < 10) {
    return { isValid: false, reason: 'Message must be at least 10 characters long' };
  }
  
  if (message.length > 1000) {
    return { isValid: false, reason: 'Message must be less than 1000 characters' };
  }
  
  // Check for excessive repetition
  const words = message.toLowerCase().split(/\s+/);
  const wordCount = new Map<string, number>();
  words.forEach(word => {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
  });
  
  // If any word appears more than 5 times, it's suspicious
  for (const [word, count] of wordCount) {
    if (count > 5 && word.length > 2) {
      return { isValid: false, reason: 'Message contains excessive repetition' };
    }
  }
  
  // Check for all caps (shouting)
  const upperCaseRatio = (message.match(/[A-Z]/g) || []).length / message.length;
  if (upperCaseRatio > 0.7 && message.length > 20) {
    return { isValid: false, reason: 'Message contains too much uppercase text' };
  }
  
  // Check for excessive punctuation
  const punctuationRatio = (message.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g) || []).length / message.length;
  if (punctuationRatio > 0.3) {
    return { isValid: false, reason: 'Message contains excessive punctuation' };
  }
  
  return { isValid: true };
};

// Zod schemas for form validation
export const footerFormSchema = z.object({
  emailer: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .refine(validateEmail, 'Email appears to be invalid or spam'),
  contact: z
    .string()
    .min(1, 'Contact number is required')
    .refine(validatePhone, 'Invalid phone number format'),
  message: z
    .string()
    .min(1, 'Message is required')
    .refine(
      (msg) => validateMessage(msg).isValid,
      (msg) => ({ message: validateMessage(msg).reason || 'Invalid message content' }),
    ),
});

export type FooterFormInput = z.infer<typeof footerFormSchema>;

/**
 * Validates and sanitizes footer form input
 */
export const validateAndSanitizeFooterForm = (input: {
  emailer: string;
  contact: string;
  message: string;
}): { success: boolean; data?: FooterFormInput; errors?: Record<string, string> } => {
  try {
    // Sanitize inputs first
    const sanitizedInput = {
      emailer: sanitizeText(input.emailer).toLowerCase(),
      contact: sanitizeText(input.contact),
      message: sanitizeText(input.message),
    };
    
    // Validate with Zod
    const validatedData = footerFormSchema.parse(sanitizedInput);
    
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach(err => {
        const field = err.path[0] as string;
        errors[field] = err.message;
      });
      return { success: false, errors };
    }
    
    return { 
      success: false, 
      errors: { general: 'Validation failed' },
    };
  }
}; 