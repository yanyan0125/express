define(function(require,exports,modules){
    var add = require('./jia.js');
    var jian = require('./jian.js');
    var cheng = require('./cheng.js');
    var chu = require('./chu.js');
    modules.exports = {
        add :add,
        jian:jian,
        cheng:cheng,
        chu:chu
    }
});
