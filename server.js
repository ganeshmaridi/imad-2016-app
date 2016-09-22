var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var requestone={
    title:'request-one||ganesh',
    heading:'request-one',
    date:'sept5,2016',
    content:`
            <p>
                need some content hereneed some content hereneed some content hereneed some content herevneed some content herevvvvneed some content hereneed some content hereneed some content herev
                need some content hereneed some content herevvneed some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content here
                need some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content here.
            </p>
            <p>
                need some content hereneed some content hereneed some content hereneed some content herevneed some content herevvvvneed some content hereneed some content hereneed some content herev
                need some content hereneed some content herevvneed some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content here
                need some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content here.
            </p>
            <p>
                need some content hereneed some content hereneed some content hereneed some content herevneed some content herevvvvneed some content hereneed some content hereneed some content herev
                need some content hereneed some content herevvneed some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content here
                need some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content hereneed some content here.
            </p>`
};            


function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
        <html>
                <head>
                <title>    
                    ${title}
                </title>
                <meta name='viewport' content='width=device-width,initial-scale=1'/>
                <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                    <div class='container'> 
                    <div>
                    <a href='/'>HOME</a>    
                    </div> 
                    <div>
                    ${heading}
                    </div>
                    <div>
                    ${date}    
                    </div>
                    <div>
                    ${content}
                    </div>
                </body>
        </html>
    `; 
    return htmlTemplate;
}    

    





app.get('/request-one',function(req,res){
     res.send(createTemplate(requestone));
});
app.get('/request-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'request-two.html'));
});
app.get('/request-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'request-three.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
