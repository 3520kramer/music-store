import { ROOT_URL } from "../../js/constants.js";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsImZpcnN0X25hbWUiOiJMdVx1MDBlZHMiLCJsYXN0X25hbWUiOiJHb25cdTAwZTdhbHZlcyIsImV4cCI6MTYzOTgyMjU4OX0.f2Ci-5M5tYA4VWSq94kMc7LQBLlx2mnCbDNBNQyOnO8";

console.log(`${ROOT_URL}/tracks`);

// if (window.location.pathname === `${ROOT_URL}/tracks`) {
// $.ajax({
//   url: "/exam/music-store-api/tracks",
//   type: "GET",
//   headers: { Authorization: "Bearer " + token },
//   success: function (response) {
//     console.log(response);
//     const a = createArtistList();
//     $(".artist-list").append(a);
//   },
// });
// }

// $(".track-list li").on("click", function (e) {
//   e.preventDefault();
//   console.log($(this).attr("id"));
//   // $(".slide-in-before").css({ right: 0 });
//   $(".slide-in-before").addClass("slide-in-after");

//   location.href = `tracks/view?id=${$(this).attr("id")}`;
// });
const loading = $("#loading");
const error = $("#error");
const wrapper = $("#search-result-wrapper");

$(".search-form").submit(function (e) {
  e.preventDefault();
  console.log(e);

  // get the form values in array format and reduce
  const search = $(this).serializeArray()[0]["value"];

  $(document).ajaxStart(function () {
    wrapper.empty();
    error.hide();
    loading.show();
  });

  $(document).ajaxStop(function () {
    loading.hide();
  });

  $(document).ajaxError(function () {
    error.show();
  });

  $.ajax({
    url: `/exam/music-store-api/search?value=${search}`,
    // url: `/exam/music-store-api/search?value=be`, //ethoven: sym`,

    type: "GET",
    headers: { Authorization: "Bearer " + token },
    success: function (response) {
      console.log(response);

      const sections = [];

      if (response["artists"].length > 0) {
        console.log("artists");
        sections.push(createArtistList(response["artists"]));
      }

      if (response["albums"].length > 0) {
        console.log("albums");
        sections.push(createAlbumList(response["albums"]));
      }

      if (response["tracks"].length > 0) {
        console.log("tracks");
        sections.push(createTrackList(response["tracks"]));
      }

      // HANDLE EMPTY RESPONSE
      if (sections.length === 0) {
        console.log("NO RES", response);
        sections.push($("<h3 />", { text: "No results - please try again" }));
      }
      wrapper.append(sections);
    },
  });
});

const IMG_PLACEHOLDER_PATH = ROOT_URL + "/images/musical-note.png";
const IMG_NEXT_PATH = "/images/next.png";

const createArtistList = (artists) => {
  const section = $("<section />", { id: "artist-section" }).append(
    $("<h3 />", { text: "Artists" })
  );
  const artistList = $("<ul />", { class: "artist-list" }).appendTo(section);

  artists.forEach((artist) => {
    const id = artist["id"];
    const listItem = $("<li />", { id: id }).appendTo(artistList);
    const listAnchor = $("<a />", { href: `artists/view?id=${id}` }).appendTo(
      listItem
    );

    $("<img />", {
      src:
        artist["imgUrl"] ??
        "https://e-cdns-images.dzcdn.net/images/artist/250x250-000000-80-0-0.jpg",
      alt: "Show more",
    }).appendTo(listAnchor);

    $("<p />", { text: artist["artistName"], class: "truncate-word" }).appendTo(
      listAnchor
    );

    $("<img />", {
      src: ROOT_URL + IMG_NEXT_PATH,
      alt: "Show more",
    }).appendTo(listAnchor);
  });
  // $(wrapper).append(section);
  return section;
};

const createTrackList = (tracks) => {
  const section = $("<section />", { id: "track-section" }).append(
    $("<h3 />", { text: "Tracks" })
  );
  const trackList = $("<ul />", { class: "track-list" }).appendTo(section);

  tracks.forEach((track) => {
    const id = track["id"];
    const listItem = $("<li />", { id: id }).appendTo(trackList);
    const listAnchor = $("<a />", { href: `tracks/view?id=${id}` }).appendTo(
      listItem
    );

    $("<img />", {
      src: track["imgUrl"] ?? ROOT_URL + "/images/music-album.png",
      alt: "Show more",
    }).appendTo(listAnchor);

    $("<p />", { text: track["trackName"], class: "truncate-word" }).appendTo(
      listAnchor
    );
    $("<p />", { text: track["artistName"], class: "truncate-word" }).appendTo(
      listAnchor
    );

    $("<img />", {
      src: ROOT_URL + IMG_NEXT_PATH,
      alt: "Show more",
    }).appendTo(listAnchor);
  });
  //$(wrapper).append(section);
  return section;
};

const createAlbumList = (albums) => {
  const section = $("<section />", { id: "album-section" }).append(
    $("<h3 />", { text: "Albums" })
  );
  const trackList = $("<ul />", { class: "album-list" }).appendTo(section);

  albums.forEach((album) => {
    const id = album["id"];
    const listItem = $("<li />", { id: id }).appendTo(trackList);
    const listAnchor = $("<a />", { href: `albums/view?id=${id}` }).appendTo(
      listItem
    );

    $("<img />", {
      src: album["imgUrl"] ?? ROOT_URL + "/images/music-album.png",
      alt: "Show more",
    }).appendTo(listAnchor);

    $("<p />", { text: album["albumName"], class: "truncate-word" }).appendTo(
      listAnchor
    );
  });
  //$(wrapper).append(section);
  return section;
};
