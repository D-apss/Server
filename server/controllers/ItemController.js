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

   static async getAllItem(req, res, next) {
      try {
         const items = await Item.findAll();

         res.status(200).json(items);
      } catch (error) {
         next(error);
      }
   }

   static async deleteById(req, res, next) {
      try {
      } catch (error) {
         next(error);
      }
   }

   static async updateById(req, res, next) {
      try {
         const item = await Item.findByPk(req.params.id);
         if (!item) {
            throw { name: "NotFound" };
         }
         await item.update(req.body);
         res.status(200).json(item);
      } catch (error) {
         next(error);
      }
   }

   static async getItemById(req, res, next) {
    try {
      const item = await Item.findByPk(req.params.id)
      if(!item){
        throw {name: "NotFound"}
      }
      res.status(200).json(item)
    } catch (error) {
       next(error);
    }
 }
};
