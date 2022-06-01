<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>SIGN UP</title>
    <link rel="stylesheet" href="style.css"/>
	
</head>
<body>



<?php
    require('db.php');	
$data = $_POST;   
    if (isset($_REQUEST['username'])) {       
        $username = stripslashes($_REQUEST['username']);
        $username = mysqli_real_escape_string($con, $username);
        $email    = stripslashes($_REQUEST['email']);
        $email    = mysqli_real_escape_string($con, $email);
		$occupation = stripslashes($_REQUEST['occupation']);
        $occupation = mysqli_real_escape_string($con, $occupation);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con, $password);
		$confirm_password = stripslashes($_REQUEST['confirm_password']);
        $confirm_password = mysqli_real_escape_string($con, $confirm_password);
		if ($data['password'] !== $data['confirm_password']) {
   die('Password and Confirm password should match!');}
        $create_datetime = date("Y-m-d H:i:s");
        $query    = "INSERT into `users` (username, password, occupation, email, create_datetime) 
                     VALUES ('$username', '" . md5($password) . "','$occupation', '$email', '$create_datetime')";
        $result   = mysqli_query($con, $query); 
        if ($result) {   
		             echo "<div class='form'>
                  <h3>You have successfully signed up!</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a></p>
                  </div>";
        } else {
            echo "<div class='form'>
                  <h3>Please enter correct crediantials!</h3><br/>
                  <p class='link'>Click here to <a href='registration.php'>registration</a> again.</p>
                  </div>";
        }
    } else {
?>
    <form class="form" action="" method="post">
        <h1 class="signup">SIGN UP</h1>
        <input type="text" class="login-input" name="username" placeholder="Username" required >
        <input type="email" class="login-input" name="email" placeholder="Email Address" required>
        <input type="text" class="login-input" name="occupation" placeholder="Occupation" required>
        <input type="password" class="login-input" name="password" placeholder="Password" required>
		<input type="password" class="login-input" name="confirm_password"  placeholder="Confirm Password" required>
        <input type="submit" name="submit" value="Register" class="login-button">
        <p class="link">Already a registered user? <a href="login.php">Login</a></p>
    </form>
<?php
    }
?>
<!-------------This is the best Language translator---------->

<div id="google_translate_element"></div>

<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
</script>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<!--------ends here; the translator-------->

<style>
 @media only screen and (max-device-width: 1600px) {

        
    #google_translate_element {
     
  position: fixed;
  bottom: 2px;
  right: 7px;
  z-index: 99;
  font-size: 14px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px;
  border-radius: 2px;
}

}
.link {
    color: #666;
    font-size: 15px;
    text-align: center;
    margin-bottom: 0px;
}
.link a {
    color: #666;
	font-size: 17px;
}
body {
    background-image: url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
}
.form{
	width: 400px;
	font-size: 25px;
	
	border-radius: 0px;
}
.signup {
	  color: #666;
    margin: 0px auto 25px;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
	
	}

</style>
</body>
</html>
