const { Author } = require("../models/authors.model")

module.exports.createAuthors = (req, res) => {
    const {fullName} = req.body
    Author.create({
        fullName
    })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({}).sort({fullName : 1})
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json(err))
}

module.exports.getOneAuthors = (req, res) => {
    const {id} = req.params
    Author.findOne({_id : id})
        .then(oneAuthors => res.json(oneAuthors))
        .catch(err => res.json(err))
}

module.exports.editAuthors = (req, res) => {
    const {id} = req.params
    Author.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
        .then(editOneAuthors => res.json(editOneAuthors))
        .catch(err => res.json(err))
}

module.exports.deleteAuthors = (req, res) => {
    const {id} = req.params
    Author.findByIdAndDelete({_id : id})
        .then(deleteAuthors => res.json(deleteAuthors))
        .catch(err => res.json(err))
}