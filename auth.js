var fs = require('fs'),
    https = require('https'),
    google = require('googleapis'),
    OAuth2 = google.auth.OAuth2;

module.exports = {
    scopes: ['https://www.googleapis.com/auth/youtube'],
    CREDENTIALS: {API_KEY: "AIzaSyAiBTCEbILidJSaYmMd5rDSdsG-bgjBpPk"},
    yt: null,

    initialize: function() {
        var that = this;
        console.log('-------------------------------');
        console.log('Welcome to YouTube Searcher');
        console.log('-------------------------------');

        if (!this.CREDENTIALS.API_KEY) {
            console.log("Please, set your API Key on auth.js");
            return false;
        }

        this.authenticate();
    },

    authenticate: function() {
        if (this.CREDENTIALS) {
            var client = this.CREDENTIALS;
            this.yt = google.youtube({ version: 'v3', auth: client.API_KEY });
        }
    }
};
