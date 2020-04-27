<?php

    $para = 'pablohermidatrinanes@gmail.com, pablohermida@live.com';
    $asunto = 'Mensaje desde mi web';
    
    // Cuerpo del mensaje del email
    $messageBody = 'Nombre: '.$_POST['name'].'\n';
    $messageBody .= '\n<br/>Email: '.$_POST['email'].'\n';
    $messageBody .= '\n<br/>Mensaje: '.nlbr2($_POST['message']).'\n';

    // Header del email
    $mailHeader = 'From: '.$_POST['email'].'\r\n';
    $mailHeader .= 'Reply-To: '.$_POST['email'].'\r\n';
    $mailHeader .= 'Content-type: text/html; charset=utf-8\r\n';

    // Comando mail
    mail($para, $asunto, $messageBody, $mailHeader) or die('Error al enviar el mail');

    // Header -> Mandamos nuestra aplicación a una localización
    header('Location: https://google.es');


?>