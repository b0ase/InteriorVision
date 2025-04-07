/**
 * Helper functions for handling file uploads
 */

/**
 * Uploads files to the server
 * @param files Files to upload
 * @param projectId Optional project ID
 * @returns Server response with upload results
 */
export async function uploadFiles(files: File[], projectId?: string) {
  try {
    const formData = new FormData();
    
    // Add each file to form data
    files.forEach(file => {
      formData.append('files', file);
    });
    
    // Add project ID if provided
    if (projectId) {
      formData.append('projectId', projectId);
    }
    
    // Send the upload request
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error uploading files:', error);
    throw error;
  }
}

/**
 * Validates file size and type
 * @param file File to validate
 * @param maxSizeMB Maximum file size in MB
 * @param acceptedTypes Array of accepted MIME types
 * @returns Validation result
 */
export function validateFile(
  file: File, 
  maxSizeMB = 10, 
  acceptedTypes: string[] = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
) {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  
  if (file.size > maxSizeBytes) {
    return {
      valid: false,
      error: `File size exceeds ${maxSizeMB}MB limit`
    };
  }
  
  if (acceptedTypes.length > 0 && !acceptedTypes.includes(file.type)) {
    return {
      valid: false,
      error: `File type not accepted. Please upload ${acceptedTypes.join(', ')}`
    };
  }
  
  return { valid: true };
}

/**
 * Formats file size into human-readable format
 * @param bytes File size in bytes
 * @returns Formatted file size
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
} 