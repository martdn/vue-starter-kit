'use strict';


module.exports = (app) => {
    app.get('/posts', function(req, res) {
        res.send(
            [{
                title: "Hellow World!",
                description: "Hi there! How are you?"
            }]
        )
    });
}