const express = require('express');
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
router.post('/', (req, res) => {
    
    res.json({mssg: 'POST a single repository'})
})

// DELETE a single repository
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single repository'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a single repository'})
})

module.exports = router;