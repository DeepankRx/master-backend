const ItemMaster = require('../models/ItemMaster');

exports.getAllItemMaster = async (req, res) => {
  try {
    const itemMaster = await ItemMaster.find();
    return res.status(200).json({
      status: 'success',
      results: itemMaster.length,
      data: {
        itemMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.getItemMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const itemMaster = await ItemMaster.findById(id);
    if (!itemMaster) {
      return res.status(404).json({
        status: 'fail',
        message: 'No itemMaster found with that ID',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        itemMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.createItemMaster = async (req, res) => {
  try {
    const {
      item_code,
      item_name,
      group_code,
      group_name,
      pur_rate,
      sal_rate,
      op_stock,
      remark_note,
      enter_date_time,
      lower_unit,
      upper_unit,
      others,
      con_qty_1,
      min_qty,
      max_qty,
      con_qty_2,
      other_num5,
      nag_qty,
      bag_qty,
      loose_qty,
      nag_conv,
      bag_conv,
      nag_packing,
      loose_packing,
      item_type,
      packing_cost,
      hsn_code,
      gst_tax_slab,
      dis_slab_type,
      sal_rate_old,
      order_packing_type,
      order_qty_in_delhi,
      order_qty_in_out_of_delhi,
    } = req.body;
    const itemMaster = await ItemMaster.create({
      item_code,
      item_name,
      group_code,
      group_name,
      pur_rate,
      sal_rate,
      op_stock,
      remark_note,
      enter_date_time,
      lower_unit,
      upper_unit,
      others,
      con_qty_1,
      min_qty,
      max_qty,
      con_qty_2,
      other_num5,
      nag_qty,
      bag_qty,
      loose_qty,
      nag_conv,
      bag_conv,
      nag_packing,
      loose_packing,
      item_type,
      packing_cost,
      hsn_code,
      gst_tax_slab,
      dis_slab_type,
      sal_rate_old,
      order_packing_type,
      order_qty_in_delhi,
      order_qty_in_out_of_delhi,
    });
    return res.status(201).json({
      status: 'success',
      data: {
        itemMaster,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.updateItemMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      item_code,
      item_name,
      group_code,
      group_name,
      pur_rate,
      sal_rate,
      op_stock,
      remark_note,
      enter_date_time,
      lower_unit,
      upper_unit,
      others,
      con_qty_1,
      min_qty,
      max_qty,
      con_qty_2,
      other_num5,
      nag_qty,
      bag_qty,
      loose_qty,
      nag_conv,
      bag_conv,
      nag_packing,
      loose_packing,
      item_type,
      packing_cost,
      hsn_code,
      gst_tax_slab,
      dis_slab_type,
      sal_rate_old,
      order_packing_type,
      order_qty_in_delhi,
      order_qty_in_out_of_delhi,
    } = req.body;

    const itemMaster = await ItemMaster.findByIdAndUpdate(
      id,
      {
        item_code,
        item_name,
        group_code,
        group_name,
        pur_rate,
        sal_rate,
        op_stock,
        remark_note,
        enter_date_time,
        lower_unit,
        upper_unit,
        others,
        con_qty_1,
        min_qty,
        max_qty,
        con_qty_2,
        other_num5,
        nag_qty,
        bag_qty,
        loose_qty,
        nag_conv,
        bag_conv,
        nag_packing,
        loose_packing,
        item_type,
        packing_cost,
        hsn_code,
        gst_tax_slab,
        dis_slab_type,
        sal_rate_old,
        order_packing_type,
        order_qty_in_delhi,
        order_qty_in_out_of_delhi,
      },
      { new: true, runValidators: true }
    );

    if (!itemMaster) {
      return res.status(404).json({
        status: 'fail',
        message: 'No itemMaster found with that ID',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        itemMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.deleteItemMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const itemMaster = await ItemMaster.findByIdAndDelete(id);
    if (!itemMaster) {
      return res.status(404).json({
        status: 'fail',
        message: 'No itemMaster found with that ID',
      });
    }
    return res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};
