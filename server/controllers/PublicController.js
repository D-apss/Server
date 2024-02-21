const { User, Item, Bid, sequelize } = require("../models/index");

module.exports = class PublicController {
  static async getAllItems(req, res, next) {
    try {
      const items = await Item.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });

      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async bidItem(req, res, next) {
    try {
      const { amount } = req.body;
      const { id: ItemId } = req.params;
      const UserId = req.user.id;

      const bid = await Bid.create({
        UserId,
        ItemId,
        amount,
      });

      res.status(201).json({ message: "Bid has been placed", bid });
    } catch (error) {
      next(error);
    }
  }

  static async getAllBidByUserId(req, res, next) {
    const UserId = req.params.id;
    try {
      const bids = await Bid.findAll({
        where: { UserId },
        include: {
          model: Item,
        },
      });

      if (bids.length === 0) {
        throw { name: "bidNotAvailable" };
      }

      res.status(200).json(bids);
    } catch (error) {
      next(error);
    }
  }

  static async getHighestBid(req, res, next) {
    try {
      const highestBid = await Bid.findAll({ include: User });

      if (!highestBid) {
        throw { name: "highestBidNotAvailable" };
      }

      highestBid.sort((a, b) => b.amount - a.amount);

      res.status(200).json(highestBid);
    } catch (error) {
      next(error);
    }
  }
};
