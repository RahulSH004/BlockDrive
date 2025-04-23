import React, { useState, useCallback } from 'react';
import FileUpload from '../components/fileupload';
import FileList from '../components/filelist';
import { FileType } from '../types/file';

function FileSharing() {
  const [files, setFiles] = useState<FileType[]>([]);
  const [uploading, setUploading] = useState(false);
  const [privacy, setPrivacy] = useState<'public' | 'private' | 'token-gated'>('public');

  const handleUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    
    setUploading(true);
    try {
      const file = event.target.files[0];
      
      const newFile: FileType = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        privacy,
      };
      
      setFiles(prev => [...prev, newFile]);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setUploading(false);
    }
  }, [privacy]);

  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">File Sharing</h1>
        <p className="text-gray-300">
          Upload and share your files securely with customizable privacy settings.
        </p>
      </div>

      <FileUpload
        onUpload={handleUpload}
        uploading={uploading}
        privacy={privacy}
        onPrivacyChange={setPrivacy}
      />

      <FileList files={files} />
    </div>
  );
}

export default FileSharing;