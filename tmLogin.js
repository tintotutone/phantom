var page = require('webpage').create(),
    server = 'http://www.transfermarkt.de/de/benutzer/system/login.html',
    data = 'username=MyUSERNAME&cookie=on&password=MyPASSWORD';

page.open(server, 'post', data, function (status) {
    if (status !== 'success') {
        console.log('Unable to post!');
    } else {
        console.log(page.content);
    }
    phantom.exit();
});