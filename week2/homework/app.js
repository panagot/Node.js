var express = require ('express');
var todoController = require ('./controllers/todocontroller');

var app = express();


//set up template engine


app.set('view engine', 'ejs');

//static files

app.use(express.static('./public'));


//fire controllers
todoController(app);


//listen to port

app.listen(3000);

console.log("you are listening to port 3000");
console.log("Go to localhost:3000/todo to check your list, add or delete obligations");