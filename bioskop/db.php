<?php
/*if (!session_id()) {
	# code...
	session_start();
}*/

$host="localhost";
$username="id20720464_vrticket";
$password="VRTIC,kelompok5";
$db_name="id20720464_db_movies";
// Create connection
$db = new mysqli($host, $username, $password,$db_name);
// Check connection
if ($db->connect_error) {
	die("Connection failed: " . $db->connect_error);
} else{

}
?>
