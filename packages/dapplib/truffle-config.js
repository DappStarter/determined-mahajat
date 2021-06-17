require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad hope area blue stereo'; 
let testAccounts = [
"0xa85775cd17f9a8fc35cf026edcad5dedf9d35002c6d2d9ddc5edebbe540aa4e4",
"0xbf5f9df1dfda7005e41f3f553a1b7f964759e5da0e85f50293e1343ed7e9b029",
"0xd39731149f3488c3faef67c728dda799cec85ec24411a3b5cbc821d5e23ba2dc",
"0x1fc65680c46392df51615afa96c84c49dedbd863a8e54cd783c5325466587b35",
"0xc02625dbb6e3f5e53e9ecb745fbff51c92fd876a796716904adfcbdbe58c0d24",
"0x2fb83055a461bcad00c7b02b3c7578123f0e7a07db3be5e2b59204438c1b76cd",
"0x0b735baeac66411b5ff1dd8b8e85d4096664e121247a1feda54df6de3f56db16",
"0x7477ef245e6537f551c54a275e0f5cc0d27f21e73a761398d6b654f8de3471b2",
"0xdd6a0b2c2b8e0e1ecba29996a9ed5353363970b7cbbfcc2717758bf9d7d491e4",
"0xc5db277727334d768e2a16cb333f8354bf32325c30f258aa4170a4c43bf5da9a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

