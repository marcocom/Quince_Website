<?php

require 'Slim/Slim.php';

require 'classes/Database.php';

\Slim\Slim::registerAutoloader ();

/* set up our restful service and the database */
$service = new \Slim\Slim();
Database::init ();

/* define the available actions for our restful interface */
$service->get ('/item', 'getItems');
$service->get ('/item/:id', 'getItem');

$service->get ('/author', 'getAuthors');
$service->get ('/author/:id', 'getAuthor');


$service->run ();

header ('Content-type: application/json');

/* retrieve a list of items specified by a set of filters */
function getItems ()
{
  $request = \Slim\Slim::getInstance ()->request ();

  $params = $request->params ();

  $filters = isset ($params['filters']) ? json_decode ($params['filters']) : array ();

  $items = Database::getItems ($filters);

  echo json_encode ($items);
}

/* retrieve a single item based on id */
function getItem ($id)
{
  $items = Database::getItems ((object) array ('id' => $id));

  echo json_encode ($items);
}

function getAuthors ()
{
  $request = \Slim\Slim::getInstance ()->request ();

  $params = $request->params ();

  $filters = isset ($params['filters']) ? json_decode ($params['filters']) : array ();

  $authors = Database::getAuthors ($filters);

  echo json_encode ($authors);
}

/* retrieve a single item based on id */
function getAuthor ($id)
{
  $authors = Database::getAuthors ((object) array ('id' => $id));

  echo json_encode ($authors);
}