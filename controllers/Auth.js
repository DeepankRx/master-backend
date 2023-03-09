const User = require('../models/auth');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'No user found with that ID',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const signup = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    const user = await User.create({ username, password, email, role });
    return res.status(201).json({
      status: 'success',
      data: {
        ...user._doc,
        password: undefined,
        loggedIn: true,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        status: 'fail',
        message: 'User not found',
      });
    }

    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid credentials',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        ...user._doc,
        password: undefined,
        loggedIn: true,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUser,
  signup,
  login,
};
