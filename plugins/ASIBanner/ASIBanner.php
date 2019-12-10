<?php

require_once(TL_ABS_PATH . '/lib/functions/tlPlugin.class.php');


class ASIBannerPlugin extends TestlinkPlugin
{
  function _construct()
  {

  }

  function register()
  {
    $this->name = 'ASIBanner';
    $this->description = 'Adds a banner';

    $this->version = '1.2';

    $this->author = 'Aaron Haslam';
  }

  function config()
  {
    return array();
  }

  function hooks()
  {
    $hooks = array(
       'EVENT_TITLE_BAR' => 'title_bar'
    );
    return $hooks;
  }

  function title_bar()
  {
    return("<div class='messages_rounded blocked' style='width: 80%;'>" . file_get_contents(__DIR__.'/banner.html') . "</div>");
  }

}
