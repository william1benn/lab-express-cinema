const express = require('express');
const router  = express.Router();
const cinema = require('../model/cinemaModel');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res, next)=>{
  cinema.find()
  .then((data)=>{
    res.render('movies',{data})
  })
  .catch((err)=>{
    next(err);
  })
})


router.get('/singleMovie/:movieID', (req, res, next)=>{

  let ID = req.params.movieID;
  cinema.findById(ID)
  .then((AsingleMovie)=>{

    res.render('singleMovie', {AsingleMovie})

  })
  .catch((err)=>{
    next(err);
  })

})






module.exports = router;

