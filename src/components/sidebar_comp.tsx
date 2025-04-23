import React from 'react';
import { Folder, File, Archive } from 'lucide-react';
import { FileCategory } from '../types/file';

interface CategorySidebarProps {
  categories: FileCategory[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  const getCategoryIcon = (iconType: string) => {
    switch(iconType) {
      case 'archive':
        return <Archive className="h-4 w-4 mr-2" />;
      case 'folder':
        return <Folder className="h-4 w-4 mr-2" />;
      default:
        return <File className="h-4 w-4 mr-2" />;
    }
  };

  return (
    <div className="md:col-span-1">
      <div className="bg-white/5 rounded-xl border border-white/10 p-4">
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <nav className="space-y-2">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                selectedCategory === cat.id
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-white/10 text-gray-300'
              }`}
              onClick={() => onSelectCategory(cat.id)}
            >
              <div className="flex items-center">
                {getCategoryIcon(cat.icon)}
                {cat.name}
              </div>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CategorySidebar;