var readline = require("readline"),
    open = require("open");

module.exports = {
    rl: null,
    wrt: function(youtube) {
        // Create read line module interface
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.rl.question('Type what would you like to watch: ', function(qry) {
            var search = youtube.search.list({
                q: qry,
                part: 'snippet',
                maxResults: 5
            }, module.exports.searchResults);
        });
    },

    searchResults: function(err, res) {
        if (err)
            throw err;

        var rl = module.exports.rl;

        if (res.items) {
            var items = res.items;
            console.log('Choose one of the options below:\n');

            items.forEach(function(item, index) {
                console.log((index + 1) + ". " + item.snippet.title);
            });

            rl.question('\nWrite the number of the title that you want to watch: ', function(i) {
                var itemIndex = i--;
                open("https://www.youtube.com/watch?v=" + items[itemIndex].id.videoId);
                rl.close();
            });
        }
    }
};
