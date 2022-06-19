<?php
include_once "../global_tools.php";
?>
<!doctype html>
<html lang="en">
<head>
	<?php
	createHead(
		"Clocks",
		"A broken clock is right twice a day: this page contains every analogue clock face.",
		"https://adil.hanney.org/clocks/clocks.png",
        null,
        "2021-01-24",
        "Image"
	);
	?>

    <link rel="stylesheet" href="assets/style.css">

    <link rel="manifest" href="clocks.webmanifest">
    <meta name="theme-color" content="#8A888A"/>
    <link rel="apple-touch-icon" href="/maskable_icon_x192.png">
</head>
<body>

<div id="clock-container">
<?php
$minute_current = date("i");
$hour_current = date("h");

$minute = -1;
$hour = 0;
for ($i = 1; $i <= 720; ++$i) {
    $minute += 1;
    if ($minute >= 60) {
        $minute = 0;
        $hour += 1;
    }

    $focus = ($minute == $minute_current and $hour == $hour_current) ? "focus": "";
?>
    <clock id="clock<?=$i?>" class="minute-<?=$minute?> hour-<?=$hour?> <?=$focus?>" aria-label="<?=$hour?>:<?=$minute?>"></clock>
<?php } ?>
</div>

<script src="assets/script.js"></script>
</body>
</html>
