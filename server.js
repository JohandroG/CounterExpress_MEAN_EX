const express = require( 'express' );
var session = require('express-session');
const app = express();
app.use(session({secret: 'codingdojorocks'}));

app.set( 'views', __dirname + '/views');
app.set( 'view engine', 'ejs' );

var visitCount = 0;

app.get( '/', function( request, response ) {
    visitCount++;
    response.render( 'index', {visitCount} );
});

app.listen( 8080, function(){
    console.log( 'Running Server' );
});