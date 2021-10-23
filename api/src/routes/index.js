const { Router } = require('express');
const homeRoute = require("./home")
const countriesRoute = require("./countries")
// const detailsRoute = require("./details")
// const activitiesRoute = require("./activities")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", homeRoute);
router.use("/countries", countriesRoute);

module.exports = router;
