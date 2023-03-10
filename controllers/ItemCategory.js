const ItemCategory = require('../models/ItemCategory');

exports.getAllItemCategory = async (req, res) => {
  try {
    const itemCategory = await ItemCategory.find();
    return res.status(200).json({
      status: 'success',
      results: itemCategory.length,
      data: {
        itemCategory,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getItemCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const itemCategory = await ItemCategory.findById(id);
    if (!itemCategory) {
      return res.status(404).json({
        status: 'fail',
        message: 'No itemCategory found with that ID',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        itemCategory,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createItemCategory = async (req, res) => {
  try {
    const {
      itemName,
      itemGroupName,
      remarkNote,
      itemType,
      packingCost,
      gstTaxSlab,
      discountType,
      HSNCode,
      saleRateOld,
      packingType,
      qtyInDelhi,
      qtyOutOfDelhi,
      purchaseRate,
      saleRate,
      minQty,
      maxQty,
      totalOpening,
      nag,
      bag,
      loose,
    } = req.body;
    const itemCategory = await ItemCategory.create({
      itemName,
      itemGroupName,
      remarkNote,
      itemType,
      packingCost,
      gstTaxSlab,
      discountType,
      HSNCode,
      saleRateOld,
      packingType,
      qtyInDelhi,
      qtyOutOfDelhi,
      purchaseRate,
      saleRate,
      minQty,
      maxQty,
      totalOpening,
      nag,
      bag,
      loose,
    });
    return res.status(201).json({
      status: 'success',
      data: {
        itemCategory,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateItemCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      itemName,
      itemGroupName,
      remarkNote,
      itemType,
      packingCost,
      gstTaxSlab,
      discountType,
      HSNCode,
      saleRateOld,
      packingType,
      qtyInDelhi,
      qtyOutOfDelhi,
      purchaseRate,
      saleRate,
      minQty,
      maxQty,
      totalOpening,
      nag,
      bag,
      loose,
    } = req.body;

    const itemCategory = await ItemCategory.findByIdAndUpdate(
      id,
      {
        itemName,
        itemGroupName,
        remarkNote,
        itemType,
        packingCost,
        gstTaxSlab,
        discountType,
        HSNCode,
        saleRateOld,
        packingType,
        qtyInDelhi,
        qtyOutOfDelhi,
        purchaseRate,
        saleRate,
        minQty,
        maxQty,
        totalOpening,
        nag,
        bag,
        loose,
      },
      { new: true, runValidators: true }
    );

    if (!itemCategory) {
      return res.status(404).json({
        status: 'fail',
        message: 'No itemCategory found with that ID',
      });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        itemCategory,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteItemCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const itemCategory = await ItemCategory.findByIdAndDelete(id);
    if (!itemCategory) {
      return res.status(404).json({
        status: 'fail',
        message: 'No itemCategory found with that ID',
      });
    }
    return res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
