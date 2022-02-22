module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.ignoreWarnings = [
      {
        message:
          /(magic-sdk|@walletconnect\/web3-provider|@web3auth\/web3auth)/,
      },
    ];
    return config;
  },
};
