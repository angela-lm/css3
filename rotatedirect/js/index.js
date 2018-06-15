// $('li').on('mouseenter',function(e){
//     var d = getDirection(e);
//     switch(d){
//         case 0:$(this).attr('Class','in-bottom');break;
//         case 1:$(this).attr('Class','in-left');break;
//         case 2:$(this).attr('Class','in-top');break;
//         case 3:$(this).attr('Class','in-right');
//     }
// })
// $('li').on('mouseleave',function(e){
//     var d = getDirection(e);
//     switch(d){
//         case 0:$(this).attr('Class','out-bottom');break;
//         case 1:$(this).attr('Class','out-left');break;
//         case 2:$(this).attr('Class','out-top');break;
//         case 3:$(this).attr('Class','out-right');
//     }
// })
$('li').on('mouseenter',function(e){
    $(this).attr('class',addMove(e,'in-'));
});
$('li').on('mouseleave',function(e){
    $(this).attr('class',addMove(e,'out-'));
});
function addMove(e,state){
    var d = getDirection(e);
    switch(d){
        case 0:state += 'bottom';break;
        case 1:state += 'left';break;
        case 2:state += 'top';break;
        case 3:state += 'right';
    }
    return state;
}
function getDirection(e){
    var x = e.offsetX - $('li').width() / 2;
    var y = e.offsetY - $('li').height() / 2;
    return (Math.round(Math.atan2(y,x) * (180 / Math.PI) / 90) + 3) % 4;
}