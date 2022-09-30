<?php

//start session on web page
session_start();

//config.php

//Include Google Client Library for PHP autoload file
require_once 'vendor/autoload.php';

//Make object of Google API Client for call Google API
$google_client = new Google_Client();

//Set the OAuth 2.0 Client ID
$google_client->setClientId('24509122594-ij2qqchvikq32eemvqomc8k3g56mr8ae.apps.googleusercontent.com');

//Set the OAuth 2.0 Client Secret key
$google_client->setClientSecret('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');

//Set the OAuth 2.0 Redirect URI
$google_client->setRedirectUri('http://localhost/registeration-login-system-master/indexg.php');

// to get the email and profile 
$google_client->addScope('email');

$google_client->addScope('profile');

?> 