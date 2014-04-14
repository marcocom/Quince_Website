<?php

$db = new mysqli ('localhost', 'quince', null, 'quince');


$string = file_get_contents ('../data/columns.json');
$items = json_decode ($string, true);

foreach ($items as $item)
{
  $query = 'select id
            from items
            where id = ' . (int) $item['Id'];
  $result = $db->query ($query);

  $row = $result->fetch_assoc ();

  if ($row)
  {
    continue;
  }

  $query = 'select type
            from types
            where type = "' . $db->escape_string ($item['CellType']) . '"';
  $result = $db->query ($query);

  $row = $result->fetch_assoc ();

  if (!$row)
  {
    $query = 'insert into types 
              (type)
              values ("' . $db->escape_string ($item['CellType']) . '")';
    $db->query ($query);
  }

  if ((int) $item['Client'])
  {
    $query = 'select id
              from customers
              where id = ' . (int) $item['Client'];
    $result = $db->query ($query);

    $row = $result->fetch_assoc ();

    if (!$row)
    {
      $query = 'insert into customers
                (id, name)
                values (' . (int) $item['Client'] . ',
                        "Customer ' . (int) $item['Client'] . '")';
      $db->query ($query);
    }
  }

  if ((int) $item['AuthorId']);
  {
    $query = 'select id
              from authors
              where id = ' . (int) $item['AuthorId'];
    $result = $db->query ($query);

    $row = $result->fetch_assoc ();

    if (!$row)
    {
      $query = 'insert into authors
                (id, name, job)
                values (' . (int) $item['AuthorId'] . ',
                        "' . $db->escape_string ($item['Author']) . '",
                        "' . $db->escape_string ($item['JobTitle']) . '")';
      $db->query ($query);
    }
  }

  $parts = explode (' ', $item['Date']);
  $date = $parts[0] . '-' . str_pad ($parts[1], 2, '0', STR_PAD_LEFT) . '-' . str_pad ($parts[2], 2, '0', STR_PAD_LEFT) . ' ' . $parts[3];

  $query = 'insert into items
            (type, comment, date, customer, title, text, author, url, portal, ref)
            values ("' . $db->escape_string ($item['CellType']) . '",
                    "' . $db->escape_string ($item['_comment']) . '",
                    "' . $db->escape_string ($date) . '",
                    ' . ((int) $item['Client'] ?: 'null')  . ',
                    "' . $db->escape_string ($item['Title']) . '",
                    "' . $db->escape_string ($item['Article']) . '",
                    ' . ((int) $item['AuthorId'] ?: 'null') . ',
                    "' . $db->escape_string ($item['URL']) . '",
                    "' . $db->escape_string ($item['Portal']) . '",
                    "' . $db->escape_string ($item['Ref']) . '")';
  $db->query ($query);

  $itemId = $db->insert_id;

  foreach ($item['Image'] as $image)
  {
    var_dump ($image);

    if (!file_exists('../' . $image))
    {
      var_dump ('does not exist, continuing');
      continue;
    }

    $extension = pathinfo ('../' . $image, PATHINFO_EXTENSION);

    $finfo = finfo_open (FILEINFO_MIME_TYPE);
    $type = finfo_file ($finfo, '../' . $image);
    finfo_close ($finfo);

    $query = 'insert into images (type, extension)
              values ("' . $db->escape_string ($type) . '",
                      "' . $db->escape_string ($extension) . '")';
    $db->query ($query);


    echo $db->error;

    $imageId = $db->insert_id;

    var_dump ($query, $db->error, $imageId);

    $query = 'insert into itemImages (item, image)
              values (' . (int) $itemId . ',
                      ' . (int) $imageId . ')';
    $db->query ($query);

    rename ('../' . $image, '../img/' . $imageId . '.' . $extension);
  }

}