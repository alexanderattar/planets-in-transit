/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-truffle5');
require('@nomiclabs/hardhat-etherscan');
require('hardhat-deploy');
require('dotenv').config();

const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  process.env.ALCHEMY_MAINNET_RPC_URL ||
  'https://eth-mainnet.alchemyapi.io/v2/your-api-key';

const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL ||
  'https://eth-rinkeby.alchemyapi.io/v2/your-api-key';

const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL ||
  'https://eth-rinkeby.alchemyapi.io/v2/your-api-key';

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY || '';
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || '';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
      blockGasLimit: 100000000429720, // whatever you want here
    },
    localhost: {},
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      saveDeployments: true,
      blockGasLimit: 100000000429720, // whatever you want here
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
      saveDeployments: true,
      blockGasLimit: 100000000429720, // whatever you want here
    },
    ganache: {
      url: 'http://localhost:8545',
    },
    mainnet: {
      url: MAINNET_RPC_URL,
      // accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
    polygon: {
      url: 'https://rpc-mainnet.maticvigil.com/',
      // accounts: [PRIVATE_KEY],
      saveDeployments: true,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.13',
      },
    ],
  },
  mocha: {
    timeout: 100000,
  },
};
