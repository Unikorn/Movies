'use strict';

function index (req, res) {
    const info = `
    ... <br/>
    Welcome to Movies database <br/> <br/>
    APIs: <br/>
    /api/v1/movies <br/>
    /api/v1/movies/search <br/>`;

    res.send(info);
}

module.exports = {
    index: index
};
