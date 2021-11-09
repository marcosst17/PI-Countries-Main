const { Router } = require('express');
const { Op, Sequelize } = require('sequelize');
const {Country, Activity} = require("../db");
const router = Router();

router.get("/borders", (req, res) => {
    let borders = req.query.borders;
    if(borders.length > 0 && borders.split("_").length > 1){
        borders = borders.split("_")
    }
    return Country.findAll({
        attributes: ["name", "flag", "id"],
        where: {
            id: {
                [Op.or]: [borders],
            }
        }
    })
    .then(countries => {
        res.send(countries)
    })
})

router.get("/", (req, res) => {
    const search = req.query.search || ""
    const continent = req.query.continent || {[Op.iLike]: "%"}
    let activities = req.query.activities
    if(activities !== "all"){
        return Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `${search}%`
                },
                continent: continent === "All" ? {[Op.iLike]: "%"} : continent,
            },
            // order: [[param, order]],
            attributes: ["flag", "name", "continent", "id", "population"],
            include: {model: Activity, attributes: ["name"], through: {attributes: []}, where: {
                name: {
                    [Op.or]: typeof activities === "string" ? [activities] : [...activities]
                }
            }}
        })
        .then(countries => {
            return res.send(countries)
        })
    } else {
        return Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `${search}%`
                },
                continent: continent === "All" ? {[Op.iLike]: "%"} : continent,
            },
            // order: [[param, order]],
            attributes: ["flag", "name", "continent", "id", "population"],
            include: {model: Activity, attributes: ["name"], through: {attributes: []}}
        })
        .then(countries => {
            return res.send(countries)
        })
    }
})

router.get("/all", (req, res) => {
    return Country.findAll({
        order: [['name', 'ASC']],
        attributes: ["flag", "name", "continent", "id", "population"],
        include: {model: Activity, attributes: ["name"], through: {attributes: []}}
    })
    .then(countries => {
        res.send(countries)
    })
})

router.get("/:id/details", (req, res) => {
    const {id} = req.params
    return Country.findByPk(id, {
        include: {model: Activity, through: {attributes: []}},
    })
    .then(countries => {
        res.send(countries)
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;