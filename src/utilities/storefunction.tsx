import React from 'react';
import { File, Archive } from 'lucide-react';
import { FileType } from '../types/file';

export const getFileCategory = (file: File): string => {
  const fileName = file.name.toLowerCase();
  const fileType = file.type;
  
  // Document check
  if (fileType.includes('pdf') || 
      fileType.includes('word') || 
      fileType.includes('document') ||
      fileType.includes('spreadsheet') ||
      fileType.includes('presentation') ||
      fileName.endsWith('.pdf') ||
      fileName.endsWith('.doc') ||
      fileName.endsWith('.docx') ||
      fileName.endsWith('.xls') ||
      fileName.endsWith('.xlsx') ||
      fileName.endsWith('.ppt') ||
      fileName.endsWith('.pptx') ||
      fileName.endsWith('.txt')) {
    return 'documents';
  }
  
  // Image check
  if (fileType.startsWith('image/') ||
      fileName.endsWith('.jpg') ||
      fileName.endsWith('.jpeg') ||
      fileName.endsWith('.png') ||
      fileName.endsWith('.gif') ||
      fileName.endsWith('.webp') ||
      fileName.endsWith('.svg')) {
    return 'images';
  }
  
  // Video check
  if (fileType.startsWith('video/') ||
      fileName.endsWith('.mp4') ||
      fileName.endsWith('.webm') ||
      fileName.endsWith('.avi') ||
      fileName.endsWith('.mov') ||
      fileName.endsWith('.mkv')) {
    return 'videos';
  }
  
  // Archive check
  if (fileName.endsWith('.zip') ||
      fileName.endsWith('.rar') ||
      fileName.endsWith('.7z') ||
      fileName.endsWith('.tar') ||
      fileName.endsWith('.gz')) {
    return 'archives';
  }
  
  return 'other';
};

export const getFileIcon = (file: FileType) => {
  const fileName = file.name.toLowerCase();
  
  if (file.category === 'archives' || 
      fileName.endsWith('.zip') || 
      fileName.endsWith('.rar') || 
      fileName.endsWith('.7z')) {
    return <Archive className="h-6 w-6 text-purple-400" />;
  }
  
  if (file.category === 'images') {
    return <File className="h-6 w-6 text-green-400" />;
  }
  
  if (file.category === 'videos') {
    return <File className="h-6 w-6 text-red-400" />;
  }
  
  if (file.category === 'documents') {
    return <File className="h-6 w-6 text-blue-400" />;
  }
  
  return <File className="h-6 w-6 text-gray-400" />;
};