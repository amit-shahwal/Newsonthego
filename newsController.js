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
    console.log(err.message);
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
    console.log(data3)
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
    console.log(err);
  }
};
