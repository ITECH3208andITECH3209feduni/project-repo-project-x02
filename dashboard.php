<?php
include("auth_session.php");
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Dashboard - Client area</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <div class="form">
	<div class="welcome">
        <p>Welcome <?php echo $_SESSION['username']; ?>!</p>
		</div>
		<div class="logged">
        <p>You have successfully logged in.</p>
		</div>
		<div class="button">
		<p><a href="portals.html">Explore Assessment Portal</p>
		 </div>
		 <div class="button1">
		<p><a href="logout.php">Log Out<p>
          </div>
    </div>
	
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
		width: 400px;
	height: 300px;
	}
	.welcome {
		font-size: 40px;
		font-family: san-serif;
		font-weight: 800px;
		text-align: center;
	
	}
	.logged {
		font-size: 20px;
		font-weight: 600px;
		text-align: center;
		position: relative;
	    margin-top: -30px;
		color: red;
	}
		
.button  {
  padding: 15px 25px;
  height: 20px;
 
  background-color: orange;
  border: none;
  border-radius: 15px;

   margin-top: 40px;
}
.button a {
	
	 font-size: 24px;
 
  cursor: pointer;

  color: #000;
  text-decoration: none;
  margin-top: 80px;
	
}
.button p {
	
  position: relative;
  bottom: 100%;
  left: 15%;
}
.button:hover {background-color: #3e8e41; }

.button:active {
  background-color: #3e8e41;
font-color: white;
  transform: translateX(4px);
}
</style>
<style>
		
.button1  {
  padding: 15px 25px;
  height: 20px;
 
  background-color: orange;
  border: none;
  border-radius: 15px;
 margin-top: 30px;
 
}
.button1 a {
	
	 font-size: 24px;
 
  cursor: pointer;

  color: #000;
  text-decoration: none;
  margin-top: 100px;
	
}
.button1 p {
	
  position: relative;
  bottom: 100%;
  left: 40%;
}
.button1:hover {background-color: #3e8e41; }

.button1:active {
  background-color: #3e8e41;
font-color: white;
  transform: translateX(4px);
}
</style>
</head>
<body>




</body>
</html>
