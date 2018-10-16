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









//router.create()







module.exports = router;