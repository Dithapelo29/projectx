const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('callLogPage.ejs');
});

module.exports = router;