<?php
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$data = $_POST['data'];
$time = $_POST['time'];
$age = $_POST['age'];
$message = $_POST['message'];

header('location: /index.html');

// $send =  "<h2>All Datas</h2> Name: <div>$name</div> <br> Email: <div>$email</div> <br> Number: <div>$number</div> <br> Data: <div>$data</div> <br> Time: <div>$time</div> <br> Age: <div>$age</div> <br> MEssage: <div>$message</div>";

// $to = "vasapanov721@gmail.com";
// $from = $email;

// $headers = "From: $from\r\nReply-to: $from\r\nContent-type: html/plain; charset=utf-8\r\n";

// mail($to, $send, $send, $headers);

//unfortunately function mail() does not work on github pages





