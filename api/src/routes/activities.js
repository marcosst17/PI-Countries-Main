const { Router } = require('express');
const router = Router();
const {Activity, Country} = require("../db")

router.get("/", (req, res) => {
    return Activity.findAll({
        include: Country
    })
    .then(activities => {
        res.send(activities)
    })
})

router.post("/", async (req, res, next) => {
    const {name, difficulty, duration, season, countryId} = req.body
    try {
        let activity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        })
        if(countryId){
            await activity.addCountry(countryId)
        }
        return res.send(activity)
    } catch(err) {
        next(err)
    }
})

router.put("/", (req, res) => {
    res.send("soy put activities")
})

router.delete("/", (req, res) => {
    res.send("soy delete activities")
})

module.exports = router;