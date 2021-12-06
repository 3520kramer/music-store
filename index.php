<?php

include_once('views/header.php');

$url = get_url(__DIR__);

if(count($url) === 1){
  array_push($url, 'home');
}

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

function get_url($index_root)
{
  // Get url without parameters
  $url = strtok($_SERVER['REQUEST_URI'], '?');

  // Exclude the trailing slash from basedir if present
  $url = rtrim($url, '/');

  // Remove everything in the url which comes before the basedir
  // Allow the api to be deployed anywhere
  $url = substr($url, strpos($url, basename($index_root)));
  #$url = substr($url, strpos($url, basename(__DIR__)));

  // Split the array by '/'
  $urlPieces = explode('/', urldecode($url), 2);

  return $urlPieces;
}
