/**
 * Created by Mark on 11/22/2016.
 * Reference- MongoDB findOne- NodeJS: http://stackoverflow.com/questions/19625827/findone-nodejs-mongodb-driver
 */

var express = require('express');
var router = express.Router();
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSE5335 mxf6133 Project-2' });
});

module.exports = router;

/* GET data from Mongodb */
router.get('/get-document', function(req, res) {
    var db = req.db;
    var id = req.param('id');
    var collection = db.get('marvel');
    collection.findOne({"id": parseInt(id)},{_id:0},function(e,docs){
        res.json(docs);
    });
});