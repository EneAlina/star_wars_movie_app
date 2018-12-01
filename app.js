var express = require('express');

var app=express(); //aici spunem ca aplicatia est express
//are toate aplicatiile din expless si pot fi apelate
// console.log("Hello brah");

app.set('view engine', 'ejs');
//Routes

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//home
app.get('/', routes.home);

// app.get('/darth',function(req,res){
// 	res.send("This is a server response on the home page");
// });


//movie_single
app.get('/star_wars_episode/:episode_number?',routes.movie_single);

//not Found
app.get('*', routes.notFound);

// app.listen(3000, function(){
// 	console.log("The application is running on localhost:300");
// });
app.listen (process.env.PORT || 3000);


