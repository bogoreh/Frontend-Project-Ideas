import { PDFDocument } from 'pdf-lib';

export const convertPDF = async (file, conversionType) => {
  // Validate file
  if (!file) {
    throw new Error('No file provided');
  }

  if (file.size > 10 * 1024 * 1024) { // 10MB limit
    throw new Error('File size exceeds 10MB limit');
  }

  // Simulate conversion (replace with actual PDF conversion logic)
  return new Promise((resolve) => {
    setTimeout(() => {
      const blob = new Blob([file], { type: 'application/octet-stream' });
      
      let filename = file.name;
      switch (conversionType) {
        case 'pdf-to-word':
          filename = file.name.replace('.pdf', '.docx');
          break;
        case 'pdf-to-excel':
          filename = file.name.replace('.pdf', '.xlsx');
          break;
        case 'pdf-to-ppt':
          filename = file.name.replace('.pdf', '.pptx');
          break;
        case 'pdf-to-image':
          filename = file.name.replace('.pdf', '.zip');
          break;
        default:
          filename = file.name;
      }
      
      resolve({
        blob,
        filename,
        success: true
      });
    }, 2000);
  });
};

export const validatePDF = (file) => {
  const errors = [];
  
  if (!file) {
    errors.push('No file selected');
    return errors;
  }
  
  if (file.type !== 'application/pdf') {
    errors.push('File must be a PDF');
  }
  
  if (file.size > 10 * 1024 * 1024) {
    errors.push('File size must be less than 10MB');
  }
  
  return errors;
};