$(document).ready(function () {
    init()
    $('#minutes').css('font-size', $(this).width() / 10 + 'px')
    $('#hours').css('font-size', $(this).width() / 10 + 'px')
    $('#colon').css('font-size', $(this).width() / 10 + 'px')
    $('#twelve_hours').css('font-size', $(this).width() / 25 + 'px')
    $('#twentyfour_hours').css('font-size', $(this).width() / 25 + 'px')
    $('#am').css('font-size', $(this).width() / 25 + 'px')
    $('#pm').css('font-size', $(this).width() / 25 + 'px')
    $(window).resize(function () {
        $('#minutes').css('font-size', $(this).width() / 10 + 'px')
        $('#hours').css('font-size', $(this).width() / 10 + 'px')
        $('#colon').css('font-size', $(this).width() / 10 + 'px')
        $('#twelve_hours').css('font-size', $(this).width() / 25 + 'px')
        $('#twentyfour_hours').css('font-size', $(this).width() / 25 + 'px')
        $('#am').css('font-size', $(this).width() / 25 + 'px')
        $('#pm').css('font-size', $(this).width() / 25 + 'px')
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
            angle = angle < 0 ? 180 + (180 - Math.abs(angle)) : angle;
            if (box.attr('id') == 'hours_circle') {
                if ($('#twelve_hours').hasClass('active')) {
                    $('#hours').text(Math.floor(angle / 30).toString().length < 2 ? '0' + Math.floor(angle / 30) : Math.floor(angle / 30));
                }
                else {
                    $('#hours').text(Math.floor(angle / 15).toString().length < 2 ? '0' + Math.floor(angle / 15) : Math.floor(angle / 15));
                }
            }
            else {
                $('#minutes').text(Math.floor(angle / 6).toString().length < 2 ? '0' + Math.floor(angle / 6) : Math.floor(angle / 6));
            }
            get_data();
        }
    });
    function get_data(){
        console.log('get!')
        $('#output').val('');
        if($('#twelve_hours').hasClass('active')){
            $('#output').val($('#hours').text()+':'+$('#minutes').text()+' ');
            if($('am').hasClass('active')){
                $('#output').val($('#output').val()+'AM')
            }else{
                $('#output').val($('#output').val()+'PM')
            }
        }else{
            $('#output').val($('#hours').text()+':'+$('#minutes').text());
        }
    }
})
