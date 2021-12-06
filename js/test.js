// $(document).ready(function () {
// console.log("hey");
$.ajax({
  url: "api/tracks",
  type: "POST",
  data: {
    name: "hey",
  },
  success: function (response) {
    console.log(response);
  },
});
// });
