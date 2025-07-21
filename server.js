const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const apiKey = process.env.APT_KEY;

class Block {
  constructor(timeStamp, blockReward) {
    this.timeStamp = timeStamp;
    this.blockReward = blockReward;
  }
}

const fetchData = async () => {
  try {
    const lstOfBlocks = [];
    for (let blockNumber = 1746572; blockNumber < 17465723; blockNumber++) {
      const apiUrl = `https://api.etherscan.io/v2/api
                        &module=block
                        &action=getblockreward
                        &blockno=${blockNumber}
                        &apikey=${apiKey}`;
    }
  } catch (erro) {
    console.log(error);
  }
};

app.listen(3000, () => {
  console.log('Server is running');
});
