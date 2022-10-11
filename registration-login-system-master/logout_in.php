<?php
require_once 'config_in.php';
  
try {
    if ($adapter->isConnected()) {
        $adapter->disconnect();
        echo 'Logged out the user';
        echo '<p><a href="index_in.php">Login</a></p>';
    }
}
catch( Exception $e ){
    echo $e->getMessage() ;
}