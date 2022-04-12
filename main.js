$( "#btnFadeOut" ).click(function() {
    $( ".btnText" ).fadeOut();
  });

  $( "#btnFadeIn" ).click(function() {
    $( ".btnText" ).fadeIn( "slow")
  });


  $( ".btnText" ).addClass( "myClass" );


  $( ".btnText" ).prepend( $( "<h2> well come to Rotterdam </h2>" ) );

  

  $( "div.container1" ).html(function() {
    var emphasis = "<em>" + $( "p" ).length + " paragraphs!</em>";
    return "<p>All new content for " + emphasis + "</p>";
  });


// $( "div.demo-container" ).text( " well to europe" );



$( "#btnFadeOut").click(function() {
    $( ".btnText" ).hide( "slow", function() {
      alert( "Animation complete." );
    });
  });


  $( "#btnFadeOut" ).click(function() {
    $( ".btnText" ).show( "slow", function() {
      // Animation complete.
    });
  });


  $( "#btnFadeOut" ).click(function() {
    $( ".btnText" ).slideDown( "slow", function() {
      // Animation complete.
    });
  });

