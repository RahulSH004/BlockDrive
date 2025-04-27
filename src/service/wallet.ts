import { walletinfo, storedwalletinfo } from '../types/wallet';
import { getEVMWallets } from './ethwalletservice';
import { getSolanaWallets } from './solwallet';

const WALLET_STORAGE_KEY = 'connected_wallet';

export const getAvailableWallets = (): walletinfo[] => {
  return [...getEVMWallets(), ...getSolanaWallets()];
};

export const storeWalletConnection = (walletInfo: storedwalletinfo) => {
  localStorage.setItem(WALLET_STORAGE_KEY, JSON.stringify(walletInfo));
};

export const getStoredWallet = (): storedwalletinfo | null => {
  const stored = localStorage.getItem(WALLET_STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};

export const clearStoredWallet = () => {
  localStorage.removeItem(WALLET_STORAGE_KEY);
};