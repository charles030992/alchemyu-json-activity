import axios from "axios";

const url = `https://worldchain-mainnet.g.alchemy.com/v2/_fKaHkbMAG_uk6to3y0nc`;

const payload = {
  jsonrpc: '2.0',
  id: 1,
  method: 'eth_blockNumber',
  params: []
};

axios.post(url, payload)
  .then(response => {
    console.log('The latest block number is', parseInt(response.data.result, 16));
  })
  .catch(error => {
    console.error(error);
  });

