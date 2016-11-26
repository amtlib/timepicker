function init(){
   $('#twentyfour_hours').on('click', function(e){
       console.log('aa')
        e.stopPropagation();
        $(this).addClass('active');
       $('#twelve_hours').removeClass('active');
    })
    $('#twelve_hours').on('click', function(e){
        e.stopPropagation();
        $(this).addClass('active');
        $('#twentyfour_hours').removeClass('active');
    })
}

