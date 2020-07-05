const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: path.join(__dirname, 'public'),
    filename: 'bundle.js'
};
