const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const router = express.Router();

// init API key
const api_key = process.env.API_KEY;

// @route   GET api/summoner
// @desc    Returns info using summoner name
// @access  Public

router.get('/:server/:name', async (req, res) => {
  try {
    const response = await fetch(
      `https://${req.params.server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${req.params.name}?api_key=${api_key}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).send({ msg: 'Server error.' });
    console.error(err);
  }
});

// @route   GET api/summoner/rank
// @desc    Returns summoner ranked data using summonerId
// @access  Public

router.get('/rank/:server/:id', async (req, res) => {
  try {
    const response = await fetch(
      `https://${req.params.server}.api.riotgames.com/lol/league/v4/entries/by-summoner/${req.params.id}?api_key=${api_key}`
    );

    const data = await response.json();
    const filteredData = data.sort((a, b) =>
      b.queueType.localeCompare(a.queueType)
    );

    res.json(filteredData);
  } catch (err) {
    res.status(500).send({ msg: 'Server error.' });
    console.error(err);
  }
});

module.exports = router;
