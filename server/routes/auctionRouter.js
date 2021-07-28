const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');

router.get('/homepage', auctionController.getItem, (req, res, next) => {
  return res.status(200).json(res.locals.item);
});

router.post('/bid', auctionController.bidItem, (req, res, next) => {
  return res.status(200).json(res.locals.updated);
});

router.post('/winner', auctionController.getWinner, (req, res, next) => {
  console.log('before we send it', res.locals.winner);
  return res.status(200).json(res.locals.winner);
});

module.exports = router;
