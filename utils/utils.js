const PartyMaster = require('../models/PartyMaster');
const generateUniqueId = async () => {
  let randomNumber = Math.floor(Math.random() * 10000000);
  while (await PartyMaster.findOne({ pcode_id: randomNumber })) {
    randomNumber = Math.floor(Math.random() * 10000000);
    while (randomNumber.toString().length < 4) {
      randomNumber = '0' + randomNumber;
    }
  }
  return randomNumber;
};

module.exports = {
  generateUniqueId,
};
