# BlockDrive

BlockDrive is a decentralized file storage and file sharing platform powered by blockchain wallets. It allows users to upload, store, and share files directly from their crypto wallets, ensuring ownership, privacy, and decentralization.

This project uses **React**, **TypeScript**, **TailwindCSS**, **Vite**, **IPFS**, and integrates with **EVM** (MetaMask) and **Solana** wallets.

---

## Features

- Decentralized File Upload (via IPFS)
- Peer-to-Peer File Sharing (encrypted)
- Wallet-Based Authentication
  - Supports **EVM wallets** (like MetaMask)
  - Supports **Solana wallets** (like Phantom)
- Multiple Wallet Options on Connect
- Responsive and Modern UI
- Built using Vite + React + TypeScript

---

## Project Structure

```bash
decentra-portal/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── FileUpload.tsx
│   │   ├── FileList.tsx
│   │   └── Loader.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── FileSharing.tsx
│   │   └── FileStorage.tsx
│   ├── services/
│   │   ├── ipfsService.ts
│   │   └── walletService.ts
│   ├── App.tsx
│   ├── index.css
│   └── routes.tsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## Installation

```bash
git clone https://github.com/yourusername/blockdrive.git
cd blockdrive
npm install
npm run dev
```

---

## Tech Stack

- **Frontend**: React + TypeScript + TailwindCSS
- **State Management**: React Context + Hooks
- **Wallets**:
  - EVM: `@wagmi/core`, `@wagmi/connectors`, `viem`
  - Solana: `@solana/wallet-adapter-react`, `@solana/wallet-adapter-wallets`, `@solana/wallet-adapter-react-ui`
- **Storage**: IPFS (via Web3Storage, NFT.Storage, etc.)
- **Routing**: React Router
- **Bundler**: Vite

---

## How Wallet Connect Works

- User clicks on `Connect Wallet`.
- Option menu shows **EVM Wallets** and **Solana Wallets**.
- According to user selection, it initializes:
  - **EVM Wallets** connection through Wagmi.
  - **Solana Wallets** connection through Wallet Adapter.
- File uploads and encryption tied to user's wallet address.

---

## Future Improvements

- Add support for File Encryption/Decryption
- User dashboard with storage usage statistics
- Access control using smart contracts
- Payment gateway integration for premium storage

---

## License

This project is open-source under the [MIT License](LICENSE).

---

> Developed with ❤️ by Rahul for decentralizing data ownership and access.


