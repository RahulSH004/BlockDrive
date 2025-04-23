export interface FileType {
    id: string;
    name: string;
    size: number;
    type: string;
    privacy: 'public' | 'private' | 'token-gated';
    cid?: string;
    category?: string;
    lastModified?: Date;
  }

  export interface FileCategory {
    id: string;
    name: string;
    accept: string;
    icon: string;
  }