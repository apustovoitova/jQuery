$ ('.btn').click(function(){
    $('.box').toggle(1900);
    $ ('.btn').text('Сделай клик');
});

$('.box').after('<p>Этот пример сделан на jQuery</p>')
