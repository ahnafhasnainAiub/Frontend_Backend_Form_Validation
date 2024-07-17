const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); 

// Create Project
router.post('/', async (req, res, next) => {
    try {
        const { name, technology, estimatedHour, deadline, client } = req.body;

        const newProject = new Project({
            name,
            technology,
            estimatedHour,
            deadline,
            client,
        });

        const savedProject = await newProject.save();
        res.status(201).json(savedProject);

    } catch (err) {
        // console.error(error.message);
        // res.status(400).json({ error: error.message });

        next(err);

    }
});

// Show All Projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find().populate('client'); 

        res.status(200).json({ projects });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;
