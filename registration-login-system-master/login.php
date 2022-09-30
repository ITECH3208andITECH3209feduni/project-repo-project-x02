
<!doctype html>
<html lang="en">
<head>
<script src="//code.tidio.co/oubgdcybmrhqm1jtyvuk0t0p0hf8zipa.js" async></script>
<title>Login</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
<link rel="stylesheet" href="https://preview.colorlib.com/theme/bootstrap/login-form-20/css/A.style.css.pagespeed.cf.eQk9-CoeFP.css">
<script nonce="d2227435-32b8-483d-8cde-413dd11ae144">(function(w,d){!function(a,e,t,r){a.zarazData=a.zarazData||{};a.zarazData.executed=[];a.zaraz={deferred:[]};a.zaraz.q=[];a.zaraz._f=function(e){return function(){var t=Array.prototype.slice.call(arguments);a.zaraz.q.push({m:e,a:t})}};for(const e of["track","set","ecommerce","debug"])a.zaraz[e]=a.zaraz._f(e);a.zaraz.init=()=>{var t=e.getElementsByTagName(r)[0],z=e.createElement(r),n=e.getElementsByTagName("title")[0];n&&(a.zarazData.t=e.getElementsByTagName("title")[0].text);a.zarazData.x=Math.random();a.zarazData.w=a.screen.width;a.zarazData.h=a.screen.height;a.zarazData.j=a.innerHeight;a.zarazData.e=a.innerWidth;a.zarazData.l=a.location.href;a.zarazData.r=e.referrer;a.zarazData.k=a.screen.colorDepth;a.zarazData.n=e.characterSet;a.zarazData.o=(new Date).getTimezoneOffset();a.zarazData.q=[];for(;a.zaraz.q.length;){const e=a.zaraz.q.shift();a.zarazData.q.push(e)}z.defer=!0;for(const e of[localStorage,sessionStorage])Object.keys(e||{}).filter((a=>a.startsWith("_zaraz_"))).forEach((t=>{try{a.zarazData["z_"+t.slice(7)]=JSON.parse(e.getItem(t))}catch{a.zarazData["z_"+t.slice(7)]=e.getItem(t)}}));z.referrerPolicy="origin";z.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(a.zarazData)));t.parentNode.insertBefore(z,t)};["complete","interactive"].includes(e.readyState)?zaraz.init():a.addEventListener("DOMContentLoaded",zaraz.init)}(w,d,0,"script");})(window,document);</script></head>
<body class="img js-fullheight" style="background-image:url(https://www.dataintensity.com/assets/images/pp-backgrounds/services-professional-services-page-background.jpg)">
<section class="ftco-section">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-6 text-center mb-5">
<h2 class="heading-section">LOGIN TO EMPLOYABILITY LIFE</h2>
</div>
</div>
<div class="row justify-content-center">
<div class="col-md-6 col-lg-4">
<div class="login-wrap p-0">
<h3 class="mb-4 text-center" style="margin-top: -30px;">Have an account?</h3>
<!--------------->
<?php
    require('db.php');
    session_start();
    // When form submitted, check and create user session.
    if (isset($_POST['username'])) {
        $username = stripslashes($_REQUEST['username']);    // removes backslashes
        $username = mysqli_real_escape_string($con, $_POST['username']);
        $password = stripslashes($_REQUEST['password']);
        $password = mysqli_real_escape_string($con, $_POST['password']);
        // Check user is exist in the database
        $query    = "SELECT * FROM `users` WHERE username='$username'
                     AND password='" . md5($password) . "'";
        $result = mysqli_query($con, $query) or die(mysql_error());
        $rows = mysqli_num_rows($result);
        if ($rows == 1) {
            $_SESSION['username'] = $username;
            // Redirect to user dashboard page
            header("Location: Home.php");
        } else {
             echo ("<script LANGUAGE='JavaScript'>
    window.alert('Please enter correct credentials!');
    window.location.href='http://localhost/registeration-login-system-master/login.php';
    </script>");
        }
    } else 
	{
	}
		
?>

 
   <form class="signin-form" method="post" name="login">
<div class="form-group">
<input type="text" class="form-control" name="username" placeholder="Username" required >
</div>
<div class="form-group">
<input id="password-field" type="password" class="form-control" name="password" placeholder="Password" required>
<i class="far fa-eye" id="togglePassword"  style="left: 90%; top: 35%; position: absolute; color: black; cursor: pointer;"></i>
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
<button type="submit" value="Login" style="background-color: #FFA600;" name="submit" class="form-control btn btn-primary submit px-3">Sign In</button>
</div>
<div class="form-group d-md-flex">
<div class="w-50">
<label class="checkbox-wrap checkbox-primary">Admin Login -->
<input type="checkbox" target="_blank"  onclick="window.location.href=' http://localhost/registeration-login-system-master/Admin_login/index.php';">
<span class="checkmark"></span>
</label>
</div>
<div class="w-50 text-md-right">
<a href="registration.php" style="color: #fff">Sign Up</a>
</div>
</div>
</form>
<p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
<div class="social d-flex text-center">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<a href="http://localhost/registeration-login-system-master/login_via_google/index.php" class="px-2 py-2 mr-md-1 rounded"><i class="fa fa-google-plus"></i><span class="ion-logo-facebook mr-2"></span> Google</a>
<a href="http://localhost/registeration-login-system-master/index4.php" class="px-2 py-2 ml-md-1 rounded">
<i class="fa fa-linkedin" ></i> <span class="ion-logo-twitter mr-2"></span> LinkedIn</a>
<a href="http://localhost/registeration-login-system-master/index_in.php" class="px-2 py-2 mr-md-1 rounded" style="margin-left: 10px;"><i class="fa fa-twitter"></i><span class="ion-logo-twitter mr-2" ></span> Twitter</a>
</div>
</div>
</div>
</div>
</div>
</section>
</body>
</html>
