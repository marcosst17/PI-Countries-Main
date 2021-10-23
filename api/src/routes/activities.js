const { Router } = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.send("soy get activities")
})

router.post("/", (req, res) => {
    res.send("soy post activities")
})

router.put("/", (req, res) => {
    res.send("soy put activities")
})

router.delete("/", (req, res) => {
    res.send("soy delete activities")
})

module.exports = router;