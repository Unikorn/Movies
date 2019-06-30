'use strict';

const 
    express = require('express'),
    moviesController = require('../../../controllers/api/movies');

let router = express.Router();

router.use('/movies', moviesController);

module.exports = router;
