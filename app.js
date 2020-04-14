const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const DATA_TREE = require('./__mock__/DataTree.mock.json');
const PORT = 3001
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())


app.post('/modeling', (req, res) => {
    
    res.json(DATA_TREE);
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('server is on through port '+PORT);
})