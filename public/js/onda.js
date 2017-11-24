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

  // CounterUp
  var scollH = 0;
  var aH = $('.counter').position().top;
  var counterDone = false;
  if (counterDone == false) {
    $(document).on('scroll', function() {
        scrollH = $(document).scrollTop();
        if (scrollH > aH && counterDone == false) {
          counterDone = true;
          $('.counter').each(function() {              
            var $this = $(this),
                countTo = $this.attr('data-count');
            var a = "";            
            $({ countNum: $this.text()}).animate({
              countNum: countTo
            },
            {          
              duration: 30000,
              easing: 'linear',            
              step: function() {
                a = Math.floor(this.countNum);
                a = a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                $this.text(a);
              },
              complete: function() {
                // $this.text(a);                         
              }          
            });
          });
        }
    });
  }  

});

