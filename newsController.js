const superagent = require("superagent");

exports.UsaNews = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=344dc7ee6cfd4fe88d91a3441a15d765 "
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
   // console.log(err.message);
  }
};

exports.IndianNews = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    const data3=data2.articles
   // console.log(data3)
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
   // console.log(err);
  }
};

exports.newsquery = async (req, res) => {
  try {
    //  console.log(req.body.q);
     var y=req.body.q;
     // console.log(`"${y}"`);
    const data = await superagent.get(
      `https://newsapi.org/v2/everything?q="${y}"&apiKey=344dc7ee6cfd4fe88d91a3441a15d765`
    );

    const data2 = JSON.parse(data.text);
    res.status(200).render("sports", {
      title: "search",
      newss: data2.articles,
    });
  } catch (err) {
   // console.log(err);
  }
};



