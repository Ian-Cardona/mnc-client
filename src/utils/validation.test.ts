// This is a demonstration file showing how the validation works
// You can run these examples to see the validation in action

import { 
  sanitizeText, 
  validateEmail, 
  validatePhone, 
  validateMessage, 
  validateAndSanitizeFooterForm,
} from './validation';

// Example usage and testing
export const runValidationExamples = () => {
  console.log('=== Validation Examples ===\n');

  // Test bad word filtering
  console.log('1. Bad Word Filtering:');
  console.log('Input: "This is a test message with some bad words like fuck and shit"');
  console.log('Output:', sanitizeText('This is a test message with some bad words like fuck and shit'));
  console.log('');

  // Test spam detection
  console.log('2. Spam Detection:');
  console.log('Input: "CLICK HERE TO WIN FREE MONEY!!! ACT NOW LIMITED TIME OFFER!!!"');
  console.log('Output:', sanitizeText('CLICK HERE TO WIN FREE MONEY!!! ACT NOW LIMITED TIME OFFER!!!'));
  console.log('');

  // Test script injection
  console.log('3. Script Injection Prevention:');
  console.log('Input: "Hello <script>alert(\'xss\')</script> world"');
  console.log('Output:', sanitizeText('Hello <script>alert(\'xss\')</script> world'));
  console.log('');

  // Test email validation
  console.log('4. Email Validation:');
  console.log('Valid email "user@example.com":', validateEmail('user@example.com'));
  console.log('Invalid email "spam123@temp.com":', validateEmail('spam123@temp.com'));
  console.log('');

  // Test phone validation
  console.log('5. Phone Validation:');
  console.log('Valid phone "1234567890":', validatePhone('1234567890'));
  console.log('Invalid phone "1111111111":', validatePhone('1111111111'));
  console.log('');

  // Test message validation
  console.log('6. Message Validation:');
  const shortMessage = 'Hi';
  const longMessage = 'A'.repeat(1500);
  const spamMessage = 'BUY NOW BUY NOW BUY NOW BUY NOW BUY NOW BUY NOW BUY NOW BUY NOW BUY NOW BUY NOW';
  
  console.log('Short message:', validateMessage(shortMessage));
  console.log('Long message:', validateMessage(longMessage));
  console.log('Spam message:', validateMessage(spamMessage));
  console.log('');

  // Test complete form validation
  console.log('7. Complete Form Validation:');
  const validForm = {
    emailer: 'user@example.com',
    contact: '1234567890',
    message: 'This is a valid message with proper content.',
  };
  
  const invalidForm = {
    emailer: 'spam@temp.com',
    contact: '1111111111',
    message: 'FUCK YOU SHIT HEAD BUY NOW!!!',
  };
  
  console.log('Valid form:', validateAndSanitizeFooterForm(validForm));
  console.log('Invalid form:', validateAndSanitizeFooterForm(invalidForm));
  console.log('');

  console.log('=== End of Examples ===');
};

// Uncomment the line below to run examples in development
// if (import.meta.env.DEV) {
//   runValidationExamples();
// } 