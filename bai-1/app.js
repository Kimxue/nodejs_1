import express from "express";
const app = express();
import rootRouter from "./routes/root.mjs";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const uri = "mongodb+srv://thang0388432076:Tt0QBAbUm3zbmVEq@backend.vmvxc.mongodb.net/Node_API?retryWrites=true&w=majority&appName=backend"

mongoose.connect(uri)
.then(() => {
    console.log("connected")
})
.catch(() => {
    console.log('connected err')
})
 
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', rootRouter);

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})