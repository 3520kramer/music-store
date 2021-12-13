<?php
include_once __DIR__ . '/../../utilities/constants.php';
// include_once __DIR__ . '/one-track.php'; 
?>

<form class="search-form">
  <input type="text" name="query" id="query" placeholder="Search by track title..." required />
  <input type="submit" alt="Submit" value="Search" />
  <!-- <input hidden type="image" src="<?= ROOT_DIR . '/images/search-icon.png' ?>" alt="Submit" /> -->
</form>

<h3 hidden id="loading">Loading...</h3>
<h4 hidden id="error">Something went wrong</h4>

<div id="search-result-wrapper">
  
<!-- All sections will be created dynaminally when using search bar-->
  <!-- <section id="artist-section">
    <h3>Artists</h3>
    <ul class="artist-list">
      <li>
        <a href="#">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Artist</p>
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Artist</p>
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
        </a>
      </li>
    </ul>
  </section>

  <section id="album-section">
    <h3>Albums</h3>
    <ul class="album-list">
      <li>
        <a href="#">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Album Name</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Album Name</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Album Name</p>
        </a>
      </li>
    </ul>
  </section>

  <section id="track-section">
    <h3>Tracks</h3>
    <ul class="track-list">
      <li id="1">
        <a href="#">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Title</p>
          <p>Artist</p>
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
        </a>
      </li>
      <li id="1">
        <a href="#">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Title</p>
          <p>Artist</p>
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
        </a>
      </li>
      <li id="1">
        <a href="#">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Title</p>
          <p>Artist</p>
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
        </a>
      </li>
    </ul>
  </section> -->

</div>