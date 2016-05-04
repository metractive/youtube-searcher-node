var fs = require('fs'),
    https = require('https'),
    readline = require('readline'),
    open = require('open'),
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
            var youtube = google.youtube({ version: 'v3', auth: client.API_KEY });

            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question('Digite a sua busca: ', (answer) => {

                var search = youtube.search.list({
                    q: answer,
                    part: 'snippet',
                    maxResults: 5
                }, function(err, res) {
                    var items = res.items;
                    console.log('Escolha uma das opções para abrir:\n');

                    items.forEach(function(item, index) {
                        // console.log((index + 1) + ". );
                        console.log((index + 1) + ". " + item.snippet.title);
                    });

                    rl.question('\nDigite o número do títutlo que deseja: ', (i) => {
                        open("https://www.youtube.com/watch?v=" + items[(i-1)].id.videoId);
                        rl.close();
                    });
                });
            });


        }
    }
};
