(function($){

    $('.sub_nav_bottom > li > a').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#container_wrap').remove();
        $('#container').load(url);
    })

})(jQuery)