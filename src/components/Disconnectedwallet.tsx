import React from 'react';
import { Wallet } from 'lucide-react';

interface DisconnectConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onDisconnect: () => void;
  walletName: string;
}

function DisconnectConfirmation({ isOpen, onClose, onDisconnect, walletName }: DisconnectConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl border border-white/10 p-6 w-full max-w-sm">
        <div className="flex items-center gap-3 mb-4">
          <Wallet className="h-6 w-6 text-blue-400" />
          <h2 className="text-xl font-semibold text-white">Disconnect Wallet</h2>
        </div>
        
        <p className="text-gray-300 mb-6">
          Are you sure you want to disconnect {walletName}?
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded-lg text-white transition"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onDisconnect();
              onClose();
            }}
            className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition"
          >
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisconnectConfirmation;