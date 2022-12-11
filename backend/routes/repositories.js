const express = require('express');

const {
    createRepository,
    getRepositories,
    getRepository,
    updateRepository,
    deleteRepository
} = require('../controllers/repositoryController');

const Repository = require('../models/repositoryModel');
const router = express.Router();

// Get all repositories
router.get('/', getRepositories);

// GET a single repository
router.get('/:id', getRepository);

// POST a new repository
router.post('/', createRepository);


// DELETE a single repository
router.delete('/:id', deleteRepository);

// UPDATE a workout
router.patch('/:id', updateRepository);

module.exports = router;
