$( document ).ready(function() {
  
  // Top Nav Active
  $('a.nav').each(function(){    
    var thisPage = $('body').attr('name');
    if ($(this).hasClass(thisPage)) {
      $(this).addClass('active');
    }
  });

  // Tap Menu Active
  $('.tab-menu > a').each(function(){    
    var thisPage = $('body').attr('page');
    if ($(this).hasClass(thisPage)) {
      $(this).addClass('active');
    }
  });

});