const PartyTrnController = require('../controllers/PartyTrn');
const express = require('express');
const router = express.Router();

router
  .route('partytrn/')
  .get(PartyTrnController.getAllPartyTrn)
  .post(PartyTrnController.createPartyTrn);

router
  .route('partytrn/:id')
  .get(PartyTrnController.getPartyTrn)
  .put(PartyTrnController.updatePartyTrn)
  .delete(PartyTrnController.deletePartyTrn);

module.exports = router;
