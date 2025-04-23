import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HardDrive, Home, FileText, Menu, X, Wallet } from 'lucide-react';

interface NavbarProps {
  isConnected: boolean;
  displayAddress: string;
  onConnectWallet: () => void;
}

function Navbar({ isConnected, displayAddress, onConnectWallet }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-400 transition">
              <HardDrive className="h-6 w-6" />
              <span className="font-semibold text-lg">BlockDrive</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/share" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1">
              <FileText className="h-4 w-4" />
              <span>Share</span>
            </Link>
            <Link to="/storage" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1">
              <HardDrive className="h-4 w-4" />
              <span>Storage</span>
            </Link>
            <button 
              onClick={onConnectWallet}
              className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition"
            >
              <Wallet className="h-4 w-4" />
              <span>{isConnected ? displayAddress : 'Connect Wallet'}</span>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </div>
              </Link>
              <Link
                to="/share"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Share</span>
                </div>
              </Link>
              <Link
                to="/storage"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center space-x-2">
                  <HardDrive className="h-5 w-5" />
                  <span>Storage</span>
                </div>
              </Link>
              <button 
                onClick={onConnectWallet}
                className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2 transition"
              >
                <Wallet className="h-5 w-5" />
                <span>{isConnected ? displayAddress : 'Connect Wallet'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;