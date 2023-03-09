const ItemTrnController = require('../controllers/ItemTrn');
const express = require('express');
const router = express.Router();

router
  .route('/itemtrn/')
  .get(ItemTrnController.getAllItemTrn)
  .post(ItemTrnController.createItemTrn);

router
  .route('/itemtrn/:id')
  .get(ItemTrnController.getItemTrn)
  .put(ItemTrnController.updateItemTrn)
  .delete(ItemTrnController.deleteItemTrn);

module.exports = router;
