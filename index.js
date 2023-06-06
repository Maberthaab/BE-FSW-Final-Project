const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const { verifyToken } = require('./middleware/VerifyToken');
const { Register, Login, getUsers, Logout } = require('./controller/UserController');
const prefix = '/v1/api/';

// User API
app.get(prefix + 'users', verifyToken, getUsers);
app.get(prefix + 'register', Register);
app.post(prefix + 'login', Login);
app.delete(prefix + 'logout', Logout);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
