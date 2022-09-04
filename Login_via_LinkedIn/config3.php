<?php
require_once 'vendor/autoload.php';
 
$config = [
    'callback' => 'http://localhost/registeration-login-system-master/index4.php',
    'keys'     => [
                    'id' => '864o0nwa2vofdy',
                    'secret' => 'iSpBFzVEjkHwWVbO'
                ],
    'scope'    => 'r_liteprofile r_emailaddress',
];
 
$adapter = new Hybridauth\Provider\LinkedIn( $config );