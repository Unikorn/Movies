'use strict';

const
    _ = require('lodash'),
    request = require('request'),
    config = require('../../../config');

function searchMovies(req, res) {
    if (!config.imdb_api_key) {
        res.status(500).send("invalid api key : " + config.imdb_api_key);
    }

    request('http://www.omdbapi.com/?s=avengers&apikey=' + config.imdb_api_key,
    function (error, response, body) {
        if (error) {
            res.status(error.statusCode).send("something failed: " + error);
        }
        else if (response.statusCode == 200) {
            res.status(200).send(body);
        }
    })
}

function getList(req, res) {
    res.status(200).send("success!!");
}

module.exports = {
    searchMovies : searchMovies,
    getList : getList
};

