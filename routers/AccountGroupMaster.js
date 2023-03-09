const AccountGroupMasterController = require('../controllers/AccountGroupMaster');
const express = require('express');
const router = express.Router();

router
  .route('/accountgroup/')
  .get(AccountGroupMasterController.getAllAccountGroupMaster)
  .post(AccountGroupMasterController.createAccountGroupMaster);

router
  .route('/accountgroup/:id')
  .get(AccountGroupMasterController.getAccountGroupMaster)
  .put(AccountGroupMasterController.updateAccountGroupMaster)
  .delete(AccountGroupMasterController.deleteAccountGroupMaster);

module.exports = router;
