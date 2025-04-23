import React from 'react';
import { HardDrive, Linkedin, Instagram, Github, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <HardDrive className="h-6 w-6 text-blue-400" />
            <span className="text-white font-semibold">BlockDrive</span>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <div className="text-gray-400 text-sm">
            Designed with ❤️ by <a href="https://github.com/RahulSH004" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">BlockDrive Team</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;