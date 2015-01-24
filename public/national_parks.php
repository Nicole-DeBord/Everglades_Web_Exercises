<?php

define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'national_parks_db');
define('DB_USER', 'parks_user');
define('DB_PASS', 'codeup');

require('db_connect.php');

// echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";


// var_dump($stmt);

// echo "Rows: " .    $stmt->rowCount() . PHP_EOL;
// echo "Columns: " . $stmt->columnCount() . PHP_EOL;

// while ($row = $stmt->fetch()) {
// 	print_r($row);
// }


// var_dump($parks);
// print_r($stmt);

// print_r($stmt->fetch());
// print_r($stmt->fetch(PDO::FETCH_ASSOC));
// print_r($stmt->fetch(PDO::FETCH_NUM));
// print_r($stmt->fetch(PDO::FETCH_BOTH));

// echo basename($_SERVER['PHP_SELF']);
if ($_GET) {
	var_dump($_GET);

	// Assign our current page number.
	$page = $_GET['page'];
	$limit = '';
	$offset = '';

	if ($page == 1) {
		$limit = 'LIMIT 4';
		$offset = ' OFFSET 0';
	} else if ($page == 2) {
		$limit = 'LIMIT 4';
		$offset = 'OFFSET 4';
	} else if ($page == 3) {
		$limit = 'LIMIT 4';
		$offset = 'OFFSET 8';
	}
}

$parks = $dbc->query('SELECT name, location, date_established, area_in_acres FROM parks ' . $limit . ' ' . $offset)->fetchAll(PDO::FETCH_ASSOC);

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>National Parks Database</title>
</head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>National Parks</h1>
				<table class="table">
					<thead>
					<tr>
						<th>Name</th>
						<th>Location</th>
						<th>Date Established</th>
						<th>Area in Acres</th>
					</tr>
				</thead>

					<? foreach ($parks as $park): ?>
						<tr>
						<? foreach ($park as $value): ?>
							<td><?= $value;?></td>
						<? endforeach; ?>
						</tr>
					<? endforeach; ?>
				</table>
					<a href="?page=<?=$page - 1?>" class="btn btn-default pull-left"> Previous </a>
					<a href="?page=<?=$page + 1?>" class="btn btn-default pull-right"> Next </a>

			</div>
		</div>
	</div>
<body>
	
</body>
</html>