const express = require('express');

const router = express.Router();

const usersRoutes =  require('./usersRoutes');
const commentariesRoutes = require('./commentariesRoutes');

module.exports = () => {
    usersRoutes(router);
    commentariesRoutes(router);
    return router;
}