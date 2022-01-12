<?php
$host ="localhost";
$user = "root";
$password = "";
$dbname = "projek_kasir";

$conn = mysqli_connect($host,$user,$password,
$dbname);

if(!$conn) {
	die("Error in database connection !");
}

?>