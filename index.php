<?php
include_once "../global_tools.php";
?>
<!doctype html>
<html lang="en">
<head>
	<?php
	createHead(
		$title="Clocks",
		$desc="A broken clock is right twice a day."
	);
	?>

    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
<h1>Hello, world!</h1>

<div id="clock-container">
<?php for ($i = 1; $i <= 720; ++$i) { ?>
    <clock id="clock<?=$i?>"></clock>
<?php } ?>
</div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
</body>
</html>
