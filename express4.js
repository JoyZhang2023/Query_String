import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/get',(req,res) => {
    console.log(req.query.name);
    res.type('text/plain');
    res.send("Query string: " + req.query.name);
})

app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404-Not Found");
});

app.listen(app.get('port'), ()=> {
    console.log("Express Server is running");
});