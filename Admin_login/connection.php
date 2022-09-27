<?php

$conn = "";

try {
	$servername = "localhost:3306";
	$dbname = "employability";
	$username = "root";
	$password = "";

	$conn = new PDO(
		"mysql:host=$servername; dbname=employability",
		$username, $password
	);
	
$conn->setAttribute(PDO::ATTR_ERRMODE,
					PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
	echo "Connection failed: " . $e->getMessage();
}

?>
