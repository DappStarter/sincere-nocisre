require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note rifle unaware harvest oppose off gather'; 
let testAccounts = [
"0xd0df0c6d56c07b5209fdaeed2300bf753f1817cd69bdf5c944c52a8ebbe2bd7e",
"0xa7be990c88d675bde6cd84c82dad429bcccdca06866496cafcf0d51afcbd304e",
"0xda819312355a332fd7895b6df6285309e36367926d3ed80ec446cff381c17f67",
"0x1d0e7256063fca58f7647946a1030d296fa6aa98e1bdc1c2cb306eb59ffb974d",
"0xd632371c0d05c4886ffcf1ffa6c2cf70a6a42dead8cceac225271eef38a8c36d",
"0xf5ee0d6499d59a98fff13b962c609e499a5e4d2bdea1186f39025efeb9cad584",
"0xb242513af68477e2e52e2cd0b87c4421c2357f2f81501667fd2c9cf7e12d3c87",
"0x725bccb99fe31ab46a7cfb08ea843a8955fe048ac81e2a787199c5f84d9ba006",
"0xc5648cd12ba2d80e7b8b4833fbe7c07b5e6856af1e4d711906d7a6ccb9a1a7c6",
"0xb35c156d854ab9cc4928c7a640efa87d00d123675f1b3e2290ac32b188f5d5ea"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
