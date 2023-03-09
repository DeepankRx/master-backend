const ItemGroupMaster = require('../models/ItemGroupMaster');

exports.getAllItemGroupMaster = async (req, res) => {
  try {
    const itemGroupMaster = await ItemGroupMaster.find();
    return res.status(200).json({
      status: 'success',
      results: itemGroupMaster.length,
      data: {
        itemGroupMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.getItemGroupMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const itemGroupMaster = await ItemGroupMaster.findById(id);
    if (!itemGroupMaster) {
      return res.status(404).json({
        status: 'fail',
        message: 'No itemGroupMaster found with that ID',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        itemGroupMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.createItemGroupMaster = async (req, res) => {
  try {
    const {
      cat_code,

      cat_name,
      cat_type,
      cat_main_code,
      cat_main,
      supermain_code,
      delete_option,
      other,
      other_num,
      gst_tax_slab,
    } = req.body;

    const newItemGroupMaster = await ItemGroupMaster.create({
      cat_code,
      cat_name,
      cat_type,
      cat_main_code,
      cat_main,
      supermain_code,
      delete_option,
      other,
      other_num,
      gst_tax_slab,
    });

    return res.status(201).json({
      status: 'success',
      data: {
        itemGroupMaster: newItemGroupMaster,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.updateItemGroupMaster = async (req, res) => {
    try{
    const {
        cat_code,
        cat_name,
        cat_type,
        cat_main_code,
        cat_main,
        supermain_code,
        delete_option,
        other,
        other_num,
        gst_tax_slab,
    }   = req.body;
    const { id } = req.params;
    const ItemGroupMaster = await ItemGroupMaster.findByIdAndUpdate(id, {
        cat_code,
        cat_name,
        cat_type,
        cat_main_code,
        cat_main,
        supermain_code,
        delete_option,
        other,
        other_num,
        gst_tax_slab,
    }, {
        new: true,
        runValidators: true,
    });
    if (!ItemGroupMaster) {
            return res.status(404).json({
                status: 'fail',
                message: 'No ItemGroupMaster found with that ID',
            });
        }
        return res.status(200).json({
            status: 'success',
            data: {
                ItemGroupMaster,
            },
        });
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.deleteItemGroupMaster = async (req, res) => {
    try{
        const { id } = req.params;
        const ItemGroupMaster = await ItemGroupMaster.findByIdAndDelete(id);
        if (!ItemGroupMaster) {
            return res.status(404).json({
                status: 'fail',
                message: 'No ItemGroupMaster found with that ID',
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
