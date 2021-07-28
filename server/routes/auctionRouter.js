const express = require('express');
const router = express.Router();
const auctionController = require('../controllers/auctionController');

router.get('/homepage', auctionController.getItem, (req, res, next) => {
  return res.status(200).json(res.locals.item);
});

router.post('/bid', auctionController.bidItem, (req, res, next) => {
  return res.status(200).json('bidPrice has been updated');
});

router.get(
  '/winner',
  auctionController.getWinner,
  auctionController.getItem,
  (req, res, next) => {
    return res.status(200).json([res.locals.winner, res.locals.item]);
  }
);

module.exports = router;
