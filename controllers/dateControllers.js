// Connect to the DB
const db = require('../models');

module.exports = {
    // Route for creating new user
    getAllDates: (req, res) => {
        console.log("SERVER ACTION - All Dates:");
        db.Post.findAll({
            order: ["createdAt", "DESC"],
          })
          .then(function (dates) {
            res.json(dates);
          });
    },
    getOneDate: (req, res) => {
        console.log("SERVER ACTION - Loading date::");
        db.Post.findOne({
            where: {
              id: req.params.id
            }
          })
          .then(function (dbPost) {
            res.json(dbPost)
          });
    },
    newDate: (req, res) => {
		console.log("SERVER ACTION - New Date:");
        db.Post.create({
            title: req.body.title,
            category: req.body.category,
            location: req.body.location,
            body: req.body.body,
            UserId: req.user.id
        }).then((dbPost) => {
          console.log("Console New Date Created!" + "This is date # " + dbPost.id)
            // return the result in JSON format
        }).catch((err) => {
          // if there are errors log them to the console
          console.log(err)
        });
    },
    deleteDate: (req, res) => {
        console.log("SERVER ACTION - Deleting Date:")
        db.Post.delete({
            // logic to delete here
        })
    },
    addComment: (req, res) => {
        console.log("SERVER ACTION - adding comment:")
        // add comment to date
    },
    deleteComment: (req, res) => {
        console.log("SERVER ACTION - deleting comment:")
        // delete a comment
    },
}

