(function( $ ){

	/* ----------------------------------------------------------- */
	/*  MOBILE MENU CLOSE 
	/* ----------------------------------------------------------- */ 

  jQuery('.mu-menu').on('click', 'li a', function() {
    $('.in').collapse('hide');
  });

	/* ----------------------------------------------------------- */
	/*  PORTFOLIO GALLERY
	/* ----------------------------------------------------------- */ 
    $('.filtr-container').filterizr();

    //Simple filter controls

    $('.mu-simplefilter li').click(function() {
        $('.mu-simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

/* ----------------------------------------------------------- */
/*  PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX )
/* ----------------------------------------------------------- */ 

$('.mu-filter-imglink').magnificPopup({
  type: 'image',
  mainClass: 'mfp-fade',
  gallery:{
    enabled:true
  }
});

})( jQuery );

function gitJero(){
  window.open("https://github.com/Jerocam");
}

function linkJero(){
  window.open("https://www.linkedin.com/in/jerocam-226");
}

function CVJero(){
  window.open("ocampos_jeronimo.pdf");
}
