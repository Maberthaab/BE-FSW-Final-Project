const { users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getUsers = async (req, res) => {
  try {
    const Users = await users.findAll({
      attributes: ['id', 'username', 'email', 'nama_lengkap', 'alamat', 'nomor_telepon'],
    });
    res.status(200).json({
      success: true,
      message: 'List All Users',
      data: Users,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Register = async (req, res) => {
  // console.log(req.body)
  const { username, password, nama_lengkap, alamat, email, nomor_telepon } = req.body;

  const emailExisted = await users.findOne({
    where: {
      email: email,
    },
  });

  if (emailExisted) {
    return res.status(409).json({
      status: false,
      msg: 'Email already exists',
    });
  }
  const salt = 10;
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    let user = await users.create({
      username: username,
      password: hashPassword,
      nama_lengkap: nama_lengkap,
      alamat: alamat,
      email: email,
      nomor_telepon: nomor_telepon,
    });

    user = JSON.parse(JSON.stringify(user));

    return res.status(200).json({
      success: true,
      message: 'Register Successfully',
    });
  } catch (error) {
    console.log(error);
  }
};

exports.Login = async (req, res) => {
  try {
    let user = await users.findOne({
      where: {
        email: req.body.email,
      },
    });

    user = JSON.parse(JSON.stringify(user));

    if (!user) return res.status(400).json({ success: false, message: "Email or Password didn't match" });
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(400).json({ success: false, message: 'Wrong Password' });

    //token generation
    let refreshTokens = [];

    const userId = user.id;
    const email = user.email;
    const nama_lengkap = user.nama_lengkap;

    const tokenParams = { userId, email, nama_lengkap };

    const accessToken = jwt.sign(tokenParams, 'access', {
      expiresIn: '1d',
    });
    const refreshToken = jwt.sign(tokenParams, 'refresh', {
      expiresIn: '1d',
    });
    refreshTokens.push(refreshToken);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    const data = {
      userId,
      email,
      nama_lengkap,
      accessToken,
      refreshToken,
    };

    return res.status(201).json({
      success: true,
      message: 'Login Successfully',
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false, message: 'Login Failed' });
  }
};

exports.Logout = (req, res) => {
  try {
    res.clearCookie('accessToken');

    res.clearCookie('refreshToken');

    return res.status(200).json({
      success: true,
      message: 'Logout Successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Logout Failed' });
  }
};
