<?php

// //connect to DB
// $host = "127.0.0.1";
// $user = "root";
// $pass = "";
// $db = "leadership";

// $connection = mysqli_connect($host, $user, $pass, $db);

// if (mysqli_connect_errno()) {
//     printf("Connect failed: %s\n", mysqli_connect_error());
//     exit();
// }


// //insert registration
// $q = "INSERT INTO registrations (first, last, email, phone, office, diet, bus, activity_1, activity_2) VALUES(
// 	 '".$_POST['fname']."', 
// 	'".$_POST['lname']."', 
// 	'".$_POST['email']."', 
// 	'".$_POST['phone']."', 
// 	'".$_POST['office']."',
// 	'".$_POST['diet']."',
// 	'".$_POST['bus']."',
// 	'".$_POST['activity_1']."',
// 	'".$_POST['activity_2']."'
// 	 )";
	 
// mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));
// mysql_query($q) or die ("Error in query: $q. ".mysql_error());

$data = json_decode( $_POST['kiddata'] );

$childname1 = $data->childname1;

$childgender1 = $data->childgender1;
$childage1 = $data->childage1;
$childallergies1 = $data->childallergies1;
$childname2 = $data->childname2;
$childgender2 = $data->childgender2;
$childage2 = $data->childage2;
$childallergies2 = $data->childallergies2;
$childname3 = $data->childname3;
$childgender3 = $data->childgender3;
$childage3 = $data->childage3;
$childallergies3 = $data->childallergies3;
$uid = $data->uid;
$fname = $data->fname;
$lname = $data->lname;
$email = $data->email;
$numberofadults = $data->numberofadults;
$numberofkids = $data->numberofkids;


$file = 'log.txt';

// Open the file to get existing content
$current = file_get_contents($file);

// $current = $data;
$current .= "\n\n" . time();
$current .= "\nLast error: " . json_last_error();
$current .= "\nLast error message: " . json_last_error_msg();
$current .= "\n---------------------------------------------------\n";
$current .= "childname1" . $childname1 . "\n";
$current .= "childgender1" . $childgender1 . "\n";
$current .= "childage1" . $childage1 . "\n";
$current .= "childallergies1" . $childallergies1 . "\n";
$current .= "childname2" . $childname2 . "\n";
$current .= "childgender2" . $childgender2 . "\n";
$current .= "childage2" . $childage2 . "\n";
$current .= "childallergies2" . $childallergies2 . "\n";
$current .= "childname3" . $childname3 . "\n";
$current .= "childgender3" . $childgender3 . "\n";
$current .= "childage3" . $childage3 . "\n";
$current .= "childallergies3" . $childallergies3 . "\n";
$current .= "uid" . $uid . "\n";
$current .= "fname" . $fname . "\n";
$current .= "lname" . $lname . "\n";
$current .= "email" . $email . "\n";
$current .= "numberofadults" . $numberofadults . "\n";
$current .= "numberofkids" . $numberofkids . "\n";


foreach($_POST as $key => $value){

	$current .= $key . ": " . $value . "\n\n";
}

file_put_contents($file, $current);




// Write the contents back to the file


?>