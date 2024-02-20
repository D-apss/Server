"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Bid extends Model {
    static associate(models) {
      Bid.belongsTo(models.User);
      Bid.belongsTo(models.Item);
    }
  }

  Bid.init(
    {
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Amount is required`
          },
          notEmpty: {
            msg: `Amount is required`
          },
        }
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `UserId is required`
          },
          notEmpty: {
            msg: `UserId is required`
          },
        }
      },
      ItemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `ItemId is required`
          },
          notEmpty: {
            msg: `ItemId is required`
          },
        }
      },
    },
    {
      sequelize,
      modelName: "Bid",
    }
  );
  return Bid;
};
