'use strict';

const
    _ = require('lodash'),
    env = process.env.NODE_ENV || 'local',
    port = process.env.PORT || 3000,
    imdb_api_key = process.env.IMDB_API_KEY;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const defaultConfig = {
    env: env,
    port:  port,
    imdb_api_key: imdb_api_key
};

module.exports = defaultConfig;