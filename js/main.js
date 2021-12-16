(function($){

    // 메인슬라이드 : 슬릭슬라이더 연결
    $('.slide_outer').slick({
        autoplay:true,
        dots:true,
        autoplaySpeed:3000,
        speed:1000,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:true,
        pauseOnDotsHover:false,
        pauseOnFocus:false,
        cssEase:'ease',
        draggable:true,  
        fade:true, 
        arrows:true,
        prevArrow:'<button class="prevArrow arrow"><i class="fas fa-angle-left"></i></button>',
        nextArrow:'<button class="nextArrow arrow"><i class="fas fa-angle-right"></i></button>',
        responsive:[{
            breakpoint:801,
            settings:{
                arrows:false,
                fade:true,
                draggable: true,
            }
        }]

    })

    // 공지사항 더보기 클릭시 이동
    $('a.notice').on('click', function(e){
        e.preventDefault();
        var url = $(this).attr('href');
        $('#container').remove();
        $('#container_wrap').load(url);
    })

    $(window).scroll(function(){
        var sct = $(this).scrollTop();

        // section1 애니메이션 효과
        if (sct > 400 && $('html').hasClass('pc')){
            $(".wwd_wrap").addClass("on");
        } else if($('html').hasClass('mobile')){
            $('.wwd').css({
                opacity: '1'
            })
        } else if(sct === 0){
            $(".wwd_wrap").removeClass("on");
        }

        // section2 애니메이션 효과
        if (sct > 900 && $('html').hasClass('pc')){
            $(".section2_text").addClass("on");
        } else if($('html').hasClass('mobile')){
            $('.section2_text').css({
                opacity: '1'
            })
        } else if(sct === 0){
            $(".section2_text").removeClass("on");
        }

        // section3 애니메이션 효과
        if (sct > 1300 && $('html').hasClass('pc')){
            $(".section3 > .row").addClass("on");
        } else if($('html').hasClass('mobile')){
            $('.section3 > .row').css({
                opacity: '1'
            })
        } else if(sct === 0){
            $(".section3 > .row").removeClass("on");
        }

        // section4 애니메이션 효과
        if (sct > 2200 && $('html').hasClass('pc')){
            $(".section4 > .row ").addClass("on");
        } else if($('html').hasClass('mobile')){
            $('.section4 > .row').css({
                opacity: '1'
            })
        } else if(sct === 0){
            $(".section4 > .row").removeClass("on");
        }
    })

})(jQuery)