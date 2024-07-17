const express = require('express');
const router = express.Router();
const Client = require('../models/Client'); 

// Create Client
router.post('/', async (req, res, next) => {
    try {
        const { name, email, country, projects } = req.body;

        const newClient = new Client({
            name,
            email,
            country,
            projects,
        });

        const savedClient = await newClient.save();
        res.status(201).json(savedClient);

    } catch (err) {
        // console.error(error.message);
        // res.status(400).json({ error: error.message });

        next(err);
    }
});

// Show All Clients
router.get("/", async (req, res) => {
    try {
        const clients = await Client.find().populate('projects'); // Populate projects if needed

        res.status(200).json({ clients });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;



