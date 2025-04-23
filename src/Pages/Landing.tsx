import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, HardDrive, Shield } from 'lucide-react';

function Layout() {
  return (
    <div className="text-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Decentralized Storage Solution
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Secure, private, and decentralized file storage and sharing platform powered by IPFS technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-blue-400" />
            <h2 className="text-2xl font-semibold ml-3">File Sharing</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Share files securely with customizable privacy settings. Control access with token-gating and manage your shared content easily.
          </p>
          <Link
            to="/share"
            className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
          >
            Start Sharing
          </Link>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
          <div className="flex items-center mb-4">
            <HardDrive className="h-8 w-8 text-purple-400" />
            <h2 className="text-2xl font-semibold ml-3">File Storage</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Store your files securely in a decentralized network. Organize with categories and access your data from anywhere.
          </p>
          <Link
            to="/storage"
            className="inline-flex items-center px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition"
          >
            Start Storing
          </Link>
        </div>
      </div>

      <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
        <div className="flex items-center mb-6">
          <Shield className="h-8 w-8 text-green-400" />
          <h2 className="text-2xl font-semibold ml-3">Why Choose Us?</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Decentralized</h3>
            <p className="text-gray-300">
              Your files are stored across a network of nodes, ensuring high availability and resistance to censorship.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Secure</h3>
            <p className="text-gray-300">
              End-to-end encryption and token-gated access control keep your files safe and private.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">User-Friendly</h3>
            <p className="text-gray-300">
              Intuitive interface makes it easy to manage, share, and organize your files.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;