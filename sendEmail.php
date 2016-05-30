<?php

//connect to DB
$host = "127.0.0.1";
$user = "root";
$pass = "";
$db = "jumpstart-golf-tournament";

// var_dump($_POST);           

$connection = mysqli_connect($host, $user, $pass, $db);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}


$uid = $_POST['uidVal'];
$team_name = preg_replace('/[^A-Za-z0-9\-\s]/', '', $_POST['teamName']);
$team_captain_fname = preg_replace('/[^A-Za-z0-9\-\s]/', '', $_POST['captainFname']);
$team_captain_lname = preg_replace('/[^A-Za-z0-9\-\s]/', '', $_POST['captainLname']);
$include_fgl_employee = $_POST['fgl_employee_requested'];
$fgl_employee_undecided = $_POST['fgl_employee_random_choose'];
$golfer_fname = $_POST['golfer_fname'];
$golfer_lname = $_POST['golfer_lname'];
$golfer_handicap = $_POST['golfer_handicap'];
$golfer_email = $_POST['golfer_email'];
$golfer_phone = $_POST['golfer_phone'];
$golfer_shirt_size = $_POST['golfer_shirt_size'];
// $golfer_shoe_size = $_POST['golfer_shoe_size'];

//insert parent record
$q = "INSERT INTO teams (uid, team_name, team_captain_fname, team_captain_lname, include_fgl_employee, fgl_employee_undecided) VALUES(
	'".$uid."', 
	'".$team_name."', 
	'".$team_captain_fname."', 
	'".$team_captain_lname."', 
	'".$include_fgl_employee."',
	'".$fgl_employee_undecided."'	 
)";
	 
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));

//kids records

$numberofmembers = count($golfer_fname);

for($i=0; $i<$numberofmembers; $i++ ){


	$q = "INSERT INTO team_members (uid, firstname, lastname, handicap, email, phone, shirt_size) VALUES(
		'".$uid."', 
		'".preg_replace('/[^A-Za-z0-9\-\s]/', '', $golfer_fname[$i])."', 
		'".preg_replace('/[^A-Za-z0-9\-\s]/', '', $golfer_lname[$i])."', 
		'".$golfer_handicap[$i]."', 
		'".$golfer_email[$i]."',
		'".$golfer_phone[$i]."',
		'".$golfer_shirt_size[$i]."'
	)";

	mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));

}


// $file = 'log.txt';

// // Open the file to get existing content
// $current = file_get_contents($file);

// // $current = $data;
// $current .= "\n\n" . time();
// $current .= "\nLast error: " . json_last_error();
// $current .= "\nLast error message: " . json_last_error_msg();
// $current .= "\n---------------------------------------------------\n";
// $current .= "childname1" . $childname1 . "\n";
// $current .= "childgender1" . $childgender1 . "\n";
// $current .= "childage1" . $childage1 . "\n";
// $current .= "childallergies1" . $childallergies1 . "\n";
// $current .= "childname2" . $childname2 . "\n";
// $current .= "childgender2" . $childgender2 . "\n";
// $current .= "childage2" . $childage2 . "\n";
// $current .= "childallergies2" . $childallergies2 . "\n";
// $current .= "childname3" . $childname3 . "\n";
// $current .= "childgender3" . $childgender3 . "\n";
// $current .= "childage3" . $childage3 . "\n";
// $current .= "childallergies3" . $childallergies3 . "\n";
// $current .= "uid" . $uid . "\n";
// $current .= "fname" . $fname . "\n";
// $current .= "lname" . $lname . "\n";
// $current .= "email" . $email . "\n";
// $current .= "numberofadults" . $numberofadults . "\n";
// $current .= "numberofkids" . $numberofkids . "\n";


// foreach($_POST as $key => $value){

// 	$current .= $key . ": " . $value . "\n\n";
// }

// file_put_contents($file, $current);




// Write the contents back to the file


?>