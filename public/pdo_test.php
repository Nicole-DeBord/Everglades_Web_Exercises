<?php

define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'employees');
define('DB_USER', 'codeup');
define('DB_PASS', 'codeup');

require('db_connect.php');

// If running with good credentials, this should output '127.0.0.1 via TCP/IP' from cmd line:
echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";