import React, { useMemo } from 'react';
import { Wallet, X } from 'lucide-react';
import { getAvailableWallets } from '../service/wallet';
import { walletinfo } from '../types/wallet';

interface ChainSelectorProps {
  onSelectWallet: (wallet: walletinfo) => void;
  isOpen: boolean;
  onClose: () => void;
}

function ChainSelector({ onSelectWallet, isOpen, onClose }: ChainSelectorProps) {
  const availableWallets = useMemo(() => getAvailableWallets(), []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl border border-white/10 p-6 w-full max-w-sm relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-white pr-8">Select Wallet</h2>
        
        <div className="space-y-3">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-400 mb-2">EVM Wallets</h3>
            {availableWallets
              .filter(wallet => wallet.type === 'evm')
              .map(wallet => (
                <button
                  key={wallet.name}
                  onClick={() => {
                    onSelectWallet(wallet);
                    onClose();
                  }}
                  disabled={!wallet.installed}
                  className={`w-full flex items-center justify-between p-4 mb-2 rounded-lg transition text-white
                    ${wallet.installed ? 'bg-white/5 hover:bg-white/10' : 'bg-white/5 opacity-50 cursor-not-allowed'}`}
                >
                  <div className="flex items-center gap-3">
                    <Wallet className="h-6 w-6 text-blue-400" />
                    <span>{wallet.name}</span>
                  </div>
                  {!wallet.installed && (
                    <span className="text-sm text-gray-400">Not Installed</span>
                  )}
                </button>
              ))}
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">Solana Wallets</h3>
            {availableWallets
              .filter(wallet => wallet.type === 'solana')
              .map(wallet => (
                <button
                  key={wallet.name}
                  onClick={() => {
                    onSelectWallet(wallet);
                    onClose();
                  }}
                  disabled={!wallet.installed}
                  className={`w-full flex items-center justify-between p-4 mb-2 rounded-lg transition text-white
                    ${wallet.installed ? 'bg-white/5 hover:bg-white/10' : 'bg-white/5 opacity-50 cursor-not-allowed'}`}
                >
                  <div className="flex items-center gap-3">
                    <Wallet className="h-6 w-6 text-purple-400" />
                    <span>{wallet.name}</span>
                  </div>
                  {!wallet.installed && (
                    <span className="text-sm text-gray-400">Not Installed</span>
                  )}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChainSelector;