<?php
include_once __DIR__ . '/../../../utilities/constants.php';

function get_header(string $title, string $js_file)
{
  $js_path = ROOT_DIR . "/src/$js_file";
  $css = CSS_PATH;

  $home_url = ROOT_DIR . '/home';
  $tracks_url = ROOT_DIR . '/tracks';
  $artists_url = ROOT_DIR . '/artists';
  $albums_url = ROOT_DIR . '/albums';
  $cart_url = ROOT_DIR . '/cart';
  $my_account_url = ROOT_DIR . '/my-account';

  $hamburger_img_url = ROOT_DIR . '/images/hamburger.png';
  
  // $const = get_defined_constants();
  // echo $const['CSS_PATH'];
  
  return <<<HTML
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
      <script src="$js_path" type="module" defer></script>
      <link rel="stylesheet" href="$css">
      <title>$title</title>
    </head>
    <body>
    <header>
      <a href="$home_url">
        <h1>Music Store</h1>
      </a>
      <a id="menu-icon" href=""><img src="$hamburger_img_url" alt="menu" /></a>
    </header>
    <nav>
      <ul>
        <li><a href="$tracks_url">Tracks</a></li>
        <li><a href="$artists_url">Artists</a></li>
        <li><a href="$albums_url">Albums</a></li>
        <li><a href="$cart_url">View shopping cart</a></li>
        <li><a href="$my_account_url">My account</a></li>
      </ul>
    </nav>
    <main>
    HTML;
}
