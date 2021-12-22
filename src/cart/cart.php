<?php
include_once __DIR__ . '/../common/header/header.php';
echo get_header('Cart', 'cart/cart.js');
?>

<!-- TEMPLATE -->
<h2 hidden id="empty-cart"> Cart Is Emtpy</h2>

<div id="cart-wrapper">
  <!-- <section id="cart-track-section">
    <ul class="cart-track-list">
      <li id="1">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Title</p>
          <p>Artist</p>
          <p>price</p>
      </li>
      <li id="1">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Title</p>
          <p>Artist</p>
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
      </li>
      <li id="1">
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
          <p>Title</p>
          <p>Artist</p>
          <img src="<?= ROOT_DIR . '/images/next.png' ?>" alt="show more" />
      </li>
    </ul>
  </section> -->
</div>