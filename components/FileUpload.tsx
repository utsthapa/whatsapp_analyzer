import { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

export default function FileUpload({ onFileSelect }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith('.txt')) {
      simulateUpload(file);
    } else {
      alert('Please upload a valid WhatsApp chat export (.txt) file');
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith('.txt')) {
      simulateUpload(file);
    } else {
      alert('Please upload a valid WhatsApp chat export (.txt) file');
    }
  };

  const simulateUpload = (file: File) => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onFileSelect(file);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <CloudArrowUpIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Drop your WhatsApp chat export here
        </h3>
        <p className="text-sm text-slate-600 mb-4">
          or click to select a file (.txt)
        </p>
        <input
          type="file"
          accept=".txt"
          onChange={handleFileInput}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
        >
          Select File
        </label>
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-200"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-600 mt-2">
              Uploading... {uploadProgress}%
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
