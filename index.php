<?php
include_once 'utilities/url.php';
include_once 'src/session/authenticate.php';

session_start();

$url = get_url(__DIR__);

if (count($url) === 1) {
  array_push($url, 'home');
}
$jwt = $_SESSION['jwt'] ?? null;

switch ([$url[1], $url[2] ?? null]) {
  case ['home', null]:
    include_once('src/home/home.php');
    break;

  case ['tracks', null]:
    include_once('src/tracks/tracks.php');
    break;

  case ['tracks', 'view']:
    include_once('src/tracks/one-track/one-track.php');
    break;

  case  ['artists', null]:
    include_once('src/artists/artists.php');
    break;

  case  ['albums', null]:
    include_once('src/albums/albums.php');
    break;

  case ['albums', 'view']:
    include_once('src/albums/one-album/one-album.php');
    break;

  case  ['cart', null]:
    include_once('src/cart/cart.php');
    break;

  case  ['cart', 'checkout']:
    include_once('src/cart/checkout/checkout.php');
    break;

  case  ['cart', 'checkout-done']:
    include_once('src/cart/checkout/checkout-done/checkout-done.php');
    break;

  case  ['my-account', null]:
    include_once('src/my-account/my-account.php');
    break;

  case  ['my-account', 'sign-in']:
    include_once('src/my-account/sign-in/sign-in.php');
    break;

  case  ['my-account', 'register']:
    include_once('src/my-account/register/register.php');
    break;

  default:
    echo 'error';
    break;
}

include_once('src/common/footer/footer.php');

function include_once_if_authorized(string $filepath)
{
  // if()
}
