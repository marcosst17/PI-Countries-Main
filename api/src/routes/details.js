const { Router } = require('express');
const router = Router();

router.get("/", (req, res) => {
    res.send("soy get details")
})

router.post("/", (req, res) => {
    res.send("soy post details")
})

router.put("/", (req, res) => {
    res.send("soy put details")
})

router.delete("/", (req, res) => {
    res.send("soy delete details")
})

module.exports = router;