const AccountGroupMaster = require('../models/AccountGroupMaster');

exports.getAllAccountGroupMaster = async (req, res) => {
  try {
    const accountGroupMaster = await AccountGroupMaster.find();
    return res.status(200).json({
      status: 'success',
      results: accountGroupMaster.length,
      data: {
        accountGroupMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.getAccountGroupMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const accountGroupMaster = await AccountGroupMaster.findById(id);
    if (!accountGroupMaster) {
      return res.status(404).json({
        status: 'fail',
        message: 'No accountGroupMaster found with that ID',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        accountGroupMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createAccountGroupMaster = async (req, res) => {
  try {
    const { accountName, underAccount, mainOrSubAccount, subAccount } =
      req.body;

    const newAccountGroupMaster = await AccountGroupMaster.create({
      accountName,
      underAccount,
      mainOrSubAccount,
      subAccount,
    });
    return res.status(201).json({
      status: 'success',
      data: {
        accountGroupMaster: newAccountGroupMaster,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateAccountGroupMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const { accountName, underAccount, mainOrSubAccount, subAccount } =
      req.body;
    const accountGroupMaster = await AccountGroupMaster.findByIdAndUpdate(
      id,
      {
        accountName,
        underAccount,
        mainOrSubAccount,
        subAccount,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!accountGroupMaster) {
      return res.status(404).json({
        status: 'fail',
        message: 'No accountGroupMaster found with that ID',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        accountGroupMaster,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteAccountGroupMaster = async (req, res) => {
  try {
    const { id } = req.params;
    const accountGroupMaster = await AccountGroupMaster.findByIdAndDelete(id);
    if (!accountGroupMaster) {
      return res.status(404).json({
        status: 'fail',
        message: 'No accountGroupMaster found with that ID',
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
