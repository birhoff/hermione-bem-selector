'use strict';

module.exports = function(hermione, opts) {
    hermione.on(hermione.events.SESSION_START, function() {
        console.log('=>', hermione);
        console.log('=>', opts);
        console.log('=>', arguments);
        console.log('=>', this);
    });
};
