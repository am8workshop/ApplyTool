<?php 
ini_set('display_errors', '1');

require_once('log4php-2.0.0/LoggerManager.php');

$logger = LoggerManager::getLogger(basename($_SERVER['SCRIPT_NAME']));
$remote = getenv( "REMOTE_ADDR" );
LoggerNDC::push( $remote );



$logger->info('ほげほげ');

$logger->warn('WARNメッセージです');
$logger->error('ERRORメッセージです');
$logger->fatal('FATALメッセージです');