var bodyParser = require('body-parser');


var data =[{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick ass'}];
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){


    app.get('/todo', function(req,res){
        res.render('todo', {todos: data});
    });


    app.post('/todo', urlencodedParser, function(req,res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item',function(req,res){
        var index = data.indexOf(req.body);
        data.splice(index,1); 
        res.json(data);
       });


};