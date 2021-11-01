const { Router } = require('express');
const { Op, Sequelize } = require('sequelize');
// const detailsRoute = require("./details")
// const activitiesRoute = require("./activities")
const {Country, Activity} = require("../db");
const router = Router();

router.get("/", (req, res) => {
    if(req.query.name){
        return Country.findAll({
            order: [['name', 'ASC']],
            attributes: ["flag", "name", "continent", "id"],
            where: {
                name: {
                    [Op.iLike]: `${req.query.name}%`
                }
            }
        })
        .then(countries => {
            if(countries.length === 0) {
                // return res.send(`No countries found with name similar to ${req.query.name}`)
                return res.send([])
            }
            res.send(countries)
        })
    } else {
        return Country.findAll({
            // order: [Sequelize.fn('RANDOM')],
            order: [['name', 'ASC']],
            attributes: ["flag", "name", "continent", "id"],
            // limit: 10,
        })
        .then(countries => {
            res.send(countries)
        })
    }
})

router.get("/all", (req, res) => {
    return Country.findAll({
        order: [['name', 'ASC']],
        attributes: ["flag", "name", "continent", "id"],
    })
    .then(countries => {
        res.send(countries)
    })
})

router.get("/:id", (req, res) => {
    const {id} = req.params
    return Country.findAll({
        attributes: ["flag", "name", "continent", "id"],
        where: {
            id: id.toUpperCase()
        }
    })
    .then(countries => {
        res.send(countries)
    })
})

router.get("/:id/details", (req, res) => {
    const {id} = req.params
    return Country.findAll({
        include: Activity,
        // attributes: ["flag", "name", "continent", "capital", "id", "subregion", "area", "population"],
        where: {
            id: id.toUpperCase()
        }
    })
    .then(countries => {
        res.send(countries)
    })
})

router.get("/continent/:name", (req, res) => {
    const {subregion} = req.query
    if(subregion){
        return Country.findAll({
            order: [['name', 'ASC']],
            attributes: ["flag", "name", "continent", "id"],
            where: {
                continent: req.params.name,
                subregion: subregion
            }
        })
        .then(countries => {
            res.send(countries)
        })
    } else {
        return Country.findAll({
            order: [['name', 'ASC']],
            attributes: ["flag", "name", "continent", "id"],
            where: {
                continent: req.params.name,
            }
        })
        .then(countries => {
            res.send(countries)
        })
    }
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