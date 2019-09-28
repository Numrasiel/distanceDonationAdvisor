var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

    const maxRatio=0.005;
    const minRatio=0.002;
    const carbFootpintRatio=0.3023614509094777;
app.get('/:distance', function (req, res) {
    let distance=req.params.distance;
    //console.log(distance);
    res.send({"currency":"USD",
    "low":minRatio*distance, 
    "hight":maxRatio*distance,
    "cobonFootprintKg":carbFootpintRatio*distance,
    "distance":distance});
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
