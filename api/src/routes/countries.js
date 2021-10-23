const { Router } = require('express');
// const detailsRoute = require("./details")
// const activitiesRoute = require("./activities")
const {Country} = require("../db")
const router = Router();


router.get("/", (req, res) => {
    return Country.findAll()
    .then(countries => {
        res.send(countries)
    })
})

router.post("/", (req, res) => {
    res.send("soy post countries")
})

router.put("/", (req, res) => {
    res.send("soy put countries")
})

router.delete("/", (req, res) => {
    res.send("soy delete countries")
})

module.exports = router;