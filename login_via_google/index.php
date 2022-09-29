<?php
//Include GP config file && User class
include_once 'gpConfig.php';
include_once 'User.php';

if(isset($_GET['code'])){
	$gClient->authenticate($_GET['code']);
	$_SESSION['token'] = $gClient->getAccessToken();
	header('Location: ' . filter_var($redirectURL, FILTER_SANITIZE_URL));
}

if (isset($_SESSION['token'])) {
	$gClient->setAccessToken($_SESSION['token']);
}

if ($gClient->getAccessToken()) {
	//Get user profile data from google
	$gpUserProfile = $google_oauthV2->userinfo->get();
	
	//Initialize User class
	$user = new User();
	
	//Insert or update user data to the database
   
    $gpUserData = array(
        'oauth_provider'=> 'google',
        'oauth_uid'     => isset($gpUserProfile['id']) ? $gpUserProfile['id'] : '',
        'first_name'    => isset($gpUserProfile['given_name']) ? $gpUserProfile['given_name'] : '',
        'last_name'     => isset($gpUserProfile['family_name']) ? $gpUserProfile['family_name'] : '',
        'email'         => isset($gpUserProfile['email']) ? $gpUserProfile['email'] : '',
        'gender'        => isset($gpUserProfile['gender']) ? $gpUserProfile['gender'] : '',
        'locale'        => isset($gpUserProfile['locale']) ? $gpUserProfile['locale'] : '',
        'picture'       => isset($gpUserProfile['picture']) ? $gpUserProfile['picture'] : '',
        'link'          => isset($gpUserProfile['link']) ? $gpUserProfile['link'] : ''
    );
    $userData = $user->checkUser($gpUserData);
	
	//Storing user data into session
	$_SESSION['userData'] = $userData;
	
	//Render facebook profile data
    
}else {
	$authUrl = $gClient->createAuthUrl();
	$output = '<a style="text-decoration: none" href="'.filter_var($authUrl, FILTER_SANITIZE_URL).'"><h2 style="text-align: center; text-decoration: none; margin-top: 100px;" >AN INITIATIVE BY EMPLOYABILITY LIFE</h2><p style="text-align: center; color: black; text-decoration: none;">Please click the below button to login with your Google account and review the information after logging information.</p><button class="btn btn-info" style="position: absolute; left: 45%; top: 30%; border-radius:0px; padding: 10px;">Login With Google</button></a>';
}

?>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Login with Google</title>
<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<style type="text/css">
h1{font-family:Arial, Helvetica, sans-serif;color:#999999;}
</style>
</head>
<body>
<div><?php echo isset($output) ? $output : " "; 

if(!empty($userData)){
?>
<div class='container-fluid'>
<h2 style="text-align: center; margin-top: 60px;">USER GOOGLE ACCOUNT INFORMATION</h2>
<p style="text-align: center;">Please review your Google account information below:</p>
    <table class="table table-sm table-bordered table-responsive" style="margin-top: 40px;">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">OAUTH_PRIVIDER</th>
      <th scope="col">OAUTH_UID</th>
      <th scope="col">FIRST_NAME</th>
      <th scope="col">LAST_NAME</th>
      <th scope="col">EMAIL</th>
          <th scope="col">LOCALE</th>
      <th scope="col">PICTURE</th>
      <th scope="col">CREATED</th>
      <th scope="col">MODIFIED</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td style="height: 100px;"><?php echo $userData['id']; ?></td>
      <td><?php echo $userData['oauth_provider']; ?></td>
      <td><?php echo $userData['oauth_uid']; ?></td>
      <td><?php echo $userData['first_name']; ?></td>
      <td><?php echo $userData['last_name']; ?></td>
      <td><?php echo $userData['email']; ?></td>
      <td><?php echo $userData['locale']; ?></td>
      <td><?php echo $userData['picture']; ?></td>
      <td><?php echo $userData['created']; ?></td>
      <td><?php echo $userData['modified']; ?></td>
    </tr>
  </tbody>
</table>
<br/>
<button class="btn btn-info"  onclick="window.location.href='http://localhost/registeration-login-system-master/portals.html';">Go to Assessment Portals</button>
<br/>
<button class="btn btn-info" style="float: right; margin-top: -36px;" onclick="window.location.href='logout.php';">Logout from Google</button>

</div>

<?php

    }else{
       $output = '<h3 style="color:red">Some problem occurred, please try again</h3>';
    }




?>
    



</div>
</body>
</html>