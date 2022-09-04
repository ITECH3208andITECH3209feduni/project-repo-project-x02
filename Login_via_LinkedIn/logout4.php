<?php
require_once 'config3.php';
 
try {
    if ($adapter->isConnected()) {
        $adapter->disconnect();
        echo 'Logged out the user';
        echo '<p><a href="index4.php">Login</a></p>';
    }
}
catch( Exception $e ){
    echo $e->getMessage() ;
}