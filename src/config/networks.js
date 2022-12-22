let envNetworks = {};

if(process.env.NODE_ENV !== 'production') {
  const envConfig = require(`./environments/${process.env.NODE_ENV}.js`);
  envNetworks = envConfig.networks;
}

export const networks = {
  mainnet: {
    lcdURL: 'https://lcd.terra.dev',
    chainID: 'columbus-5',
    factoryContractAddress: 'terra1fnywlw4edny3vw44x04xd67uzkdqluymgreu7g',
    gasPrices: { uusd: 0.15 },
    allowedPairContracts: [ 'terra1l7xu2rl3c7qmtx3r5sd2tz25glf6jh8ul7aag7'
      
    ]
  },
  testnet: {
    lcdURL: 'https://pisco-lcd.terra.dev/',
    chainID: 'pisco-1',
    factoryContractAddress: 'terra1nt459erudaug8d2vsqjmhv7zc9c9vmamj3esn9',
    gasPrices: { uusd: 0.15 },
    allowedPairContracts: [
      'terra1vmsnmx6q3amlhrkzy8yelefxdv572rw5m4qeec'
    ]
  },
  ...envNetworks
};

export const defaultNetwork = networks[process.env.REACT_APP_DEFAULT_NETWORK];
