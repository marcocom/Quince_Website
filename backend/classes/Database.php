<?php

require 'Author.php';
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

  public static function getAuthors ($filters)
  {
    $authors = array ('authors' => array ());

    $query = 'select id, name, job, email, useFbImage, facebook, linkedin, mobile, details, section

              from authors

              where true

              ' . (isset ($filters->id) ? 'and id = ' . (int) $filters->id : '') . ' 

              order by id

              ' . (isset ($filters->limit)  ? 'limit ' . (int) $filters->limit   : '') . ' 
              ' . (isset ($filters->offset) ? 'offset ' . (int) $filters->offset : '');
    $result = static::$db->query ($query);

    while ($row = $result->fetch_assoc ())
    {
      $author = new Author ($row['id']);
      $author->name       = $row['name'];
      $author->job        = $row['job'];
      $author->email      = $row['email'];
      $author->useFbImage = (bool) $row['useFbImage'];
      $author->facebook   = $row['facebook'];
      $author->linkedin   = $row['linkedin'];
      $author->mobile     = $row['mobile'];
      $author->details    = $row['details'];
      $author->section    = $row['section'];

      $authors['authors'][] = $author;
    }

    /* if we're requesting an offset/limit, return the number of items remaining as well */
    if (isset ($filters->limit))
    {
      $query = 'select count(id)

                from authors

                where true

                ' . (isset ($filters->id) ? 'and id = ' . (int) $filters->id : '');
      $result = static::$db->query ($query);

      $authors['remaining'] = max ($result->num_rows, 0);
    }

    return $authors;
  }

  /* retrieve items based on a set of filters */
  public static function getItems ($filters)
  {
    $items = array ('items' => array ());

    /* if we're requesting an array of types, process each type individually and merge the results */
    if (isset ($filters->types))
    {
      foreach ($filters->types as $type)
      {
        $copy = clone ($filters);
        unset ($copy->types);

        $copy->type   = $type->type;
        $copy->offset = $type->offset;
        $copy->limit  = $type->limit;
        $copy->tag    = $type->tag;

        $temp = static::getItems ($copy);

        $items['items'] = array_merge ($temp['items'], $items['items']);

        if (isset ($temp['remaining']))
        {
          $items['remaining'] = isset ($items['remaining']) ? $items['remaining'] : array ();
          $items['remaining'][$type->type] = isset ($items['remaining'][$type->type]) ? $items['remaining'][$type->type] + $temp['remaining'] : $temp['remaining'];
        }
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

              left outer join itemTags
              on itemTags.item = items.id

              left outer join tags
              on tags.id = itemTags.tag

              where true

              ' . (isset ($filters->id)         ? 'and items.id = ' . (int) $filters->id                          : '') . ' 
              ' . (isset ($filters->type)       ? 'and types.type = "' . static::clean ($filters->type) . '"'     : '') . ' 
              ' . (isset ($filters->customerId) ? 'and items.customer = ' . (int) $filters->customerId            : '') . '
              ' . (isset ($filters->portal)     ? 'and items.portal = "' . static::clean ($filters->portal) . '"' : '') . '
              ' . (isset ($filters->ref)        ? 'and items.ref = "' . static::clean ($filters->ref) . '"'       : '') . '
              ' . (isset ($filters->tag)        ? 'and tags.tag = "' . static::clean ($filters->tag) . '"'        : '') . '

              order by date

              ' . (isset ($filters->limit)  ? 'limit ' . (int) $filters->limit   : '') . ' 
              ' . (isset ($filters->offset) ? 'offset ' . (int) $filters->offset : '');
    $result = static::query ($query);

    $itemId = null;
    while ($row = $result->fetch_assoc ())
    {
      if ($itemId != $row['id'])
      {
        $itemId = $row['id'];

        $item = new Item ($itemId);
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
        $item->tags   = static::getTags (array ('itemId' => $item->id));

        $items['items'][] = $item;
      }
    }

    /* if we're requesting an offset/limit, return the number of items remaining as well */
    if (isset ($filters->limit))
    {
      $query = 'select count(id) as count

                from items

                where true

                ' . (isset ($filters->id)         ? 'and items.id = ' . (int) $filters->id                          : '') . ' 
                ' . (isset ($filters->type)       ? 'and items.type = "' . static::clean ($filters->type) . '"'     : '') . ' 
                ' . (isset ($filters->customerId) ? 'and items.customer = ' . (int) $filters->customerId          : '') . '
                ' . (isset ($filters->portal)     ? 'and items.portal = "' . static::clean ($filters->portal) . '"' : '') . '
                ' . (isset ($filters->ref)        ? 'and items.ref = "' . static::clean ($filters->ref) . '"'       : '');
      $result = static::$db->query ($query);

      $row = $result->fetch_assoc ();


      $items['remaining'] = max ($row['count'] - $filters->limit - $filters->offset, 0);
    }


    return $items;
  }

  /* retrieve an array of images based on a set of filters */
  private static function getImages ($filters)
  {
    $images = array ();

    $query = 'select images.id, type, extension

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
      $image->extension = $row['extension'];

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