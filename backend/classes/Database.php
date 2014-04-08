<?php

require 'Item.php';
require 'Image.php';

class Database
{
  private static $db;

  /* set up the database connection */
  public static function init ()
  {
    static::$db = new mysqli (null, 'quince', null, 'quince');
    static::$db->set_charset ('utf8');
    static::query ("set sql_mode = 'IGNORE_SPACE'");
  }

  /* run a query */
  public static function query ($query)
  {
    $result = static::$db->query ($query);

    if (static::$db->error)
    {
      throw new Exception (static::$db->error);
    }

    return $result;
  }

  /* clean a string for query usage */
  private static function clean ($value)
  {
    $value = trim ($value);
    $value = stripslashes ($value);
    $value = static::$db->real_escape_string ($value);

    return $value;
  }

  /* retrieve items based on a set of filters */
  public static function getItems ($filters)
  {
    $items = array ();

    /* if we're requesting an array of types, process each type individually and merge the results */
    if (isset ($filters->types))
    {
      foreach ($filters->types as $type)
      {
        $copy = clone ($filters);
        unset ($copy->types);

        $copy->type = $type->type;
        $copy->offset = $type->offset;
        $copy->limit = $type->limit;

        $items = array_merge (static::getItems ($copy), $items);
      }

      return $items;
    }

    $query = 'select items.id, types.type as type, comment, date, customers.id as customerId, customers.name as customerName, title, `text`, portal, ref, authors.id as authorId, authors.name as authorName, url

              from items

              left outer join types
              on types.type = items.type

              left outer join customers
              on customers.id = items.customer

              left outer join authors
              on authors.id = items.author

              where true

              ' . (isset ($filters->id) ? 'and items.id = ' . (int) $filters->id : '') . ' 
              ' . (isset ($filters->type) ? 'and types.type = "' . static::clean ($filters->type) . '"' : '') . ' 

              order by date

              ' . (isset ($filters->limit) ? 'limit ' . (int) $filters->limit : '') . ' 
              ' . (isset ($filters->offset) ? 'offset ' . (int) $filters->offset : '');
    $result = static::query ($query);

    while ($row = $result->fetch_assoc ())
    {
      $item = new Item ($row['id']);
      $item->title        = $row['title'];
      $item->text         = $row['text'];
      $item->type         = $row['type'];
      $item->customerId   = (int) $row['customerId'];
      $item->customerName = $row['customerName'];
      $item->authorId     = (int) $row['authorId'];
      $item->authorName   = $row['authorName'];
      $item->portal       = $row['portal'];
      $item->ref          = $row['ref'];
      $item->date         = $row['date'];
      $item->url          = $row['url'];
      $item->comment      = $row['comment'];

      $item->images = static::getImages (array ('itemId' => $item->id));
      $item->tags = static::getTags (array ('itemId' => $item->id));

      $items[] = $item;
    }

    return $items;
  }

  /* retrieve an array of images based on a set of filters */
  private static function getImages ($filters)
  {
    $images = array ();

    $query = 'select images.id, type

              from images ';

    if (isset ($filters['itemId']))
    {
      $query .= 'inner join itemImages
                 on itemImages.image = images.id
                 and itemImages.item = ' . (int) $filters['itemId'];
    }

    $result = static::query ($query);

    while ($row = $result->fetch_assoc ())
    {
      $image = new Image ($row['id']);
      $image->type = $row['type'];

      $images[] = $image;
    }

    return $images;
  }

  /* retrieve a set of tags based on a set of filters */
  private static function getTags ($filters)
  {
    $tags = array ();

    $query = 'select tags.tag

              from tags ';

    if (isset ($filters['itemId']))
    {
      $query .= 'inner join itemTags
                 on itemTags.tag = tags.id
                 and itemTags.item = ' . (int) $filters['itemId'];
    }

    $result = static::query ($query);

    while ($row = $result->fetch_assoc ())
    {
      $tags[] = $row['tag'];
    }

    return $tags;
  }
}