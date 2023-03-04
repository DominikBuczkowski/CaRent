<?php


$to = "kontakt@dombuc.civ.pl";

$name = $_POST['name'];
$name = $name . " " . $_POST['lastname'];

$email = $_POST['email'];

$tresc = $_POST['tresc'];

$headers = "From: ". $email;

mail($to, "kontakt-test", "Od: ".$name ."\n". $tresc, $headers)
?>