<?php include_once __DIR__ . '/../../utilities/constants.php' ?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" defer></script>
  <script src="<?= ROOT_DIR . '/js/index.js' ?>" type="module" defer></script>
  <link rel="stylesheet" href="<?= ROOT_DIR . '/css/css_loader.php' ?>">
  <title>Document</title>
</head>

<body>
  <header>
    <a href="<?= ROOT_DIR . '/home' ?>">
      <h1>Music Store</h1>
    </a>
    <a id="menu-icon" href=""><img src="<?= ROOT_DIR . '/images/hamburger.png' ?>" alt="menu" /></a>
  </header>
  <nav>

    <ul>
      <li><a href="<?= ROOT_DIR . '/tracks' ?>">Tracks</a></li>
      <li><a href="<?= ROOT_DIR . '/artists' ?>">Artists</a></li>
      <li><a href="<?= ROOT_DIR . '/albums' ?>">Albums</a></li>
      <li><a href="<?= ROOT_DIR . '/my-account' ?>">My account</a></li>
    </ul>
  </nav>


  <main>