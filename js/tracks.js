import { ROOT_URL } from "./common.js";

console.log(`${ROOT_URL}/tracks`);

if (window.location.pathname === `${ROOT_URL}/tracks`) {
  $.ajax({
    url: "/exam/music-store-api/tracks",
    type: "GET",
    success: function (response) {
      console.log(response);
    },
  });
}

$(".track-list li").on("click", function (e) {
  e.preventDefault();
  console.log($(this).attr("id"));
  // $(".slide-in-before").css({ right: 0 });
  $(".slide-in-before").addClass("slide-in-after");

  location.href = `tracks/view?id=${$(this).attr("id")}`;
});
