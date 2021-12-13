import { ROOT_URL } from "../../../js/constants.js";
import { formatTime, formatSize, getUrlAndParam } from "../../../js/common.js";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsImZpcnN0X25hbWUiOiJMdVx1MDBlZHMiLCJsYXN0X25hbWUiOiJHb25cdTAwZTdhbHZlcyIsImV4cCI6MTYzOTgyMjU4OX0.f2Ci-5M5tYA4VWSq94kMc7LQBLlx2mnCbDNBNQyOnO8";

console.log(`${ROOT_URL}/tracks/view`);

const trackWrapper = $("#view-track");

const [url, param] = getUrlAndParam();

if (url === `${ROOT_URL}/tracks/view/`) {
  $.ajax({
    url: `/exam/music-store-api/tracks/${param}`,
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
  trackWrapper.append([
    $("<img />", {
      id: "track-album-img",
      src: track["imgUrl"],
      alt: `${track["albumName"]} cover art`,
    }),
    $("<h2 />", { text: track["trackTitle"] }),

    $("<a />", {
      href: `${ROOT_URL}/artists/view/${track["artistId"]}`,
    }).append($("<p />", { text: track["artistName"] })),

    $("<a />", {
      href: `${ROOT_URL}/albums/view/${track["albumId"]}`,
    }).append($("<p />", { text: track["albumName"] })),

    $("<p />").append([
      $("<span />", { text: `${track["trackGenre"]} - ` }),
      $("<span />", { text: `${formatTime(track["trackTime"])} - ` }),
      $("<span />", { text: `${formatSize(track["trackSize"])}` }),
    ]),
  ]);
};
