const Repository = require('../models/repositoryModel');
const mongoose = require('mongoose');

// get all repositories
const getRepositories = async (req, res) => {
    const repositories = await Repository.find({}).sort({createdAt: -1});

    res.status(200).json(repositories);
};

// get a single repository
const getRepository = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such repository'});
    }

    const repository = await Repository.findById(id);

    if (!repository) {
        return res.status(404).json({error: 'No such repository'});
    } 

    res.status(200).json(repository);
};

// create a new repository
const createRepository = async (req, res) => {
    const {fName, lName, title, synopsis, genre, form} = req.body;

    // add doc to db
    try {
        const repository = await Repository.create({fName, lName, title, synopsis, genre, form});
        res.status(200).json(repository);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

// delete a repository
const deleteRepository = async(req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such repository'})
    }

    const repository = await Repository.findOneAndDelete({_id: id})

     if (!repository) {
        return res.status(404).json({error: 'NO such repository'});
     }

     res.status(200).json({repository});
}

// update a repository
const updateRepository = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such repository'});
    }

    const repository = await Repository.findOneAndUpdate({_id: id}, {
        ...req.body
    }) 

    if (!repository) {
        return res.status(404).json({error: 'No such repository'})
    }

    res.status(200).json({repository})
}

module.exports = {
    createRepository,
    getRepositories,
    getRepository,
    deleteRepository,
    updateRepository
}