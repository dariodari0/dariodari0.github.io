<?php
// Get Data	
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$message = strip_tags($_POST['message']);

// Send Message
mail( "dmarkowicz@outlook.com", "A mail from CV page!",
"Name: $name\nEmail: $email\n\nMessage: $message\n",
"From: dariodari0.github.io <website>" );

// Back to previous page
header("location:javascript://history.go(-1)");
?>
