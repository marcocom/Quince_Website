<?php

class Image
{
  public $id;
  public $type;

	public function __construct ($id)
  {
    $this->id = (int) $id;
  }
}