const express = require("express");
const viewRoute = require("./viewRoute");
const dotenv = require("dotenv");
const compression= require('compression');
const cors = require('cors');


dotenv.config({ path: "./config.env" });


const newsController=require('./newsController')
const IndianNewsController=require('./IndianNewsController')


const app = express();
const port = process.env.PORT || 9999;
app.use(cors());
app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);
app.use("/", viewRoute);

app.use(express.json());

app.use(compression());
app.get('/api',newsController.IndianNews)
app.get("/api/UsaNews",newsController.UsaNews);
app.get('/api/business',IndianNewsController.business)
app.get('/api/entertainment',IndianNewsController.entertainment)
app.get('/api/science',IndianNewsController.science)
app.get('/api/sports',IndianNewsController.sports)



app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
