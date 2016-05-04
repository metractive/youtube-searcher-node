var fs = require('fs'),
    google = require('googleapis');

module.exports = {
    scopes: ['https://www.googleapis.com/auth/youtube'],

    authenticate: function() {
        var CREDENTIALS = {};
        var readFile = fs.readFileSync('./config.json');

        if (readFile) {
            CREDENTIALS = JSON.parse(readFile);
        }

        if (!CREDENTIALS.API_KEY) {
            console.log("Please, set your API Key on auth.js");
            console.log("You can generate it here:");
            console.log("https://console.developers.google.com/apis (YouTube Data API)");
            return false;
        }

        return google.youtube({ version: 'v3', auth: CREDENTIALS.API_KEY });
    }
};
