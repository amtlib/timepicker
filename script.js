$(document).ready(function () {
    $('#minutes').css('font-size', $(this).width() / 10 + 'px')
    $('#hours').css('font-size', $(this).width() / 10 + 'px')
    $('#colon').css('font-size', $(this).width() / 10 + 'px')
    $(window).resize(function () {
        $('#minutes').css('font-size', $(this).width() / 10 + 'px')
        $('#hours').css('font-size', $(this).width() / 10 + 'px')
        $('#colon').css('font-size', $(this).width() / 10 + 'px')
    })
    var box;
    var boxCenter;
    var dragged = false;
    var angle;

    $('#hours_circle').on('mousedown', function (e) {
        box = $(this);
        boxCenter = [box.offset().left + box.width() / 2, box.offset().top + box.height() / 2];
        dragged = true;
    });
    $('#minutes_circle').on('mousedown', function (e) {
        box = $(this);
        boxCenter = [box.offset().left + box.width() / 2, box.offset().top + box.height() / 2];
        dragged = true;
    });
    $(document).on('mouseup', function () {
        dragged = false;
    });
    $(document).on('mousemove', function (e) {
        if (dragged) {
            var angle = Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) * (180 / Math.PI);
            box.css({
                "transform": 'rotate(' + (angle) + 'deg)'
            });
            angle = angle < 0 ? 180 + (180-Math.abs(angle)) : angle;
            if(box.attr('id') == 'hours_circle'){
                $('#hours').text(Math.floor(angle/15).toString().length<2?'0'+Math.floor(angle/15):Math.floor(angle/15));
            }else{
                $('#minutes').text(Math.floor(angle/6).toString().length < 2?'0'+Math.floor(angle/6):Math.floor(angle/6));
            }
            console.log(box.attr('id'),angle)
        }
    });
})
