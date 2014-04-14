<?php

$db = new mysqli ('localhost', 'quince', null, 'quince');

$string = file_get_contents ('customers.json');
$customers = json_decode ($string, true);

foreach ($customers as $customer)
{
  $query = 'select id
            from customers
            where id = ' . (int) $customer['id'];
  $result = $db->query ($query);

  $row = $result->fetch_assoc ();

  if ($row)
  {
    continue;
  }

  $query = 'insert into customers
            (id, name)
            values (' . (int) $customer['id'] . ',
                    "' . $db->escape_string ($customer['name']) . '")';
  $db->query ($query);
}