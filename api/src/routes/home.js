const { Router } = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.send("soy get home")
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