function init() {
    $('#twentyfour_hours').on('click', function (e) {
        console.log('aa')
        e.stopPropagation();
        $(this).addClass('active');
        $('#twelve_hours').removeClass('active');
        $('#am').addClass('disabled');
        $('#pm').addClass('disabled');
    })
    $('#twelve_hours').on('click', function (e) {
        e.stopPropagation();
        $(this).addClass('active');
        $('#twentyfour_hours').removeClass('active');
        $('#am').removeClass('disabled');
        $('#pm').removeClass('disabled');
    })
    $('#am').on('click', function () {
        if (!$(this).hasClass('disabled')) {
            $(this).addClass('active');
            $('#pm').removeClass('active')
        }
    })
    $('#pm').on('click', function () {
        if (!$(this).hasClass('disabled')) {
            $(this).addClass('active');
            $('#am').removeClass('active')
        }
    })
}
