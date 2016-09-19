'use strict';

const naming = require('bem-naming');

module.exports = function buildSelector(value) {
    const parentsSelector = value.parents ? [].concat(value.parents || []).map(buildSelector).join(' ') + ' ' : '';
    let filter = '';

    function build(item) {
        typeof item === 'string' && (item = { block: item });
        filter += item.filter || '';

        return [item].concat(Object.keys(item.mods || []).map(function(modName) {
            return {
                block: item.block,
                elem: item.elem,
                modName: modName,
                modVal: item.mods[modName]
            };
        })).map(function(entity) {
            return '.' + naming.stringify(entity);
        }).join('');
    }

    return parentsSelector + [value].concat(value.mix || []).map(build).join('') + filter;
};
