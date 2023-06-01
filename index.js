const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('/workspaces/intern-work/index.html');
});

app.get('/api/tickers', async (req, res) => {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
});

app.listen(8000, () => {
  console.log('Proxy server is running on port 8000');
});
