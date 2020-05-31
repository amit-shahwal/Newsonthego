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

    function ReplaceContent(NC) {
      document.body.innerHTML = NC;
    }
    ReplaceContent(data.data);

    var ss = document.querySelector(".btn-info");
    if (ss) {
      ss.addEventListener("click", search);
    }
  } catch (err) {}
};
var ss = document.querySelector(".btn-info");
if (ss) {
  ss.addEventListener("click", search);
}
