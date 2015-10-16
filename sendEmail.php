<?php

//connect to DB
$host = "127.0.0.1";
$user = "root";
$pass = "";
$db = "leadership";

$connection = mysqli_connect($host, $user, $pass, $db);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

//insert registration
$q = "INSERT INTO registrations (first, last, email, phone, office, diet, bus, activity_1, activity_2) VALUES(
	 '".$_POST['fname']."', 
	'".$_POST['lname']."', 
	'".$_POST['email']."', 
	'".$_POST['phone']."', 
	'".$_POST['office']."',
	'".$_POST['diet']."',
	'".$_POST['bus']."',
	'".$_POST['activity_1']."',
	'".$_POST['activity_2']."'
	 )";
	 
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));
mysql_query($q) or die ("Error in query: $q. ".mysql_error());


?>