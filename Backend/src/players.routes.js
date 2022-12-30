const playerRoutes = require('express').Router();
const PlayerControllers = require('./players.controller');

// playerRoutes.get("/", PlayerControllers.getPlayer)

// playerRoutes.post("/", PlayerControllers.createPlayer)

playerRoutes.get("/", PlayerControllers.getOnePlayer)

module.exports = playerRoutes