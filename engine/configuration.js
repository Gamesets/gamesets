import SimpleCrypto from "simple-crypto-js";
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt";
const ethraw =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
export const simpleCrypto = new SimpleCrypto(cipherKey);
export const cipherEth = simpleCrypto.encrypt(ethraw);
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

/*
Global Configurations
*/

/*
Polygon Mumbai Testnet
*/
export var mumErc20 = "0x892B4f37A07bab70F7AE6CAE2247011957489424";
export var mumCustody = "0x5f3e905E66CD3846b036A8fB747f03F2c53664Af";
export var mumBridgeNFT = "0x5b3256965e7C3cF26E11FCAf296DfC8807C01073";
export var mumrpc = "https://matic-mumbai.chainstacklabs.com";

/*
Ethereum rinkebyTestnet
*/
export var goeErc20 = "";
export var goeCustody = "";
export var goeNFT = "";
export var goerpc = "https://rpc.ankr.com/eth_rinkeby";

/*
BSC Testnet
*/
export var bsctErc20 = "0xE85705375d36B1EFc6F1165054dc05fe43bBfee6";
export var bsctCustody = "0xbB553dDCe343570C4A54db69e054C8CDb4398bf0";
export var bsctNFT = "0x2942A291D5A5290b9cAf8401ACa2232011bBF25c";
export var bsctrpc = "https://data-seed-prebsc-1-s3.binance.org:8545";

/*
Ethereum Mainnet
*/
export var ethrpc = "https://rpc.ankr.com/eth";

/*
BSC Mainnet
*/

export var bscrpc = "https://bsc-dataseed.binance.org";
