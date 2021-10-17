<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/src/Exception.php';
require 'vendor/phpmailer/src/PHPMailer.php';
//require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPmailer(true);
$mail->CherSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

$mail->setFrom('test@mail', 'TestName');
$mail->addAdress('netitov@gmail.com');
$mail->subject = 'Hi, this test message'

$body = '<h1>Test message header</h1>';

if(trim(!empty($_POST['name']))){
  $body.='<p><strong>Name:</srong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
  $body.='<p><strong>E-mail:</srong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['message']))){
  $body.='<p><strong>Message:</srong> '.$_POST['message'].'</p>';
}

$mail->Body = $body;

if (!$mail->send()) {
  $message = "Error";
} else {
  $message = 'Sent!'
}

$response = ['message => $messsage'];

header('Content-type: application/json');
echo json_encode($response);

?>
