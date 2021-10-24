const axios = require('axios');
const { Router } = require('express');
const router = Router();

router.get("/", async (req, res) => {
    // try {
    //     let response = await axios.get("http://restcountries.com/v3.1/all")
    //     let api = response.data
    //     res.send(api)
    // } catch(err) {
    //     console.error(err)
    // }
})

router.post("/", (req, res) => {
    res.send("soy post home")
})

router.put("/", (req, res) => {
    res.send("soy put home")
})

router.delete("/", (req, res) => {
    res.send("soy delete home")
})

module.exports = router;