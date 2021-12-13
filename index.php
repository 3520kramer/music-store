<?php
include_once('utilities/url.php');
include_once('utilities/renderer.php');


$url = get_url(__DIR__);

if(count($url) === 1){
  array_push($url, 'home');
}

include_once('src/header/header.php');

// echo $_GET['url'] ?? 'home';

switch ($url[1]) {
  case 'home':
    include_once('src/home/home.php');
    break;
  case 'tracks':
    include_once('src/tracks/tracks.php');
    break;
  case 'tracks/view':
    include_once('src/tracks/one-track.php');
    break;
  case 'artists':
    include_once('src/artists/artists.php');
    break;
  case 'albums':
    include_once('src/albums/albums.php');
    break;
  case 'my-account':
    include_once('src/my-account/my-account.php');
    break;
  default:
    echo 'error';
    break;
}

include_once('src/footer/footer.php');