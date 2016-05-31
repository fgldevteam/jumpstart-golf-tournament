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
$fgl_employee_count = $_POST['fgl_employee_count'];
if($fgl_employee_count < 4) {
	$golfer_fname = $_POST['golfer_fname'];
	$golfer_lname = $_POST['golfer_lname'];
	$golfer_handicap = $_POST['golfer_handicap'];
	$golfer_email = $_POST['golfer_email'];
	$golfer_phone = $_POST['golfer_phone'];
	$golfer_shirt_size = $_POST['golfer_shirt_size'];
	// $golfer_shoe_size = $_POST['golfer_shoe_size'];	
}


//insert parent record
$q = "INSERT INTO teams (uid, team_name, team_captain_fname, team_captain_lname, include_fgl_employee, fgl_employee_count) VALUES(
	'".$uid."', 
	'".$team_name."', 
	'".$team_captain_fname."', 
	'".$team_captain_lname."', 
	'".$include_fgl_employee."',
	'".$fgl_employee_count."'	 
)";
	 
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));

//kids records
if($fgl_employee_count < 4) {
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
}


?>