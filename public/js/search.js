const search = async () => {
  try {
    // document.getElementById.getElementById("myCheck").checked = true;
    var x = document.querySelector(".form-control").value;
  

    const data = await axios({
      method: "POST",
      url: "/api/newsquery",
      data: {
        q: x,
      },
    });
    //console.log("x",x);
   // console.log(data.data);
//window.location='/newsquery'
function ReplaceContent(NC) {
    document.body.innerHTML=NC;
  }
ReplaceContent(data.data);
//alert("ddint work")
var ss = document.querySelector(".btn-info");
if (ss) {
    ss.addEventListener("click", search);
  }

  } catch (err) {
    //showAlert("error", err.response.data.message);
  }
};
var ss = document.querySelector(".btn-info");
if (ss) {
  ss.addEventListener("click", search);
}

