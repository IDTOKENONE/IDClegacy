module.exports = {
  networks: {
    testnet: {
    lcdURL: 'https://pisco-lcd.terra.dev/',
    chainID: 'pisco-1',
    factoryContractAddress: 'terra1nt459erudaug8d2vsqjmhv7zc9c9vmamj3esn9',
    gasPrices: { uusd: 0.15 },
    allowedPairContracts: [
      'terra1vmsnmx6q3amlhrkzy8yelefxdv572rw5m4qeec' // TESTA
    ]
  }
  }
}
