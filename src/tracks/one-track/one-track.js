import { ROOT_URL } from "../../../js/constants.js";
import { formatTime, formatSize } from "../../../js/common.js";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsImZpcnN0X25hbWUiOiJMdVx1MDBlZHMiLCJsYXN0X25hbWUiOiJHb25cdTAwZTdhbHZlcyIsImV4cCI6MTYzOTgyMjU4OX0.f2Ci-5M5tYA4VWSq94kMc7LQBLlx2mnCbDNBNQyOnO8";

console.log(`${ROOT_URL}/tracks/view`);

const trackWrapper = $("#view-track");

if (window.location.pathname === `${ROOT_URL}/tracks/view`) {
  const query = window.location.search;
  console.log(query);

  $.ajax({
    url: `/exam/music-store-api/tracks${query}`,
    type: "GET",
    headers: { Authorization: "Bearer " + token },
    success: function (response) {
      console.log("response", response);

      // Inject data into HTML
      insertTrackData(response);
    },
  });
}

const insertTrackData = (track) => {
  $("#track-album-img").attr({
    src: track["imgUrl"],
    alt: `${track["albumName"]} cover art`,
  });
  $("#track-title").text(track["trackTitle"]);

  $("#track-artist").attr(
    "href",
    `${ROOT_URL}/artists/view?id=${track["artistId"]}`
  );

  $("#track-artist p").text(track["artistName"]);

  $("#track-album").attr(
    "href",
    `${ROOT_URL}/albums/view?id=${track["albumId"]}`
  );

  $("#track-album p").text(track["albumName"]);
  $("#track-genre").text(track["trackGenre"] + " - ");
  $("#track-length").text(formatTime(track["trackTime"]) + " - ");
  $("#track-size").text(formatSize(track["trackSize"]));
};
