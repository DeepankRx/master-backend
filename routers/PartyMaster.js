const PartyMasterController = require('../controllers/PartyMaster');
const express = require('express');
const router = express.Router();

router
  .route('/partymaster/')
  .get(PartyMasterController.getAllPartyMaster)
  .post(PartyMasterController.createPartyMaster);

router
  .route('/partymaster/:id')
  .get(PartyMasterController.getPartyMaster)
  .put(PartyMasterController.updatePartyMaster)
  .delete(PartyMasterController.deletePartyMaster);

module.exports = router;
