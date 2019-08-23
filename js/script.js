console.log('my script is working');

$(document).ready(function(){

  $('body').click(function(){
    $(this).addClass('myClass');
      $('body').css('background','cyan');
        $('h1').css('opacity','0.5').css('font-size','40px');

  });

  $('#heading').draggable();
  $('subHeading').droppable();
});
