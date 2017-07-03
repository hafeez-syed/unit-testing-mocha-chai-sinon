/**
 * Created by Hafeez on 1/12/2014.
 */

var express = require('express')
    , app = express()
    , path = require('path')
    , config = require('./config/development')
    , func = require('./includes/functions')
    , serverPort = config.environment.dev.port

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(express.static('public'))




app.get('/', function(req, res){
    var method = func.method(req)
    res.render('index', {
        pageTitle: 'Javascript unit testing with Mocha, Chai and Sinon',
        paletteBox: method.colorPalette,
        liveReloadScript: method.liveReloadScript
    })
})

app.get('/24x7', function(req, res){
    var method = func.method(req)
    res.render('24x7', {
        pageTitle: 'Telstra 24x7 App',
        liveReloadScript: method.liveReloadScript
    })
})

app.listen(serverPort)
console.log('server listening on port : '+serverPort)
console.log('process.cwd : '+process.cwd())
