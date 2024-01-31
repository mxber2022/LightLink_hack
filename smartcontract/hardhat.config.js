require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",

  networks: {
    'pegasus': {
      url: 'https://replicator.pegasus.lightlink.io/rpc/v1',
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: {
      "pegasus": "abcd",
    },

    customChains: [
      {
        network: "pegasus",
        chainId: 1891,
        urls: {
          apiURL: "https://pegasus.lightlink.io/api",
          browserURL: 'https://pegasus.lightlink.io',
        },

      },
    ],

  },
}
