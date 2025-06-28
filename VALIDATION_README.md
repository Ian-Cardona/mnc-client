# Form Validation and Input Sanitization

This project includes comprehensive validation and sanitization for the footer contact form to prevent spam, inappropriate content, and malicious input.

## Features

### 1. Bad Word Filtering

- Automatically detects and replaces inappropriate language with asterisks
- Comprehensive list of common profanity and offensive terms
- Case-insensitive matching

### 2. Spam Detection

- Identifies common spam patterns and keywords
- Detects suspicious email patterns (disposable emails, excessive numbers)
- Validates phone numbers for suspicious patterns
- Prevents excessive repetition and shouting (all caps)

### 3. Security Protection

- Removes HTML/script injection attempts
- Sanitizes input to prevent XSS attacks
- Validates email formats and domains
- Checks for malicious URL patterns

### 4. Content Validation

- Ensures messages are between 10-1000 characters
- Prevents excessive punctuation (>30%)
- Detects repetitive content
- Validates phone number formats

## Usage

### Basic Validation

```typescript
import { validateAndSanitizeFooterForm } from "./utils/validation";

const formData = {
  emailer: "user@example.com",
  contact: "1234567890",
  message: "Hello, I would like to inquire about your services.",
};

const result = validateAndSanitizeFooterForm(formData);

if (result.success) {
  // Form data is valid and sanitized
  console.log(result.data);
} else {
  // Validation failed
  console.log(result.errors);
}
```

### Individual Validation Functions

```typescript
import {
  sanitizeText,
  validateEmail,
  validatePhone,
  validateMessage,
} from "./utils/validation";

// Sanitize text
const cleanText = sanitizeText(
  "This contains some bad words like fuck and shit"
);
// Result: "This contains some bad words like **** and ****"

// Validate email
const isValidEmail = validateEmail("user@example.com"); // true
const isSpamEmail = validateEmail("spam123@temp.com"); // false

// Validate phone
const isValidPhone = validatePhone("1234567890"); // true
const isSuspiciousPhone = validatePhone("1111111111"); // false

// Validate message
const messageValidation = validateMessage("This is a proper message");
// Result: { isValid: true }
```

### Using the Custom Hook

```typescript
import { useFooterForm } from "./features/footer/hooks/useFooter";

const MyComponent = () => {
  const {
    formData,
    errors,
    isLoading,
    isSuccess,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useFooterForm();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="email"
        value={formData.emailer}
        onChange={(e) => handleInputChange("emailer", e.target.value)}
      />
      {errors.emailer && <span className="error">{errors.emailer}</span>}

      <input
        type="tel"
        value={formData.contact}
        onChange={(e) => handleInputChange("contact", e.target.value)}
      />
      {errors.contact && <span className="error">{errors.contact}</span>}

      <textarea
        value={formData.message}
        onChange={(e) => handleInputChange("message", e.target.value)}
      />
      {errors.message && <span className="error">{errors.message}</span>}

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </button>

      {isSuccess && <div className="success">Message sent successfully!</div>}
      {errors.general && <div className="error">{errors.general}</div>}
    </form>
  );
};
```

## Validation Rules

### Email Validation

- Must be a valid email format
- Cannot be from disposable email domains
- Cannot have suspicious patterns (excessive numbers, very short usernames)

### Phone Validation

- Must be 7-15 digits
- Cannot be all the same digit
- Cannot be sequential numbers
- Removes all non-digit characters for validation

### Message Validation

- Must be 10-1000 characters
- Cannot contain excessive repetition (>5 times for any word)
- Cannot be mostly uppercase (>70% for messages >20 chars)
- Cannot have excessive punctuation (>30%)
- Automatically sanitizes bad words and spam content

## Testing

Run the validation examples to see how the system works:

```typescript
import { runValidationExamples } from "./utils/validation.test";

// Run in development mode
if (import.meta.env.DEV) {
  runValidationExamples();
}
```

## Customization

### Adding Bad Words

Edit the `BAD_WORDS` array in `src/utils/validation.ts`:

```typescript
const BAD_WORDS = [
  "existing",
  "words",
  "here",
  "add",
  "your",
  "custom",
  "words",
];
```

### Adding Spam Patterns

Edit the `SPAM_PATTERNS` array to detect new spam patterns:

```typescript
const SPAM_PATTERNS = [
  /\b(your|new|spam|pattern)\b/i,
  // Add more patterns here
];
```

### Modifying Validation Rules

Update the validation functions to adjust rules:

```typescript
export const validateMessage = (message: string) => {
  // Modify minimum/maximum length
  if (message.length < 5) {
    // Changed from 10
    return { isValid: false, reason: "Message too short" };
  }
  // ... rest of validation
};
```

## Security Considerations

- All user input is sanitized before processing
- Validation happens both client-side and server-side
- Script injection attempts are automatically removed
- Spam patterns are continuously updated
- Email validation includes disposable domain detection

## Performance

- Validation is optimized for speed
- Sanitization uses efficient regex patterns
- Bad word filtering uses word boundary matching
- Validation results are cached where appropriate
