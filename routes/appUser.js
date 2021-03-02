const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('callLogPage.ejs');
});

router.post('/callLog',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports = router;