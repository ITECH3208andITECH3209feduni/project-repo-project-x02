<?php

include_once('connection.php');

function test_input($data) {
	
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	
	$username = test_input($_POST["username"]);
	$password = test_input($_POST["password"]);
	$stmt = $conn->prepare("SELECT * FROM adminlogin");
	$stmt->execute();
	$users = $stmt->fetchAll();
	
	foreach($users as $user) {
		
		if(($user['username'] == $username) &&
			($user['password'] == $password)) {

                echo ("<script LANGUAGE='JavaScript'>
                window.alert('You have successfully been logged into admin portal!');
                window.location.href=' http://localhost/registeration-login-system-master/htmlcssjs-withadmin/admin.html';
                </script>");
		}
		else {
            echo ("<script LANGUAGE='JavaScript'>
            window.alert('Please enter correct admin credentials!');
            window.location.href='http://localhost/registeration-login-system-master/Admin_login/index.php';
            </script>");
		}
	}
}

?>
