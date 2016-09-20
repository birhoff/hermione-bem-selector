'use strict';

const selector = require('./lib/selector');

const _defaults = {
    selector: 'select'
};

module.exports = function(hermione, opts) {

    const options = Object.assign({}, _defaults, opts);

    hermione.on(hermione.events.RUNNER_START, function() {
        global[options.selector] = selector;
    });
};
