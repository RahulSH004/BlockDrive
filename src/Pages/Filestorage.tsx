import React, { useState, useRef } from 'react';
import { Folder, Search, Upload } from 'lucide-react';
import { FileType, FileCategory } from '../types/file';
import { getFileCategory, getFileIcon } from '../utilities/storefunction';
import CategorySidebar from '../components/sidebar_comp';

function FileStorage() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [files, setFiles] = useState<FileType[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories: FileCategory[] = [
    { id: 'all', name: 'All Files', accept: '*/*', icon: 'file' },
    { id: 'documents', name: 'Documents', accept: '.pdf,.doc,.docx,.txt,.rtf,.ppt,.pptx,.xls,.xlsx', icon: 'file' },
    { id: 'images', name: 'Images', accept: '.jpg,.jpeg,.png,.gif,.webp,.svg', icon: 'file' },
    { id: 'videos', name: 'Videos', accept: '.mp4,.webm,.avi,.mov,.mkv', icon: 'file' },
    { id: 'archives', name: 'Archives', accept: '.zip,.rar,.7z,.tar,.gz', icon: 'archive' },
  ];

  // Get the current category's accepted file types
  const getAcceptedFileTypes = () => {
    const selectedCategory = categories.find(cat => cat.id === category);
    return selectedCategory ? selectedCategory.accept : '*/*';
  };
  
  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    
    if (!fileList || fileList.length === 0) return;
    
    // Process the selected files
    const newFiles: FileType[] = Array.from(fileList).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      privacy: 'public', // Default privacy
      category: getFileCategory(file),
      lastModified: new Date(file.lastModified),
    }));
    
    // Add the new files to our state
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    
    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Trigger file input click
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  // Filter files based on category and search term
  const filteredFiles = files.filter(file => {
    // Filter by category
    const categoryMatch = category === 'all' || file.category === category;
    
    // Filter by search term
    const searchMatch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && searchMatch;
  });

  return (
    <div className="text-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">File Storage</h1>
        <p className="text-gray-300">
          Securely store and organize your files in decentralized storage.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <CategorySidebar 
          categories={categories}
          selectedCategory={category}
          onSelectCategory={setCategory}
        />

        <div className="md:col-span-3">
          <div className="bg-white/5 rounded-xl border border-white/10">
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search files..."
                    className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                
                <button 
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
                  onClick={handleUploadClick}
                >
                  <Upload className="h-5 w-5" />
                  {category !== 'all' 
                    ? `Upload ${categories.find(cat => cat.id === category)?.name}` 
                    : 'Upload Files'}
                </button>
                
                {/* Hidden file input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept={getAcceptedFileTypes()}
                  onChange={handleFileUpload}
                  multiple
                />
              </div>
            </div>

            <div className="p-4">
              {filteredFiles.length === 0 ? (
                <div className="text-center py-12">
                  <div className="bg-white/5 rounded-full p-4 inline-block mb-4">
                    <Folder className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No files yet</h3>
                  <p className="text-gray-400">
                    {category !== 'all' 
                      ? `Upload ${categories.find(cat => cat.id === category)?.name} to start organizing your storage`
                      : 'Upload files to start organizing your storage'}
                  </p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {filteredFiles.map(file => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
                    >
                      <div className="flex items-center space-x-4">
                        {getFileIcon(file)}
                        <div>
                          <h3 className="font-medium">{file.name}</h3>
                          <p className="text-sm text-gray-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB ·{' '}
                            {file.lastModified && new Date(file.lastModified).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileStorage;