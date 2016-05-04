// Require modules
var auth = require("./auth.js");
var search = require("./search.js");

// Initialize authentication
auth.initialize();

if (auth.yt) {
    // Show the YouTube search
    search.wrt(auth.yt);
}
