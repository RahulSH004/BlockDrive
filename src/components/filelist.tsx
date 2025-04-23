import React from 'react';
import { Globe, Lock, Eye, Download } from 'lucide-react';
import { FileType } from '../types/file';

interface FileListProps {
  files: FileType[];
}


function FileList({ files }: FileListProps) {
  return (
    <div className="bg-white/5 rounded-xl border border-white/10">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-semibold">Your Files</h2>
      </div>
      
      <div className="divide-y divide-white/10">
        {files.map(file => (
          <div key={file.id} className="p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl">
                {file.privacy === 'public' && <Globe className="text-green-400" />}
                {file.privacy === 'private' && <Lock className="text-red-400" />}
                {file.privacy === 'token-gated' && <Lock className="text-yellow-400" />}
              </div>
              <div>
                <h3 className="font-medium">{file.name}</h3>
                <p className="text-sm text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <Eye className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-lg transition">
                <Download className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
        
        {files.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            No files uploaded yet
          </div>
        )}
      </div>
    </div>
  );
}

export default FileList;