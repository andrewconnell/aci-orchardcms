(function(){
  // set current timezone
  $('div.dl-container-form form input[name=time_zone]').each(function(){
    this.value = Intl.DateTimeFormat().resolvedOptions().timeZone;
  });
  // set page title & url
  $('div.dl-container-form form input[name=page_title]').each(function(){
    this.value = document.title;
  });
  $('div.dl-container-form form input[name=url]').each(function(){
    this.value = document.location.href;
  });
})();