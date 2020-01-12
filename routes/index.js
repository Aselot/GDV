var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/lo', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function (req,res) {
  res.render("../views/test2.html");
});
router.get('/test', function (req,res) {
    res.render("../views/test.html");
});

router.get('/map', function (req,res) {
    res.render("../views/test3.html");
});

router.get('/londonJSON',function (req,res) {
    let rawdata = fs.readFileSync(__dirname+'/../views/London.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
})


router.get('/data/cars.json', function(req,res){
    let rawdata = fs.readFileSync(__dirname+'/../data/annualEarning.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});

router.get('/data/londonCentroids.json', function(req,res){
    let rawdata = fs.readFileSync(__dirname+'/../data/londonCentroids.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});


router.get('/data/londonBoroughs.json', function(req,res){
    let rawdata = fs.readFileSync(__dirname+'/../data/londonBoroughs.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});
router.get('/data/annualEarning.json', function(req,res){
    let rawdata = fs.readFileSync(__dirname+'/../data/annualEarning.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});
router.get('/data/ethnicGroups.json', function(req,res){
    let rawdata = fs.readFileSync(__dirname+'/../data/ethnicGroups.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});
router.get('/data/ethnicGroups2018.json', function(req,res){
    let rawdata = fs.readFileSync(__dirname+'/../data/data.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});
router.get('/data/londonBoroughs.json', function(req,res){
    let rawdata = fs.readFileSync(__dirname+'/../data/londonBoroughs.json');
    let jsonData = JSON.parse(rawdata);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(jsonData));
});

router.get('/xslx', function (req,res) {
    res.render("../views/xslx.html");
});


module.exports = router;
