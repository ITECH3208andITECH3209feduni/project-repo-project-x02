<DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>LOGIN</title>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>

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
body {
    background-image: url('https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
}
.form {
	width: 450px;
	
}
</style>
<?php
    require('db.php');
    session_start();
    // When form submitted, check and create user session.
    if (isset($_POST['username'])) {
        $username = stripslashes($_REQUEST['username']);    // removes backslashes
        $username = mysqli_real_escape_string($con, $username);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con, $password);
        // Check user is exist in the database
        $query    = "SELECT * FROM `users` WHERE username='$username'
                     AND password='" . md5($password) . "'";
        $result = mysqli_query($con, $query) or die(mysql_error());
        $rows = mysqli_num_rows($result);
        if ($rows == 1) {
            $_SESSION['username'] = $username;
            // Redirect to user dashboard page
            header("Location: dashboard.php");
        } else {
            echo "<div class='form'>
                  <h3>Incorrect Username/password.</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a> again.</p>
                  </div>";
        }
    } else {
?>
    <form class="form" method="post" name="login">
        <h1 class="login-title">LOGIN</h1>
        <input type="text" class="login-input" name="username" placeholder="Enter username" autofocus="true"/>
        <input type="password" class="login-input" name="password" placeholder="Enter password"/>
        <input type="submit" value="Login" name="submit" class="login-button"/>
        <p class="link">Not a registered user? <a href="registration.php">Register Now</a></p>
  </form>
<?php
    }
?>
</body>
</html>
