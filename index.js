// Require modules
var auth = require("./auth.js");
var search = require("./search.js");

console.log('-------------------------------');
console.log('Welcome to YouTube Searcher');
console.log('-------------------------------');

// Authenticate Credentials
var yt = auth.authenticate();

// Search it on YouTube
if (yt) search.wrt(yt);
