const ItemGroupMasterController = require('../controllers/ItemGroupMaster');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(ItemGroupMasterController.getAllItemGroupMaster)
  .post(ItemGroupMasterController.createItemGroupMaster);

router
  .route('/:id')
  .get(ItemGroupMasterController.getItemGroupMaster)
  .put(ItemGroupMasterController.updateItemGroupMaster)
  .delete(ItemGroupMasterController.deleteItemGroupMaster);

module.exports = router;
