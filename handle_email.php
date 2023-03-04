<?php

$receiver = "kontakt@dombuc.civ.pl";

$sender = $_POST['email'];

$tresc = $_POST['tresc'];


if ($_POST['anon_check']) {
    $name = 'użytkowniku';
}
else {
    $name = $_POST['name'];
    $name = $name . " " . $_POST['lastname'];
}



$tresc_r = '<h1>Witaj '.$name.'!</h1> <br><br>
<h2>Dziękujemy za kontakt z CaRent</h2> <br>
Treść twojej wiadomości: <br><br>
'.$tresc.'
';


$tresc_do_wyslania = '<!DOCTYPE html PUBLIC<html><head><meta http-equiv="Content-Type" content="text/html; charset="utf-8">
<style>
    body {
        background-color: #3d3d3d;
        color: white;
    }
</style>
</head><body style="font-size: 12pt; font-family: Arial;">
<span>';

$tresc_do_wyslania = $tresc_do_wyslania.$tresc_r;

$tresc_do_wyslania = $tresc_do_wyslania.'</span></body></html>';


$headers_receiver = "From: ". $receiver;

$headers_sender = "From: ". $email;


// mail($to, "kontakt-test", "Od: ".$name ."\n". $tresc, $headers)
imap_mail($receiver, "Kontakt CaRent", $tresc_do_wyslania, "Content-type: text/html; charset=utf-8");

echo $tresc_r;


?>