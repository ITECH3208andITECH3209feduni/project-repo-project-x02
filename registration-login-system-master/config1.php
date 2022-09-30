<?php
/*
 * Basic Site Settings and API Configuration
 */

// Database configuration
define('localhost', 'MySQL_Database_Host');
define('root', 'MySQL_Database_Username');
define('', 'MySQL_Database_Password');
define('employability', 'MySQL_Database_Name');
define('users1', 'users');

// LinkedIn API configuration
define('LIN_CLIENT_ID', '8632lfjvso9hsu');
define('LIN_CLIENT_SECRET', 'YTim7bS6qUEcLmsD');
define('LIN_REDIRECT_URL', 'http://localhost/registeration-login-system-master/portals.html');
define('LIN_SCOPE', 'r_liteprofile r_emailaddress'); //API permissions

// Start session
if(!session_id()){
    session_start();
}
