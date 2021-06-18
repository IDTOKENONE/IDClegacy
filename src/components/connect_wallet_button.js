import { useState } from 'react';
import { Extension } from '@terra-money/terra.js';

function ConnectWalletButton({ onConnect }) {
  const [connecting, setConnecting] = useState(false);

  function connect() {
    const extension = new Extension();

    if(extension.isAvailable) {
      setConnecting(true);

      extension.once('onConnect', (wallet) => {
        setConnecting(false);

        onConnect(wallet);
      });

      extension.connect();

      // TODO: Time out at some point
    } else {
      window.open('https://terra.money/extension');
    }
  }

  return(
    <button className="bg-yellow text-black py-2 px-6 rounded-lg" onClick={connect} disabled={connecting}>
      {
        // TODO: Improve connecting indicator (e.g. spinner)
        connecting ? 'Connecting...' : 'Connect Wallet'
      }
    </button>
  );
}

export default ConnectWalletButton;