const superagent = require("superagent");

exports.landing = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    res.status(200).render("land", {
      title: "News__V2.0",
      newss: data2.articles,
    });
  } catch (err) {
   // console.log(err);
  }
};
exports.business = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );
    const data2 = JSON.parse(data.text);
    res.status(200).render("business", {
      title: "BUSINESS",
      newss: data2.articles,
    });
  } catch (err) {
   // console.log(err);
  }
};

exports.entertainment = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );
    const data2 = JSON.parse(data.text);
    res.status(200).render("entertainment", {
      title: "ENTERTAINMENT",
      newss: data2.articles,
    });
  } catch (err) {
    //console.log(err);
  }
};

exports.sports = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );
    const data2 = JSON.parse(data.text);
    res.status(200).render("sports", {
      title: "SPORTS",
      newss: data2.articles,
    });
  } catch (err) {
    //console.log(err);
  }
};

exports.science = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );
    const data2 = JSON.parse(data.text);
    res.status(200).render("science", {
      title: "SCIENCE",
      newss: data2.articles,
    });
  } catch (err) {
    //console.log(err);
  }
};
exports.tech = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );
    const data2 = JSON.parse(data.text);
    res.status(200).render("technology", {
      title: "TECH",
      newss: data2.articles,
    });
  } catch (err) {
    //console.log(err);
  }
};

exports.health = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );
    const data2 = JSON.parse(data.text);
    res.status(200).render("health", {
      title: "HEALTH",
      newss: data2.articles,
    });
  } catch (err) {
    //console.log(err);
  }
};
exports.newsquery = async (req, res) => {
    try {
         res.status(200).render("newsquery", {
        title: "search",
      
      });
    } catch (err) {
     // console.log(err);
    }
  };