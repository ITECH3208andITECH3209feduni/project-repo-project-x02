<?php
// Include configuration file
require_once 'config1.php';

// Include User class
require_once 'User.class.php';

$authUrl = $output = '';

// If user already verified 
if(isset($_SESSION['oauth_status']) && $_SESSION['oauth_status'] == 'verified' && !empty($_SESSION['userData'])){
    // Retrieve user's profile data from session
    $userData = $_SESSION['userData'];
    
    // Prepare output to show LinkedIn profile data
    if(!empty($userData)){
        $output  = '<h2>LinkedIn Profile Details</h2>';
        $output .= '<div class="ac-data">';
        $output .= '<img src="'.$userData['picture'].'"/>';
        $output .= '<p><b>LinkedIn ID:</b> '.$userData['oauth_uid'].'</p>';
        $output .= '<p><b>Name:</b> '.$userData['first_name'].' '.$userData['last_name'].'</p>';
        $output .= '<p><b>Email:</b> '.$userData['email'].'</p>';
        $output .= '<p><b>Logged in with:</b> LinkedIn'.'</p>';
        $output .= '<p><b>Profile Link:</b> <a href="'.$userData['link'].'" target="_blank">Click to visit LinkedIn page</a></p>';
        $output .= '<p><b>Logout from</b> <a href="logout2.php">LinkedIn</a></p>';
        $output .= '</div>';
    }
}elseif((isset($_GET["oauth_init"]) && $_GET["oauth_init"] == 1) || (isset($_GET['oauth_token']) && isset($_GET['oauth_verifier'])) || (isset($_GET['code']) && isset($_GET['state']))){
    $client = new oauth_client_class;
    
    $client->client_id = LIN_CLIENT_ID;
    $client->client_secret = LIN_CLIENT_SECRET;
    $client->redirect_uri = LIN_REDIRECT_URL;
    $client->scope = LIN_SCOPE;
    $client->debug = 1;
    $client->debug_http = 1;
    $application_line = __LINE__;
    
    if(strlen($client->client_id) == 0 || strlen($client->client_secret) == 0){
        die('Please go to LinkedIn Apps page https://www.linkedin.com/secure/developer?newapp= , '.
            'create an application, and in the line '.$application_line.
            ' set the client_id to Consumer key and client_secret with Consumer secret. '.
            'The Callback URL must be '.$client->redirect_uri.'. Make sure you enable the '.
            'necessary permissions to execute the API calls your application needs.');
    }
    
    // If authentication returns success
    if($success = $client->Initialize()){
        if(($success = $client->Process())){
            if(strlen($client->authorization_error)){
                $client->error = $client->authorization_error;
                $success = false;
            }elseif(strlen($client->access_token)){
                $success = $client->CallAPI(
                    'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))', 
                    'GET', array(
                        'format'=>'json'
                    ), array('FailOnAccessError'=>true), $userInfo);
                $emailRes = $client->CallAPI(
                    'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', 
                    'GET', array(
                        'format'=>'json'
                    ), array('FailOnAccessError'=>true), $userEmail);
            }
        }
        $success = $client->Finalize($success);
    }
    
    if($client->exit) exit;
    
    if(strlen($client->authorization_error)){
        $client->error = $client->authorization_error;
        $success = false;
    }
    
    if($success){
        // Initialize User class
        $user = new User();
        
        // Getting user's profile data
        $inUserData = array();
        $inUserData['oauth_uid']  = !empty($userInfo->id)?$userInfo->id:'';
        $inUserData['first_name'] = !empty($userInfo->firstName->localized->en_US)?$userInfo->firstName->localized->en_US:'';
        $inUserData['last_name']  = !empty($userInfo->lastName->localized->en_US)?$userInfo->lastName->localized->en_US:'';
        $inUserData['email']      = !empty($userEmail->elements[0]->{'handle~'}->emailAddress)?$userEmail->elements[0]->{'handle~'}->emailAddress:'';
        $inUserData['picture']    = !empty($userInfo->profilePicture->{'displayImage~'}->elements[0]->identifiers[0]->identifier)?$userInfo->profilePicture->{'displayImage~'}->elements[0]->identifiers[0]->identifier:'';
        $inUserData['link']       = 'https://www.linkedin.com/';

        // Insert or update user data to the database
        $inUserData['oauth_provider'] = 'linkedin';
        $userData = $user->checkUser($inUserData);
        
        //Storing user data into session
        $_SESSION['userData'] = $userData;
        $_SESSION['oauth_status'] = 'verified';
        
        //Redirect the user back to the same page
        header('Location: ./');
    }else{
         $output = '<h3 style="color:red">Error connecting to LinkedIn! try again later!</h3><p>'.HtmlSpecialChars($client->error).'</p>';
    }
}elseif(isset($_GET["oauth_problem"]) && $_GET["oauth_problem"] <> ""){
    $output = '<h3 style="color:red">'.$_GET["oauth_problem"].'</h3>';
}else{
    $authUrl = '?oauth_init=1';
    
    // Render LinkedIn login button
    $output = '<a href="?oauth_init=1"><img src="images/linkedin-sign-in-btn.png"></a>';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login with LinkedIn using PHP by CodexWorld</title>
    
    <!-- Include stylesheet file -->
    <link rel="stylesheet" href="css/style.css"/>
</head>
<body>
<div class="container">
    <div class="in-box">
        <!-- Display login button / profile information -->
        <?php echo $output; ?>
    </div>
</div>
</body>
</html>