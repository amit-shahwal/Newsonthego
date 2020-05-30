const express = require("express");
const viewRoute = require("./viewRoute");




const newsController=require('./newsController')
const IndianNewsController=require('./IndianNewsController')


const app = express();
const port = 9999;

app.set("view engine", "pug");
app.set("views", `${__dirname}/views`);
app.use("/", viewRoute);

app.use(express.json());
app.get('/api',newsController.IndianNews)
app.get("/api/UsaNews",newsController.UsaNews);
app.get('/api/business',IndianNewsController.business)
app.get('/api/entertainment',IndianNewsController.entertainment)
app.get('/api/science',IndianNewsController.science)
app.get('/api/sports',IndianNewsController.sports)



app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
