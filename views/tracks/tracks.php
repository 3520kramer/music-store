<?php
include_once __DIR__ . '/../../utilities/constants.php';
// include_once __DIR__ . '/one-track.php'; 
?>

<form class="search-form">
  <input type="text" name="query" id="query" placeholder="Search by track title..." required />
  <input type="submit" alt="Submit" value="Search" />
  <!-- <input hidden type="image" src="<?= ROOT_DIR . '/images/search-icon.png' ?>" alt="Submit" /> -->
</form>
<div id="wrapper">

  <ul class="track-list">
    <a href="<?= ROOT_DIR . "/tracks/view?id=1" ?>" data-page="1">
      <li id="1">
        <p>Title</p>
        <p>Artist</p>
        <p>Album</p>
        <img id="nextbutton" src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
      </li>
    </a>
    <li>
      <p>Title</p>
      <p>Artist</p>
      <p>Album</p>
      <img id="nextbutton" src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
    </li>
    <li>
      <p>Title</p>
      <p>Artist</p>
      <p>Album</p>
      <img id="nextbutton" src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
    </li>
  </ul>

</div>