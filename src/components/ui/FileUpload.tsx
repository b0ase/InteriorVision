'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onFilesSelected: (files: File[]) => void;
  acceptedFileTypes?: string;
  multiple?: boolean;
  label?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFilesSelected,
  acceptedFileTypes = 'image/*',
  multiple = false,
  label = 'Upload Files',
}) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles?.length > 0) {
        onFilesSelected(acceptedFiles);
      }
    },
    [onFilesSelected]
  );

  const { getRootProps, getInputProps, isDragReject } = useDropzone({
    onDrop,
    accept: acceptedFileTypes.split(',').reduce((acc: Record<string, string[]>, type) => {
      const trimmedType = type.trim();
      if (trimmedType === 'image/*') {
        acc['image/*'] = [];
      } else if (trimmedType === 'application/pdf') {
        acc['application/pdf'] = [];
      } else {
        // Handle other types if needed
        acc[trimmedType] = [];
      }
      return acc;
    }, {}),
    multiple,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer hover:bg-slate-50 ${
        isDragActive ? 'border-slate-500 bg-slate-50' : 'border-slate-300'
      } ${isDragReject ? 'border-red-500 bg-red-50' : ''}`}
    >
      <input {...getInputProps()} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 mb-3 mx-auto text-slate-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
        />
      </svg>

      <p className="mb-1 font-medium">{label}</p>
      <p className="text-sm text-slate-500">
        {multiple ? 'Drag & drop files here, or click to select files' : 'Drag & drop a file here, or click to select a file'}
      </p>
      {isDragReject && (
        <p className="text-sm text-red-500 mt-2">
          Some files are not allowed. Please upload only {acceptedFileTypes.replace(/\*/g, ' ')} files.
        </p>
      )}
    </div>
  );
};

export default FileUpload; 