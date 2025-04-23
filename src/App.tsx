import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FileText, HardDrive, Home, Linkedin, Instagram, Github, Twitter, Menu, X, Wallet } from 'lucide-react';

import Landing from './Pages/Landing';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleConnectWallet = () => {
    setIsConnected(!isConnected);
  };

  const displayAddress = "0x1234...5678";

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
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
                  onClick={handleConnectWallet}
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
                    onClick={handleConnectWallet}
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

        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>

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
                Designed with ❤️ by <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">BlockDrive Team</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;