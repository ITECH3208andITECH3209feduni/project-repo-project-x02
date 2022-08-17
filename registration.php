
<!doctype html>
<html lang="en">
<head>
<script src="//code.tidio.co/oubgdcybmrhqm1jtyvuk0t0p0hf8zipa.js" async></script>
<title>Register</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://preview.colorlib.com/theme/bootstrap/login-form-20/css/A.style.css.pagespeed.cf.eQk9-CoeFP.css">
<script nonce="d2227435-32b8-483d-8cde-413dd11ae144">(function(w,d){!function(a,e,t,r){a.zarazData=a.zarazData||{};a.zarazData.executed=[];a.zaraz={deferred:[]};a.zaraz.q=[];a.zaraz._f=function(e){return function(){var t=Array.prototype.slice.call(arguments);a.zaraz.q.push({m:e,a:t})}};for(const e of["track","set","ecommerce","debug"])a.zaraz[e]=a.zaraz._f(e);a.zaraz.init=()=>{var t=e.getElementsByTagName(r)[0],z=e.createElement(r),n=e.getElementsByTagName("title")[0];n&&(a.zarazData.t=e.getElementsByTagName("title")[0].text);a.zarazData.x=Math.random();a.zarazData.w=a.screen.width;a.zarazData.h=a.screen.height;a.zarazData.j=a.innerHeight;a.zarazData.e=a.innerWidth;a.zarazData.l=a.location.href;a.zarazData.r=e.referrer;a.zarazData.k=a.screen.colorDepth;a.zarazData.n=e.characterSet;a.zarazData.o=(new Date).getTimezoneOffset();a.zarazData.q=[];for(;a.zaraz.q.length;){const e=a.zaraz.q.shift();a.zarazData.q.push(e)}z.defer=!0;for(const e of[localStorage,sessionStorage])Object.keys(e||{}).filter((a=>a.startsWith("_zaraz_"))).forEach((t=>{try{a.zarazData["z_"+t.slice(7)]=JSON.parse(e.getItem(t))}catch{a.zarazData["z_"+t.slice(7)]=e.getItem(t)}}));z.referrerPolicy="origin";z.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(a.zarazData)));t.parentNode.insertBefore(z,t)};["complete","interactive"].includes(e.readyState)?zaraz.init():a.addEventListener("DOMContentLoaded",zaraz.init)}(w,d,0,"script");})(window,document);</script></head>
<body class="img js-fullheight" style="background-image:url(https://www.dataintensity.com/assets/images/pp-backgrounds/services-professional-services-page-background.jpg)">
<section class="ftco-section">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-6 text-center mb-5">
<h2 class="heading-section" style="margin-top: -50px">REGISTERATION</h2>
</div>
</div>
<div class="row justify-content-center">
<div class="col-md-6 col-lg-4">
<div class="login-wrap p-0">
<!------
<h3 class="mb-4 text-center" style="margin-top: -40px">REGISTER TO CONTINUE</h3>
<!--------------->




<?php

    include('db.php');	
$data = $_POST;   
    if (isset($_REQUEST['username'])) {       
        $username = stripslashes($_REQUEST['username']);
        $username = mysqli_real_escape_string($con, $_POST['username']);
        $email    = stripslashes($_REQUEST['email']);
        $email    = mysqli_real_escape_string($con, $_POST['email']);
		$occupation = stripslashes($_REQUEST['occupation']);
        $occupation = mysqli_real_escape_string($con, $_POST['occupation']);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con, $_POST['password']);
		$confirm_password = stripslashes($_REQUEST['confirm_password']);
        $confirm_password = mysqli_real_escape_string($con, $_POST['confirm_password']);
		$usernamequery = "select * FROM users WHERE username ='$username'";
		$query = mysqli_query($con,$usernamequery);
		$usernamecount = mysqli_num_rows($query);
		$emailquery = "select * FROM users WHERE email ='$email'";
		$query = mysqli_query($con,$emailquery);
		$emailcount = mysqli_num_rows($query);
		
		if($emailcount>0) {
			echo ("<script LANGUAGE='JavaScript'>
    window.alert('Email address already exists. Please try again!');
    window.location.href='http://localhost/registeration-login-system-master/registration.php';
    </script>");
		}
		else {
			if($usernamecount>0) {
			echo ("<script LANGUAGE='JavaScript'>
    window.alert('Username already exists. Please try again!');
    window.location.href='http://localhost/registeration-login-system-master/registration.php';
    </script>");
		}
			else {	
				
			if ($data['password'] !== $data['confirm_password']) {
    
            echo ("<script LANGUAGE='JavaScript'>
    window.alert('Password and confirm password must match!');
    window.location.href='http://localhost/registeration-login-system-master/registration.php';
    </script>");
	}
	else {
        $create_datetime = date("Y-m-d h:i:s");
        $query    = "INSERT into `users` (username, password, occupation, email, create_datetime) 
                     VALUES ('$username', '" . md5($password) . "','$occupation', '$email', '$create_datetime')";
        $result   = mysqli_query($con, $query); 
        if ($result) {   
		             echo ("<script LANGUAGE='JavaScript'>
    window.alert('You have successfully registered!');
    window.location.href='http://localhost/registeration-login-system-master/login.php';
    </script>");
        } else {
          
	}}
		}}} else {
		}
?>
<!----------
    <form class="signin-form" method="post" name="login">
        <h1 class="login-title">LOGIN</h1>
        <input type="text" class="login-input" name="username" placeholder="Enter username" autofocus="true"/>
        <input type="password" class="login-input" name="password" placeholder="Enter password" />
        <input type="submit" value="Login" name="submit" class="login-button"/>
        <p class="link">Not a registered user? <a href="registration.php">Register Now</a></p>
        <button type="button" class="login-with-google-btn" onclick="myFunction()"> Sign in with Google</button>  
    </form>
 <!-------->
 
   <form class="signin-form" method="post" action="" style="margin-top: -25px;"> 
<div class="form-group">
<input type="text" class="form-control" name="username" placeholder="Username" required >
</div>
<div class="form-group">
<input type="email" class="form-control" name="email" placeholder="Email Address" required >
</div>


<div class="form-group">
 <select name="occupation"  style="color:black;" class="form-control">
      
        <option style="color:black; " value="student">Student</option>
	    <option style="color:black;" value="teacher">Teacher</option>
        <option style="color:black;" value="engineer">Engineer</option>
        <option style="color:black;" value="doctor">Doctor</option>
        <option style="color:black;" value="ict analyst">ICT Analyst</option>
        <option style="color:black;" value="businessman">Businessman</option>
        <option style="color:black;" value="accountant">Accountant</option>
		
      </select>
 </div>
<div class="form-group">
<input id="password-field" type="password" class="form-control" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
<i class="far fa-eye" id="togglePassword"  style="left: 90%; top: 35%; position: absolute; cursor: pointer;"></i>
</input>
</div>
<script>
const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password-field');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
</script>



<div class="form-group">
<input id="password-field" type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required>
<i class="far fa-eye" id="togglePassword"  style="left: 90%; top: 35%; position: absolute; cursor: pointer;"></i>
</input></div>



<div class="form-group">
<button type="submit" value="Register" name="submit" class="form-control btn btn-primary submit px-3">Sign Up</button>
</div>

</form>
<p class="w-100 text-center">&mdash; Or Sign In Below &mdash;</p>
<div class="form-group">
<button onclick="window.location.href='login.php';" class="form-control btn btn-primary submit px-3">SIGN IN</button>
</div></div>
</div>
</div>
</div>
</section>
<script src="js/jquery.min.js"></script>
<script src="js/popper.js+bootstrap.min.js+main.js.pagespeed.jc.9eD6_Mep8S.js"></script><script>eval(mod_pagespeed_T07FyiNNgg);</script>
<script>eval(mod_pagespeed_zB8NXha7lA);</script>
<script>eval(mod_pagespeed_xfgCyuItiV);</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194" integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw==" data-cf-beacon='{"rayId":"738a7ff039c9a93b","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2022.6.0","si":100}' crossorigin="anonymous"></script>
</body>
</html>