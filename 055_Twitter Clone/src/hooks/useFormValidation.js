import { useState } from 'react';

export const useFormValidation = (validateFunction) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = (values) => {
    const result = validateFunction(values);
    setErrors(result.errors);
    return result.isValid;
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const getFieldError = (field) => {
    return touched[field] ? errors[field] : null;
  };

  return {
    errors,
    validate,
    handleBlur,
    getFieldError,
    setErrors
  };
};