<?php
require_once 'vendor/autoload.php';
  
$config = [
    'callback' => 'http://localhost/registeration-login-system-master/portals.html',
    'keys'     => ['key' => 'P2ZwPl4801y51J6WTlS7FZR65', 'secret' => '5TS6TKQeHNdF3g6piqUWCtkERXltL6GG77UyLKVrhTWOKx2w4i'],
    'authorize' => true
];
  
$adapter = new Hybridauth\Provider\Twitter( $config );