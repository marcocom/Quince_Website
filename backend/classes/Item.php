<?php

class Item
{
  public $id;
  
  public $title;
  public $type;
  public $customerId;
  public $customerName;
  public $authorId;
  public $authorName;
  public $date;
  public $url;
  public $comment;

  public $tags = array ();
  public $images = array ();

	public function __construct ($id)
  {
    $this->id = (int) $id;
  }
}