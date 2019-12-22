var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lo', function (req,res) {
  res.render("../views/London.html");
});
router.get('/test', function (req,res) {
    res.render("../views/test.html");
});

router.get('/londonJSON',function (req,res) {
    let rawdata = fs.readFileSync(__dirname+'/../views/London.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
})

router.get('/London.json', function(res){
  var json = $.getJSON('London.json', function(json) {
    console.log(json)
  })
});

router.get('/data/londonBoroughs.json', function(req,res){
    let rawdata = fs.readFileSync(__dirname+'/../data/londonBoroughs.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});

module.exports = router;
