const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountGroupMasterSchema = new Schema(
  {
    accountName: {
      type: String,
      required: [true, 'Please add an account name'],
      unique: true,
    },
    underAccount: {
      type: String,
      required: [true, 'Please add an under account'],
    },
    mainOrSubAccount: {
      type: String,
      required: [true, 'Please add a main or sub account'],
    },
    subAccount: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AccountGroupMaster = mongoose.model(
  'AccountGroupMaster',
  AccountGroupMasterSchema
);
module.exports = AccountGroupMaster;
