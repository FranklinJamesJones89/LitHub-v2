const Repository = require('../models/repositoryModel');

// get all repositories

// get a single repository

// create a new repository
const createRepository = async (req, res) => {
    const {title, synopsis, genre, form} = req.body;

    // add doc to db
    try {
        const repository = await Repository.create({title, synopsis, genre, form});
        res.status(200).json(repository);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

// delete a repository

// update a repository