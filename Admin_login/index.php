
<!doctype html>
<html lang="en"  style="zoom: 125.6%;">
<head>
<title>Login</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
<link rel="stylesheet" href="https://preview.colorlib.com/theme/bootstrap/login-form-20/css/A.style.css.pagespeed.cf.eQk9-CoeFP.css">
<body class="img js-fullheight" style="background-image:url(https://www.dataintensity.com/assets/images/pp-backgrounds/services-professional-services-page-background.jpg);  ">
<section class="ftco-section">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-6 text-center mb-5">
<h2 class="heading-section">WELCOME TO ADMIN PORTAL</h2>
</div>
</div>
<div class="row justify-content-center">
<div class="col-md-6 col-lg-4">
<div class="login-wrap p-0">
<p class="mb-4 text-center" style="margin-top: -50px;">Please fill the following required fields</p>
<!--------------->


 
   <form class="signin-form" method="post" action="validate.php" name="login">
<div class="form-group">
<input type="text" class="form-control" name="username" placeholder="Username" required >
</div>
<div class="form-group">
<input id="password-field" type="password" class="form-control" name="password" placeholder="Password" required>
<i class="far fa-eye" id="togglePassword"  style="left: 90%; color: black; top: 35%; position: absolute; cursor: pointer;"></i>
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

</form>

</div>
</div>
</div>
</div>
</section>
</body>
</html>
