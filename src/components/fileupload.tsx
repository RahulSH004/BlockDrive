import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  uploading: boolean;
  privacy: 'public' | 'private' | 'token-gated';
  onPrivacyChange: (value: 'public' | 'private' | 'token-gated') => void;
}

function FileUpload({ onUpload, uploading, privacy, onPrivacyChange }: FileUploadProps) {
  // Type-safe handler for privacy change
  const handlePrivacyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    // Validate that the value is one of the allowed options
    if (value === 'public' || value === 'private' || value === 'token-gated') {
      onPrivacyChange(value);
    }
  };

  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
      <div className="flex items-center gap-4 mb-4">
        <select
          className="bg-white/10 text-white border border-white/20 rounded-lg px-4 py-2"
          value={privacy}
          onChange={handlePrivacyChange}
        >
          <option className="text-white bg-gray-700" value="public">Public</option>
          <option className="text-white bg-gray-700" value="private">Private</option>
          <option className="text-white bg-gray-700" value="token-gated">Token Gated</option>
        </select>
        
        <label className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer transition">
          <Upload className="h-5 w-5" />
          <span>Upload File</span>
          <input
            type="file"
            className="hidden"
            onChange={onUpload}
            disabled={uploading}
          />
        </label>
      </div>

      {uploading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="mt-2">Uploading to IPFS...</p>
        </div>
      )}
    </div>
  );
}

export default FileUpload;