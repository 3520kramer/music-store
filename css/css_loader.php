<?php include_once __DIR__ . '/../utilities/constants.php' ?>

<?php
// First of all send css header
header("Content-type: text/css");

// Array of css files
$css = array(
    'header/header.css',
    'header/searchbar.css',
    'footer/footer.css',
    'tracks/tracks.css',
    'tracks/one-track/one-track.css',
    'albums/one-album/one-album.css'

);

// Prevent a notice
$css_content = file_get_contents('styles.css');

// Loop the css Array
foreach ($css as $css_file) {
    // Load the content of the css file 
    $css_content .= file_get_contents(__DIR__ . "/../src/$css_file");
}

// print the css content
echo $css_content;
?>