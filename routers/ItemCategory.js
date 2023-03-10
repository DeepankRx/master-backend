const ItemCategoryController = require('../controllers/ItemCategory');
const express = require('express');
const router = express.Router();

router
  .route('/item-category/')
  .get(ItemCategoryController.getAllItemCategory)
  .post(ItemCategoryController.createItemCategory);

router
  .route('/item-category/:id')
  .get(ItemCategoryController.getItemCategory)
  .put(ItemCategoryController.updateItemCategory)
  .delete(ItemCategoryController.deleteItemCategory);

module.exports = router;
