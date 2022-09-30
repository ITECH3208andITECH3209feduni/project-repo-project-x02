<?php
require_once 'config_in.php';

try {
    $adapter ->authenticate();
    $userprofile = $adapter ->getUserProfile();
    echo "<pre>";print_r($userprofile);echo "</pre>";
    echo '<a href= "logout_in.php">Logout</a>';
}
catch( Exception $e){
    echo $e ->getMessage();
}