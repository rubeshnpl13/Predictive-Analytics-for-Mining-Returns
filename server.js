const express = require('express');
const axios = require('axios');

const app = express();

class Block {
  constructor(timeStamp, blockReward) {
    this.timeStamp = timeStamp;
    this.blockReward = blockReward;
  }
}

app.listen(3000, () => {
  console.log('Server is running');
});
