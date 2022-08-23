<?php

//index.php

//Include Configuration File
include('config.php');

$login_button = '';


if(isset($_GET["code"]))
{

 $token = $google_client->fetchAccessTokenWithAuthCode($_GET["code"]);


 if(!isset($token['error']))
 {
 
  $google_client->setAccessToken($token['access_token']);

 
  $_SESSION['access_token'] = $token['access_token'];


  $google_service = new Google_Service_Oauth2($google_client);

 
  $data = $google_service->userinfo->get();

 
  if(!empty($data['given_name']))
  {
   $_SESSION['user_first_name'] = $data['given_name'];
  }

  if(!empty($data['family_name']))
  {
   $_SESSION['user_last_name'] = $data['family_name'];
  }

  if(!empty($data['email']))
  {
   $_SESSION['user_email_address'] = $data['email'];
  }

  if(!empty($data['gender']))
  {
   $_SESSION['user_gender'] = $data['gender'];
  }

  if(!empty($data['picture']))
  {
   $_SESSION['user_image'] = $data['picture'];
  }
 }
}


if(!isset($_SESSION['access_token']))
{

 $login_button = '<a href="'.$google_client->createAuthUrl().'">Login With Google</a>';
}

?>
<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>PHP Login using Google Account</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <link   rel="stylesheet" 
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" 
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
        crossorigin="anonymous">

   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
 
 </head>
 <body>
 
  <div class="container" style="border: 1px solid black; margin-top: 2%; width=500px;">
   <br />
   <h2 align="center">AN INITIATIVE BY EMPLOYABILITY LIFE</h2>
     <p align="center" style="margin-bottom: 30px;">Please review your profile information after logging in with your Google Account credentials.</h2>
   <br />
   
   <div class="panel panel-default" style="margin-top: -20px;">
   <?php
   if($login_button == '')
   {
    echo '<div class="panel-heading">Welcome  '.$_SESSION['user_first_name'].' '.$_SESSION['user_last_name'].'</div><div class="panel-body">';
    echo '<img src="'.$_SESSION["user_image"].'" class="img-responsive img-circle img-thumbnail" style="display: block;  margin-left: auto;  margin-right: auto; margin-top: 1%; width: 20%; border: 2px solid black;" />';
    echo '<h3 style="text-align: center; text-decoration: underline;"><b>Name :</b> '.$_SESSION['user_first_name'].' '.$_SESSION['user_last_name'].'</h3>';
    echo '<h3 style="text-align: center; text-decoration: underline;"><b>Email :</b> '.$_SESSION['user_email_address'].'</h3>';
    echo '<h3 style="margin-left: 44%; padding: 10px; background: black; width: 150px; "><a href="logout1.php" style="color: white;  margin-left: 25px; background: black;  text-decoration: none; font-size: 22px; ">Logout</a></h3></div>';
    echo '<h3 style="margin-left: 36.5%; padding: 10px; background: black; width: 315px; "><a href="portals.html" style="color: white;  margin-left: 20px; background: black;  text-decoration: none; font-size: 22px; ">Explore assessment portal</a></h3></div>';
   
   echo ("<script LANGUAGE='JavaScript'>
    window.alert('You have successfully logged in using your Google Account!');
       </script>");
	  
   }
   else
   {
    echo '<div style="text-align: center; text-color: white; margin-bottom: 10px; margin-left: 42%; padding: 5px; width: 200px; background: red; font-size: 22px;" >'.$login_button . '</div>';
   }
   ?>
   <style>
   .panel-heading {
	   background: red;
	   font-size: 24px;
	   text-align: center;
	   color: white;
   }
   </style>
   </div>
  </div>
 </body>
</html>
