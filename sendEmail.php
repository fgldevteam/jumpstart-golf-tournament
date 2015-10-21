<?php

//connect to DB
$host = "127.0.0.1";
$user = "root";
$pass = "root";
$db = "kidsparty";

$connection = mysqli_connect($host, $user, $pass, $db);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$data = json_decode( $_POST['kiddata'] );

$uid = $data->uid;
$fname = $data->fname;
$lname = $data->lname;
$email = $data->email;
$numberofadults = $data->numberofadults;

//insert parent record
$q = "INSERT INTO parents (uid, first, last, email, numberofadults) VALUES(
	'".$uid."', 
	'".$fname."', 
	'".$lname."', 
	'".$email."', 
	'".$numberofadults."'	 
)";
	 
mysqli_query($connection, $q) or die ("Error in query: $q. ".mysqli_error($connection));

//kids records

$numberofkids = $data->numberofkids;

for($i=1; $i<=$numberofkids; $i++ ){

	// $array[] = $data->{'childname' + $i};
	// $array[] = $data->{'childgender' + $i};
	// $array[] = $data->{'childallergies' + $i};

	$q = "INSERT INTO kids (uid, name, gender, age, allergies) VALUES(
		'".$uid."', 
		'".$data->{'childname' . $i}."', 
		'".$data->{'childgender' . $i}."', 
		'".$data->{'childage' . $i}."', 
		'".$data->{'childallergies' . $i}."'	 
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