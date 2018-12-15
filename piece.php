<?php
$raw_data = file_get_contents('php://input');
$data = json_decode($raw_data);

$handle = fopen('db.txt', 'w');
fwrite($handle, "이름: " . $data->name . PHP_EOL);
fwrite($handle, "제목: " . $data->title . PHP_EOL);

echo 1;
