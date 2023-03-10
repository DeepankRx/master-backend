const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemGroupMasterSchema = new Schema(
  {
    itemGroupName: { type: String },
    gstTaxSlab: { type: String },
    mainOrSubGroup: { type: String },
    subGroup: { type: String },
  },
  {
    timestamps: true,
  }
);

const ItemGroupMaster = mongoose.model(
  'ItemGroupMaster',
  ItemGroupMasterSchema
);
module.exports = ItemGroupMaster;
