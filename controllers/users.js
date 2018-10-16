const express = require('express');
const router = express.Router();

const User = require('../models/users');


router.get('/', (req, res) => {
    User.find({}, (err, foundUsers) => {
        if(err){
            console.log(err)
        } else {
            console.log(foundUsers)
            res.render('users/index.ejs', {
                users: User
            })
        }
    });
});

router.get('/new', (req, res) => {
    res.render('users/new.ejs');
})



router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, foundUsers) => {
        res.render('users/show.ejs', {
            users: foundUsers
        });
    });
});

router.get('/:id/edit', (req, res) => {
    User.findById(req.params.id, (err, editUser) => {
        res.render('/:id/edit.ejs', {
            users: editUser,
        })
    })
})


router.post('/', (req, res) => {
    User.create(req.body, (err, createUser) => {
        if(err){
            console.log(err)
        } else {
            res.redirect('/users')
        }
    })
})







module.exports = router;