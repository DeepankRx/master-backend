const ItemMasterController = require('../controllers/ItemMaster');
const express = require('express');
const router = express.Router();

router
  .route('/')
  .get(ItemMasterController.getAllItemMaster)
  .post(ItemMasterController.createItemMaster);

router
  .route('/:id')
  .get(ItemMasterController.getItemMaster)
  .put(ItemMasterController.updateItemMaster)
  .delete(ItemMasterController.deleteItemMaster);

module.exports = router;
