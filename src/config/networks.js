let envNetworks = {};

if(process.env.NODE_ENV !== 'production') {
  const envConfig = require(`./environments/${process.env.NODE_ENV}.js`);
  envNetworks = envConfig.networks;
}

export const networks = {
  classic: {
    lcdURL: 'https://lcd.terra.dev',
    chainID: 'columbus-5',
    factoryContractAddress: 'terra1fnywlw4edny3vw44x04xd67uzkdqluymgreu7g',
    gasPrices: { uusd: 0.15 },
    allowedPairContracts: [ 'terra1g5py2hu8kpenqetv6xjas5z5gtaszhsuk8yn7n'
      
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
