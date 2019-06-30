'use strict';

const
    express = require('express'),
    imdbService = require('../../../services/imdb');

let router = express.Router();

router.get('/', imdbService.getList);
router.get('/search', imdbService.searchMovies);

module.exports = router;