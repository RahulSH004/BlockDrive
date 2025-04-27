import { useState, useCallback, useEffect } from 'react';
import { ConnectedWallet, walletinfo } from '../types/wallet';
import { 
  getAvailableWallets, 
  getStoredWallet, 
  storeWalletConnection,
  clearStoredWallet
} from '../service/wallet';
import { 
  connectEVMWallet,
  setupEVMAccountsListener
} from '../service/ethwalletservice';
import {
  connectSolanaWallet,
  disconnectSolanaWallet,
  getSolanaProvider
} from '../service/solwallet';

export const useWallet = () => {
  const [wallet, setWallet] = useState<ConnectedWallet | null>(null);

  const connect = useCallback(async (selectedWallet: walletinfo) => {
    try {
      let address: string;
      let provider: any;

      if (selectedWallet.type === 'evm') {
        provider = window.ethereum;
        address = await connectEVMWallet(provider);
      } else {
        provider = getSolanaProvider(selectedWallet.name);
        if (!provider) {
          throw new Error('Unsupported Solana wallet');
        }
        address = await connectSolanaWallet(provider);
      }

      const connectedWallet: ConnectedWallet = {
        address,
        chaintype: selectedWallet.type,
        walletname: selectedWallet.name
      };

      setWallet(connectedWallet);
      storeWalletConnection({
        chaintype: selectedWallet.type,
        walletname: selectedWallet.name
      });
      
      return connectedWallet;
    } catch (error) {
      console.error('Wallet connection failed:', error);
      throw error;
    }
  }, []);

  const disconnect = useCallback(async () => {
    if (!wallet) return;

    try {
      if (wallet.chaintype === 'solana') {
        const provider = getSolanaProvider(wallet.walletname);
        if (provider) {
          await disconnectSolanaWallet(provider);
        }
      }

      clearStoredWallet();
      setWallet(null);
    } catch (error) {
      console.error('Wallet disconnection failed:', error);
      throw error;
    }
  }, [wallet]);

  // Auto-connect on startup if there's a stored wallet
  useEffect(() => {
    const autoConnect = async () => {
      const storedWallet = getStoredWallet();
      if (!storedWallet) return;

      const availableWallets = getAvailableWallets();
      const walletInfo = availableWallets.find(
        w => w.type === storedWallet.chaintype && w.name === storedWallet.walletname
      );

      if (walletInfo && walletInfo.installed) {
        try {
          await connect(walletInfo);
        } catch (error) {
          console.error('Auto-connect failed:', error);
          clearStoredWallet();
        }
      }
    };

    autoConnect();
  }, [connect]);

  // Handle account changes for EVM wallets
  useEffect(() => {
    if (!wallet || wallet.chaintype !== 'evm') return;

    const handleAccountsChanged = async (accounts: string[]) => {
      if (accounts.length === 0) {
        await disconnect();
      } else if (wallet.address !== accounts[0]) {
        const walletInfo = getAvailableWallets().find(w => w.name === wallet.walletname);
        if (walletInfo) {
          await connect(walletInfo);
        }
      }
    };

    return setupEVMAccountsListener(handleAccountsChanged);
  }, [wallet, disconnect, connect]);

  return {
    wallet,
    connect,
    disconnect
  };
};