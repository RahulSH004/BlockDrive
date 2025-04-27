import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import FileSharing from './Pages/Filesharing';
import FileStorage from './Pages/Filestorage';
import Landing from './Pages/Landing';
import ChainSelector from './components/chainselector';
import DisconnectConfirmation from './components/Disconnectedwallet';
import { useWallet } from './hooks/usewallet';
import { walletinfo } from './types/wallet';

function App() {
  const { wallet, connect, disconnect } = useWallet();
  const [isChainSelectorOpen, setIsChainSelectorOpen] = useState(false);
  const [isDisconnectOpen, setIsDisconnectOpen] = useState(false);

  const handleConnectWallet = () => {
    if (wallet) {
      setIsDisconnectOpen(true);
      return;
    }
    setIsChainSelectorOpen(true);
  };

  const handleSelectWallet = async (selectedWallet: walletinfo) => {
    try {
      if (!selectedWallet.installed) {
        alert(`Please install ${selectedWallet.name} wallet!`);
        return;
      }
      await connect(selectedWallet);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }
  };

  const displayAddress = wallet ? 
    `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}` : 
    '';

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
        <Navbar 
          isConnected={!!wallet}
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

        <ChainSelector 
          isOpen={isChainSelectorOpen}
          onClose={() => setIsChainSelectorOpen(false)}
          onSelectWallet={handleSelectWallet}
        />

        <DisconnectConfirmation
          isOpen={isDisconnectOpen}
          onClose={() => setIsDisconnectOpen(false)}
          onDisconnect={disconnect}
          walletName={wallet?.walletname || ''}
        />

        <Footer />
      </div>
    </Router>
  );
}

export default App;