<?php

define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'national_parks_db');
define('DB_USER', 'parks_user');
define('DB_PASS', 'codeup');

require('db_connect.php');

echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";


// id (primary key, auto increment)

// name

// location

// date_established (date) YYYY-MM-DD

// area_in_acres (float)

$parks = [
    ['name' => 'Everglades',   'location' => 'Florida', 'date_established' => '1934-05-30',   'area_in_acres' => '1508537.90'],
    ['name' => 'Big Bend',   'location' => 'Texas', 'date_established' => '1944-07-12',   'area_in_acres' => '801163.21'],
    ['name' => 'Great Sand Dunes',   'location' => 'Colorado', 'date_established' => '2004-09-13',   'area_in_acres' => '42983.74'],
    ['name' => 'Lake Clark',   'location' => 'Alaska', 'date_established' => '1980-12-02',   'area_in_acres' => '2619733.21'],
    ['name' => 'Canyonlands',   'location' => 'Utah', 'date_established' => '1964',   'area_in_acres' => '337597.83'],
    ['name' => 'Katmai',   'location' => 'Alaska', 'date_established' => '1980',   'area_in_acres' => '3674529.68'],
    ['name' => 'North Cascades',   'location' => 'Washington', 'date_established' => '1968-10-02',   'area_in_acres' => '504780.94'],
    ['name' => 'Wind Cave',   'location' => 'South Dakota', 'date_established' => '1903-01-09',   'area_in_acres' => '516142'],
    ['name' => 'Zion',   'location' => 'Utah', 'date_established' => '1919-11-19',   'area_in_acres' => '146597.60'],
    ['name' => 'Lassen Volcanic',   'location' => 'California', 'date_established' => '1916-12-09',   'area_in_acres' => '427409']
  	
];

foreach ($parks as $park) {
    $query = "INSERT INTO parks (name, location, date_established, area_in_acres) VALUES ('{$park['name']}', '{$park['location']}', '{$park['date_established']}', '{$park['area_in_acres']}')";

    $dbc->exec($query);

    echo "Inserted ID: " . $dbc->lastInsertId() . PHP_EOL;
}