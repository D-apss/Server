const { User, Item, Bid, sequelize } = require("../models/index");

module.exports = class ItemController {
  static async createItem(req, res, next) {
    const { name, description, imageUrl, price } = req.body;
    try {
      const existingItem = await Item.findOne({
        where: { name, description, imageUrl, price },
      });

      if (existingItem) {
        throw { name: "itemDuplicate" };
      }

      const newItem = await Item.create({
        name,
        description,
        imageUrl,
        price,
      });

      res.status(201).json({
        id: newItem.id,
        name: newItem.name,
        description: newItem.description,
        imageUrl: newItem.imageUrl,
        price: newItem.price,
      });
    } catch (error) {
      next(error);
    }
  }
};