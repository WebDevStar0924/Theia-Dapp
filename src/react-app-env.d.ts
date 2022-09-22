/// <reference types="react-scripts" />

declare module "*.mp4" {
  const src: string;
  export default src;
}

interface WindowChain {
  ethereum?: {
    isMetaMask?: true;
    request: (...args: any[]) => void;
  };
  web3?: any;
}
