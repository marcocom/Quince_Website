<?php

$db = new mysqli ('localhost', 'quince', null, 'quince');

$string = file_get_contents ('users.json');
$users = json_decode ($string, true);

foreach ($users as $user)
{
  $query = 'select id
            from authors
            where id = ' . (int) $user['id'];
  $result = $db->query ($query);

  $row = $result->fetch_assoc ();

  if ($row)
  {
    continue;
  }

  $query = 'insert into authors
            (id, name)
            values (' . (int) $user['id'] . ',
                    "' . $db->escape_string ($user['name']) . '")';
  $db->query ($query);
}