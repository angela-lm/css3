var img = [
    {url:'./img/1.jpg'},
    {url:'./img/2.jpg'},
    {url:'./img/3.jpg'},
    {url:'./img/4.jpg'},
    {url:'./img/5.jpg'},
    {url:'./img/6.jpg'}];
var i = 0; 
$(img).each(function(index){
    var a = new Image();
    a.src = $(this)[0].url;
    a.onload = function(){
        i++
    }
})
var timer = setInterval(function(){
    if(i == img.length){
        $('.wrapper').addClass('init');
        clearInterval(timer);
    }
},300);
$('.item').on('click',function(){
    $(this).siblings().css({
        'width': 0,
        'height': 0
    });
    $(this).css('width','100%');
    $(this).find('.title').hide();
    $(this).find('.des').show();
})
$('.close').on('click',function(e){
    e.stopPropagation();
    $(this).parents('.item').css({
        'width': '15%'
    }).siblings().css({
        'width': '15%',
        'height': '100%'
    }).end().find('.des').hide().end().find('.title').show();
})