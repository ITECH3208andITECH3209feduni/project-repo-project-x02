<?php
require_once 'config3.php';

try {
    $adapter->authenticate();
    echo ("<script LANGUAGE='JavaScript'>
    window.alert('You have successfully logged in using your LinkedIn Account!');
    window.location.href='http://localhost/registeration-login-system-master/portals.html';
    </script>");
    
}
catch( Exception $e ){
    echo $e->getMessage() ;
}