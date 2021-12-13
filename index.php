<?php
include_once('utilities/url.php');
include_once('utilities/renderer.php');


$url = get_url(__DIR__);

if(count($url) === 1){
  array_push($url, 'home');
}

include_once('views/header.php');

// echo $_GET['url'] ?? 'home';

switch ($url[1]) {
  case 'home':
    include_once('views/home.php');
    break;
  case 'tracks':
    include_once('views/tracks/tracks.php');
    break;
  case 'tracks/view':
    include_once('views/tracks/one-track.php');
    break;
  case 'artists':
    include_once('views/artists.php');
    break;
  case 'albums':
    include_once('views/albums.php');
    break;
  case 'my-account':
    include_once('views/my-account.php');
    break;
  default:
    echo 'error';
    break;
}

include_once('views/footer.php');