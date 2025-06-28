import { useState, useCallback } from 'react';
import { submitContactForm } from '../api/footer.api';
import { validateAndSanitizeFooterForm } from '../../../utils/validation';
import type { IFooterFormInput } from '../types/footer.type';

interface UseFooterFormReturn {
  formData: IFooterFormInput;
  errors: Record<string, string>;
  isLoading: boolean;
  isSuccess: boolean;
  handleInputChange: (field: keyof IFooterFormInput, value: string) => void;
  handleSubmit: () => Promise<void>;
  resetForm: () => void;
  validateField: (field: keyof IFooterFormInput) => void;
}

export const useFooterForm = (): UseFooterFormReturn => {
  const [formData, setFormData] = useState<IFooterFormInput>({
    emailer: '',
    contact: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateField = useCallback((field: keyof IFooterFormInput) => {
    const validationResult = validateAndSanitizeFooterForm(formData);
    
    if (!validationResult.success && validationResult.errors) {
      const fieldError = validationResult.errors[field];
      if (fieldError) {
        setErrors(prev => ({ ...prev, [field]: fieldError }));
      } else {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [formData]);

  const handleInputChange = useCallback((field: keyof IFooterFormInput, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  const handleSubmit = useCallback(async () => {
    setIsLoading(true);
    setErrors({});
    setIsSuccess(false);

    try {
      const validationResult = validateAndSanitizeFooterForm(formData);
      
      if (!validationResult.success) {
        setErrors(validationResult.errors || {});
        return;
      }

      await submitContactForm(validationResult.data!);
      setIsSuccess(true);
      setFormData({ emailer: '', contact: '', message: '' });
    } catch (err) {
      try {
        const errorMessage = err instanceof Error ? err.message : String(err);
        const errorData = JSON.parse(errorMessage) as Record<string, unknown>;
        
        if (typeof errorData === 'object' && errorData !== null) {
          const firstError = Object.values(errorData)[0];
          setErrors({ 
            general: typeof firstError === 'string' ? firstError : 'Please check your input and try again.',
          });
        } else {
          setErrors({ general: 'Something went wrong. Please try again.' });
        }
      } catch {
        setErrors({ general: 'Something went wrong. Please try again.' });
      }
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({ emailer: '', contact: '', message: '' });
    setErrors({});
    setIsSuccess(false);
    setIsLoading(false);
  }, []);

  return {
    formData,
    errors,
    isLoading,
    isSuccess,
    handleInputChange,
    handleSubmit,
    resetForm,
    validateField,
  };
}; 