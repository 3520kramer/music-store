import { ROOT_URL } from "./common.js";

console.log(`${ROOT_URL}/tracks/view`);

if (window.location.pathname === `${ROOT_URL}/tracks/view`) {
  const query = window.location.search;
  console.log(query);

  $.ajax({
    url: `/exam/music-store-api/tracks${query}`,
    type: "GET",
    success: function (response) {
      console.log("response", response);
      // Inject data into HTML
    },
  });
}
