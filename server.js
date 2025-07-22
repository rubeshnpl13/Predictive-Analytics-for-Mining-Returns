const express = require('express');
const axios = require('axios');
const { utils } = require('ethers');
require('dotenv').config();
//console.log('API KEY', apiKey);

const app = express();
const apiKey = process.env.API_KEY;

class Block {
  constructor(timeStamp, blockReward) {
    this.timeStamp = timeStamp;
    this.blockReward = blockReward;
  }
}

const fetchData = async () => {
  try {
    const lstOfBlocks = [];
    for (let blockNumber = 1746572; blockNumber < 1746573; blockNumber++) {
      const apiUrl = `https://api.etherscan.io/v2/api?chainid=1&module=block&action=getblockreward&blockno=${blockNumber}&apikey=${apiKey}`;

      const response = await axios.get(apiUrl);
      const rewardEther = utils.formatEther(response.data.result.blockReward);
      const timeStamp = response.data.result.timeStamp;
      const block = new Block(timeStamp, rewardEther);
      console.log(block);
      // listofBlocks.push(block);
      //   console.log(response.data.result.blockReward);
      //   console.log(response.data.result.timeStamp);
    }
  } catch (error) {
    console.log(error);
  }
};
//console.log('API KEY', apiKey);
fetchData();
app.listen(3000, () => {
  console.log('Server is running');
});
