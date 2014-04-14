<?php

require 'classes/Database.php';

$db = new mysqli ('localhost', 'quince', null, 'quince');

$people = simplexml_load_file ('../data/people.xml');

foreach ($people as $person)
{
  $login = preg_replace ('/@.+/', '', $person->email);

  $query = 'select id
            from authors
            where name = "' . $db->escape_string ($login) . '"';
  $result = $db->query ($query);

  $row = $result->fetch_assoc ();

  if (!$row)
  {
    echo 'unable to find ' . $login . '<br>';
    continue;
  }

  $id = (int) $row['id'];

  $query = 'update authors
            set name       = "' . $db->escape_string (preg_replace ('/\s+/', ' ', $person->name)) . '",
                email      = "' . $db->escape_string ($person->email) . '",
                useFbImage = ' . ($person->useFBImage == 'yes' ? 'true' : 'false') . ',
                facebook   = "' . $db->escape_string ($person->facebook) . '",
                linkedin   = "' . $db->escape_string ($person->linkedin) . '",
                mobile     = "' . $db->escape_string ($person->mobile) . '",
                details    = "' . $db->escape_string ($person->details) . '",                
                section    = "' . $db->escape_string ($person->section) . '"
            where id = ' . (int) $id;
  $db->query ($query);

  echo $db->error;
}