const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemMasterSchema = new Schema(
  {
    itemName: {
      type: String,
    },
    itemGroupName: {
      type: String,
    },
    remarkNote: {
      type: String,
    },
    itemType: {
      type: String,
    },
    packingCost: {
      type: Number,
    },
    gstTaxSlab: {
      type: Number,
    },
    discountType: {
      type: String,
    },
    HSNCode: {
      type: String,
    },
    saleRateOld: {
      type: Number,
    },
    packingType: {
      type: String,
    },
    qtyInDelhi: {
      type: Number,
    },
    qtyOutOfDelhi: {
      type: Number,
    },
    purchaseRate: {
      type: Number,
    },
    saleRate: {
      type: Number,
    },
    minQty: {
      type: Number,
    },
    maxQty: {
      type: Number,
    },
    totalOpening: {
      type: Number,
    },
    nag: {
      unit: {
        type: Number,
      },
      qty: {
        type: Number,
      },
    },
    bag: {
      unit: {
        type: Number,
      },
      qty: {
        type: Number,
      },
    },
    loose: {
      unit: {
        type: Number,
        default: 1,
      },
      qty: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

const ItemCategory = mongoose.model('ItemCategory', ItemMasterSchema);
module.exports = ItemCategory;
