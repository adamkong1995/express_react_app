// Decide what environment and return relevant keys
if (process.env.NODE_ENV === 'production') {
     modules.exports = require('./prod');
} else {
    modules.exports = require('./dev');
}