const express = require('express');
const Repository = require('../models/repositoryModel')
const router = express.Router();

// Get all repositories
router.get('/', (req, res) => {
    res.json({mssg: 'GET all repositories'});
});

// GET a single repository
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single repository'})
});

// POST a new repository
router.post('/', async (req, res) => {
    const {title, synopsis, genre, form} = req.body;

    try {
        const repository = await Repository.create({title, synopsis, genre, form});
        res.status(200).json(repository);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

// DELETE a single repository
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single repository'})
});

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a single repository'})
});

module.exports = router;