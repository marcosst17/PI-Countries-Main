const { Router } = require('express');
const router = Router();
const {Activity, Country} = require("../db")

router.get("/", (req, res) => {
    return Activity.findAll()
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


module.exports = router;