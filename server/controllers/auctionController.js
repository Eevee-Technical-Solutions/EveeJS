const db = require('../models/auctionModel');

const auctionController = {};

auctionController.getItem = async (req, res, next) => {
  const searchQuery =
    'SELECT * FROM "item" WHERE "isComplete" = false ORDER BY "itemId" LIMIT 1';

  try {
    const results = await db.query(searchQuery);

    const item = results.rows;

    res.locals.item = item;

    return next();
  } catch (e) {
    return next({ error: `error from getItem, ${e}` });
  }
};

auctionController.bidItem = async (req, res, next) => {
  const { bid, user, itemName } = req.body;

  const searchQuery = `SELECT * FROM "bids" a
    INNER JOIN "user" b ON a."userId" = b."userId"
    INNER JOIN "item" c ON a."itemId" = c."itemId"
    WHERE c."name" = $1 AND b."userName" = $2`;

  try {
    const results = await db.query(searchQuery, [itemName, user]);

    const itemId = results.rows[0].itemId;
    const userId = results.rows[0].userId;

    const bidQuery =
      'UPDATE bids SET bidPrice = $1 WHERE itemId = $2 AND userId =$3';

    await db.query(bidQuery, [bid, itemId, userId]);

    return next();
  } catch (e) {
    return next({ Err: `Error in quering for updating bid, ${e}` });
  }
};

auctionController.getWinner = async (req, res, next) => {
  const { itemName } = req.body;

  const searchQuery = `SELECT * FROM "item" a
INNER JOIN "bids" b ON a."itemId" = b."itemId"
INNER JOIN "user" c ON b."userId" = c."userId"
WHERE a."name" = 'dog'
ORDER BY b."bidPrice" DESC LIMIT 1`;

  try {
    const results = await db.query(searchQuery, [itemName]);

    res.locals.winner = results.rows;
  } catch (e) {
    return next({ Err: `Error in quering for getting Winner, ${e}` });
  }
};

module.exports = auctionController;
