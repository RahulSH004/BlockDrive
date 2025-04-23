import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FileSharing from './Pages/Filesharing';
import FileStorage from './Pages/Filestorage';
import Landing from './Pages/Landing';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const displayAddress = "0x1234...5678";

  const handleConnectWallet = () => {
    setIsConnected(!isConnected);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
        <Navbar 
          isConnected={isConnected}
          displayAddress={displayAddress}
          onConnectWallet={handleConnectWallet}
        />

        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/share" element={<FileSharing />} />
            <Route path="/storage" element={<FileStorage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;