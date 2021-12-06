$(document).ready(() => {
  $("header a").on("click", function () {
    $("nav").slideToggle(100);
  });

  $(".track-list li").on("click", function () {
    console.log($(this).attr("id"));
    location.href = "tracks/view";
  });
});
