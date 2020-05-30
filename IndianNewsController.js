const superagent = require("superagent");

exports.business = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.entertainment = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.science = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.sports = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.sports = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.tech = async (req, res) => {
  try {
    const data = await superagent.get(
      "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=344dc7ee6cfd4fe88d91a3441a15d765"
    );

    // console.log(JSON.parse(data.text))
    const data2 = JSON.parse(data.text);
    res.status(200).json({
      data: data2,
    });
  } catch (err) {
    console.log(err);
  }
};
