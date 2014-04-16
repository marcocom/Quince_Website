<?php

class Author
{
  public $id;
  
  public $name;
  public $job;
  public $email;
  public $useFbImage;
  public $facebook;
  public $linkedin;
  public $mobile;
  public $details;
  public $section;

	public function __construct ($id)
  {
    $this->id = (int) $id;
  }
}