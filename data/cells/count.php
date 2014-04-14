<?php

$directorylisting = scandir( '.' );

echo count( $directorylisting ) - 3;

?>
