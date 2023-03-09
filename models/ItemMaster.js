const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemMasterSchema = new Schema(
  {
    item_code: {
      type: Number,
    },
    item_name: {
      type: String,
    },
    group_code: {
      type: Number,
    },
    group_name: {
      type: String,
    },
    pur_rate: {
      type: Number,
    },
    sal_rate: {
      type: Number,
    },
    op_stock: {
      type: Number,
    },
    remark_note: {
      type: String,
    },
    enter_date_time: {
      type: Date,
    },
    lower_unit: {
      type: String,
    },
    upper_unit: {
      type: String,
    },
    others: [String],
    con_qty_1: {
      type: Number,
    },
    min_qty: {
      type: Number,
    },
    max_qty: {
      type: Number,
    },
    con_qty_2: {
      type: Number,
    },
    other_num5: {
      type: Number,
    },
    nag_qty: {
      type: Number,
    },
    bag_qty: {
      type: Number,
    },
    loose_qty: {
      type: Number,
    },
    nag_conv: {
      type: Number,
    },
    bag_conv: {
      type: Number,
    },
    nag_packing: {
      type: Number,
    },
    bag_packing: {
      type: Number,
    },
    loose_packing: {
      type: Number,
    },
    item_type: {
      type: String,
    },
    packing_cost: {
      type: Number,
    },
    hsn_code: {
      type: Number,
    },
    gst_tax_rate: {
      type: Number,
    },
    dis_slab_type: {
      type: String,
    },
    sal_rate_old: {
      type: Number,
    },
    order_packing_type: {
      type: String,
    },
    order_qty_in_delhi: {
      type: Number,
    },
    order_qty_out_of_delhi: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const ItemMaster = mongoose.model('ItemMaster', ItemMasterSchema);
module.exports = ItemMaster;
