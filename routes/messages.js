
const express = require("express");

const auth = require("../middleware/auth");
const { admin, editor, viewer } = require("../middleware/roles");

let messages = [{ id: 1, name: "Lorem ipsum dolor", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium nec ipsum nec elementum." }];

const router = express.Router();


router.get("/", [auth, viewer], (req, res) => {
    res.send({
        ok: true,
        result: messages
    });
});

router.post("/", [auth, editor], async (req, res) => {
    
    messages.push({ id: messages.length + 1, name: req.body.name, content: req.body.content });

    res.status(200).send({
        ok: true,
        result: messages
    });
});

router.put("/", [auth, editor], async (req, res) => {

    res.status(200).send({
        ok: true,
        result: messages
    });
});

router.delete("/", [auth, admin], async (req, res) => {
    
    messages = messages.filter((message) => { message.id !== req.body.id });

    res.status(200).send({
        ok: true,
        result: messages
    });
});


module.exports = router;