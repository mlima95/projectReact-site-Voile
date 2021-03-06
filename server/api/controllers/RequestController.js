'use strict';
var mongoose = require('mongoose');
var Request = require('../models/Request');

exports.list_all_requests = function (req, res) {
    Request.find({}, function (err, request) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(request);
        }
    });
};

exports.list_all_requestsUser = function (req,res) {
    Request.find({}).where("user","5ea1f79fa8fa771db09c329e").exec(
    (function(err,requestUser){
        if (err){
            res.send(err);
        }else{
            console.log(requestUser);
            res.json(requestUser);
        }
    })
    );
}


exports.read_a_request = function (req, res) {
    Request.findById(req.params.requestId, function (err, request) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(request);
        }
    });
};

exports.create_a_request = function (req, res) {
    var new_request = new Request(req.body);
    new_request.save(function (err, request) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(request);
        }
    });
};

exports.update_a_request = function (req, res) {
    Request.findOneAndUpdate({ _id: req.params.requestId }, req.body, { new: true }, function (err, request) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(request);
        }
    });
};

exports.delete_a_request = function (req, res) {
    Request.deleteOne({
        _id: req.params.requestId
    }, function (err, request) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Request successfully deleted' });
        }
    });
};