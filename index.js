import express from "express";
import bodyParser  from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 3003;

app.get('/' , (req, res) =>{
    res.send('Hello World')
})

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.listen(port, () => {
    console.log(`Waterco is now available on port ${port}`);
})

// mysql://b56f141037374a  :  @us-cdbr-east-03.cleardb.com/  heroku_e1c6fdd583e068e  ?reconnect=true   