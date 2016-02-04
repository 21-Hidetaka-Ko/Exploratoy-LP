$(function(){
  $('.column-image').hover(
    function(){
      $(this).addClass('zoom');
      $(this).children('.zoom-black').fadeIn(300);
    },
    function(){
      $(this).removeClass('zoom');
      $(this).children('.zoom-black').fadeOut(300);
    }
  );

  $('form').submit(function(){
    var error_flag = false;
    $('input, textarea').each(function(){
      var body = $(this).val();
      if (!body) {
        $(this).prev('.error-message').text('入力してください');
        error_flag = true;
      } else {
        $(this).prev('.error-message').text('');
      }
    });

    if (!error_flag) {
      $('.contact-form').html('<h4>お問い合わせありがとうございます。</h4>');
    }
    return false;
  });
});
