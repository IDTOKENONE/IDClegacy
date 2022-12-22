let envNetworks = {};

if(process.env.NODE_ENV !== 'production') {
  const envConfig = require(`./environments/${process.env.NODE_ENV}.js`);
  envNetworks = envConfig.networks;
}

export const networks = {
  classic: {
    lcdURL: 'https://lcd.terra.dev',
    chainID: 'columbus-5',
    factoryContractAddress: 'terra1jkndu9w5attpz09ut02sgey5dd3e8sq5watzm0',
    gasPrices: { uusd: 0.15 },
    allowedPairContracts: [ 'terra1wqvhrrzkcn7dv2rkd5gdq2prawm64g7lnasy47'
      
    ]
  },
  testnet: {
    lcdURL: 'https://pisco-lcd.terra.dev/',
    chainID: 'pisco-1',
    factoryContractAddress: 'terra1nt459erudaug8d2vsqjmhv7zc9c9vmamj3esn9',
    gasPrices: { uusd: 0.15 },
    allowedPairContracts: [
      'terra1sz988qp6vma3j0xj5w7fsskqcuc8kjn0mmtcqc'
    ]
  },
  ...envNetworks
};

export const defaultNetwork = networks[process.env.REACT_APP_DEFAULT_NETWORK];
