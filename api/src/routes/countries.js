const { Router } = require('express');
const { Op, Sequelize } = require('sequelize');
// const detailsRoute = require("./details")
// const activitiesRoute = require("./activities")
const {Country, Activity} = require("../db");
const router = Router();

/* router.get("/", (req, res) => {
    if(req.query.name){
        return Country.findAll({
            order: [['name', 'ASC']],
            attributes: ["flag", "name", "continent", "id"],
            include: {model: Activity, attributes: ["name"], through: {attributes: []}},
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
            include: {model: Activity, attributes: ["name"], through: {attributes: []}}
            // limit: 10,
        })
        .then(countries => {
            res.send(countries)
        })
    }
}) */

router.get("/borders", (req, res) => {
    let borders = req.query.borders;
    if(borders.length > 0 && borders.split("_").length > 1){
        borders = borders.split("_")
    }
    console.log(borders)
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
    // const {search, continent, order, param} = req.query
    const search = req.query.search || ""
    const continent = req.query.continent || {[Op.iLike]: "%"}
    // const param = req.query.param || "name"
    // const order = req.query.order || "ASC"
    let activities = req.query.activities || "%"
    if(activities.length > 0 && activities.split("_").length > 1){
        activities = activities.split("_")
    }
    console.log(activities)
    if(activities !== "%"){
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
        console.log("entre al else")
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

router.get("/:id", (req, res) => {
    const {id} = req.params
    return Country.findAll({
        attributes: ["flag", "name", "continent", "id"],
        include: {model: Activity, attributes: ["name"], through: {attributes: []}},
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
        include: {model: Activity, through: {attributes: []}},
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
            attributes: ["flag", "name", "continent", "id", "population"],
            include: {model: Activity, attributes: ["name"], through: {attributes: []}},
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
            attributes: ["flag", "name", "continent", "id", "population"],
            include: {model: Activity, attributes: ["name"], through: {attributes: []}},
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

/*
if(search){
        if(continent === "All" || !continent){
            if(order && param){
                return Country.findAll({
                    where: {
                        name: {
                            [Op.iLike]: `${search}%`
                        }
                    },
                    order: [[param, order]],
                    attributes: ["flag", "name", "continent", "id", "population"],
                    include: {model: Activity, attributes: ["name"], through: {attributes: []}}
                })
                .then(countries => {
                    return res.send(countries)
                })
            } else {
                return Country.findAll({
                    where: {
                        name: {
                            [Op.iLike]: `${search}%`
                        }
                    },
                    order: [["name", "ASC"]],
                    attributes: ["flag", "name", "continent", "id", "population"],
                    include: {model: Activity, attributes: ["name"], through: {attributes: []}}
                })
                .then(countries => {
                    return res.send(countries)
                })
            }
        }
        if(continent){
            if(order && param){
                return Country.findAll({
                    where: {
                        continent: continent,
                        name: {
                            [Op.iLike]: `${search}%`
                        }
                        
                    },
                    order: [[param, order]],
                    attributes: ["flag", "name", "continent", "id", "population"],
                    include: {model: Activity, attributes: ["name"], through: {attributes: []}}
                })
                .then(countries => {
                   return res.send(countries)
                })
            } else {
                return Country.findAll({
                    where: {
                        continent: continent,
                        name: {
                            [Op.iLike]: `${search}%`
                        }
                    },
                    order: [["name", "ASC"]],
                    attributes: ["flag", "name", "continent", "id", "population"],
                    include: {model: Activity, attributes: ["name"], through: {attributes: []}}
                })
                .then(countries => {
                    return res.send(countries)
                })
            }
        }
    } else {
        if(continent === "All"){
            if(order && param){
                return Country.findAll({
                    order: [[param, order]],
                    attributes: ["flag", "name", "continent", "id", "population"],
                    include: {model: Activity, attributes: ["name"], through: {attributes: []}}
                })
                .then(countries => {
                    return res.send(countries)
                })
            } else {
                return Country.findAll({
                    order: [["name", "ASC"]],
                    attributes: ["flag", "name", "continent", "id", "population"],
                    include: {model: Activity, attributes: ["name"], through: {attributes: []}}
                })
                .then(countries => {
                    return res.send(countries)
                })
            }
        }
        if(continent){
            if(order && param){
                return Country.findAll({
                    where: {
                        continent: continent
                    },
                    order: [[param, order]],
                    attributes: ["flag", "name", "continent", "id", "population"],
                    include: {model: Activity, attributes: ["name"], through: {attributes: []}}
                })
                .then(countries => {
                   return res.send(countries)
                })
            } else {
                return Country.findAll({
                    where: {
                        continent: continent
                    },
                    order: [["name", "ASC"]],
                    attributes: ["flag", "name", "continent", "id", "population"],
                    include: {model: Activity, attributes: ["name"], through: {attributes: []}}
                })
                .then(countries => {
                    return res.send(countries)
                })
            }
        }
    }
    return Country.findAll({
        order: [["name", "ASC"]],
        attributes: ["flag", "name", "continent", "id", "population"],
        include: {model: Activity, attributes: ["name"], through: {attributes: []}}
    })
    .then(countries => {
        return res.send(countries)
    })
*/

module.exports = router;