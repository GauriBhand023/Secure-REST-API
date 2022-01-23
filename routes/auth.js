
const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/", async (req, res) => {
    const users = [{ email: "vincent@vincentlab.net", password: "$2b$15$zqY2Q4eOoGzFpZkHJz9HS.BSfXc/HM2E/yTWa1awFmTMgN2bE72Uu", roles: ["admin", "editor", "viewer"] }];

    
    let user = users.find(u => u.email === req.body.email);
    if (!user) throw new Error("Invalid email or password.");

    const valid = await bcrypt.compare(req.body.password, user.password)
    if (!valid) throw new Error("Invalid email or password.");

    const token = jwt.sign({
        id: user._id,
        roles: user.roles,
    }, "jwtPrivateKey", { expiresIn: "15m" });

    res.send({
        ok: true,
        token: token
    });
});

module.exports = router;