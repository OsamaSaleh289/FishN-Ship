const express = require("express");
var request = require("request")
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"))
app.get("/getFishType", (req, res) => {
    request(
        url: 'https://api.ximilar.com/recognition/v2/classify',
        json: true,
        body: {
            task_id: '5bff2c44-f421-4189-8827-600402e6f6e7',
            version: '1',
            records: [{"url": "https://static01.nyt.com/images/2015/04/18/opinion/L20fishWEB/L20fishWEB-superJumbo.jpg"}]
            

        }
        method : 'post'




    );




});

app.listen(port, () => console.log(`FishNShip listening on port ${port}!`))

