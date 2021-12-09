
var express = require('express');
var router = express.Router();

const fs = require('fs')


/* GET users listing. */
router.get('/', function(req, res, next) { 
    console.log('start calling')
    let result = ''
    try {
        const data = fs.readFileSync('/home/laitmatus/Desktop/learning/myjs/demo/index.html', 'utf8')  
        console.log('data reading done')
        console.log('data = ', data)
        result = data 

        fs.close() 
        return
    } catch( err ) {
        console.log(err)
    }
    res.send(result);  
  });
  
  module.exports = router;
  