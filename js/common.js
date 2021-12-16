(function($){

    $(window).load(function(){
        $(".loadingAni").delay(1000).fadeOut(600)
        init()
    })

    $('#container_wrap').load('main.html')

    // HOME, 로그인, 회원가입
    $('.user_box > li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#container_wrap').load(url)
    })

    // 로고 클릭시
    $('.hd_nav_wrap > .row > h1 > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#container_wrap').load(url)
    })

    // 서브메뉴 클릭시
    $('.depth2 > ul > li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#container').remove()
        $('#container_wrap').load(url)
        $('.depth2').slideUp()
        $('.depth1 > ul > li.on').removeClass('on')

        if ($('html').hasClass('mobile')){
            $('.hd_nav_wrap').removeClass('on')
            $('.hd_nav').slideUp()
        }
    })

    // resize시 변화
    var deviceSize = 768;
    function scrollOX(status) {
      $("html").css({
        overflowY: status,
      });
      var htmlWidth = $("html").width();
      console.log(htmlWidth)
    }
    var swh = scrollOX("hidden"),
      sws = scrollOX("scroll"),
      swd = swh - sws;
    if (swd > 0) {
      deviceSize = deviceSize - swd;
    }

    init()
    function init(){
        var ww = $(window).width()
        if (ww>deviceSize && !$('html').hasClass('pc')){
            $('html').addClass('pc').removeClass('mobile')
            $('.hd_nav_wrap').removeClass('on')
            $('.depth1 > ul > li').removeClass('on')
            $('.open_gnb, .depth2').hide()
            $('.hd_nav').show().css({
                top: '50%'
            })
        } else if(ww<=deviceSize && !$('html').hasClass('mobile')){
            $('html').addClass('mobile').removeClass('pc')
            $('.open_gnb').show()
            $('.hd_nav').hide().css({
                top:'120px'
            })
        }
    }

    $(window).on('resize', function(){
        init();
    })

    // 큰 화면에서는 호버시 작은 화면에서는 클릭시 depth2 나타나게 함
    $('.depth1 > ul > li').hover(
        function(){
            if ($('html').hasClass('pc')){
                $(this).find('.depth2').stop().slideDown(300)
            }      
        },
        function(){
            if ($('html').hasClass('pc')){
                $(this).find('.depth2').stop().slideUp(300)
            }
        }
    )
    $('.depth1 > ul > li > a').on('click', function(e){
        e.preventDefault();
        if ($('html').hasClass('mobile')){
            $(this).parent().toggleClass('on')
            $(this).parent().find('.depth2').stop().slideToggle(300)
            $(this).parent().siblings().each(function(){
                $(this).find('.depth2').slideUp(300)
                $(this).removeClass('on')
            })
        }
    })


    // 햄버거바 클릭시
    $('.hd_nav_wrap .open_gnb').on('click', function(){
        $('.hd_nav').slideToggle(300)
        $('.hd_nav_wrap').toggleClass('on')
        if (!$('.hd_nav_wrap').hasClass('on')){
            $('.depth2').stop().slideUp(300)
        }
    })
    

    // 맨 위로 버튼
    $('.go_top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 400)

        return false;
    })
    
    // 스크롤 이벤트
    var sct;
	$(window).scroll(function(){
        sct = $(this).scrollTop();
        winHeight = $(this).height();

        if (sct > 100){
            $('.go_top').fadeIn();
            $('.user_box_wrap').hide();
            if ( $('html').hasClass('mobile') ) {
                $('.hd_nav').css({
                    top:'88px',
                })
            }
        } else{
            $('.go_top').fadeOut();
            $('.user_box_wrap').show();
            if ( $('html').hasClass('mobile') ) {
                $('.hd_nav').css({
                    top:'120px',
                })
            } else if ( $('html').hasClass('pc')){
                $('.hd_nav').css({
                    top:'50%',
                })
            }
        }

        // intro 애니메이션 효과 (로드)  / 모바일 화면에서는 해제
        if ($('#container').children().is('#intro_pg') && $('html').hasClass('pc')){
            introScroll()
        } else if($('html').hasClass('mobile')){
            $('#company .company_center').css({
                opacity: '1'
            })
            $('#company .company_bottom').css({
                opacity: '1'
            })
        }

        // ceo 애니메이션 효과 (로드)
        if ($('#container').children().is('#ceo_pg') && $('html').hasClass('pc')){
            ceoScroll()
            ceoScroll2()
            ceoScroll3()
            ceoScroll4()
        } else if($('html').hasClass('mobile')){
            $('.ceo_message_wrap img').css({
                opacity: '1'
            })
            $('.ceo_message1, .ceo_message2').css({
                opacity: '1'
            })
        }
    })

    // intro 애니메이션 효과 
    function introScroll(){
        var introMain = $('.company_center').offset().top - $(this).height()/2
        if (sct >= introMain){
            $('.company_center').addClass('on')
        } else if(sct === 0){
            $('.company_center').removeClass('on')
        }

        var introTable = $('.company_bottom').offset().top - $(this).height()/2
        if (sct >= introTable){
            $('.company_bottom').addClass('on')
        } else if(sct === 0){
            $('.company_bottom').removeClass('on')
        }
    }

    // ceo 애니메이션 효과 / img
    function ceoScroll(){
        var ceoMain = $('.ceo_message_wrap1').offset().top - $(this).height()/2
        if (sct >= ceoMain){
            $('.ceo_message_wrap1 img').addClass('on')
        } else if(sct === 0){
            $('.ceo_message_wrap1 img').removeClass('on')
        }
    }
    function ceoScroll2(){
        var ceoMain = $('.ceo_message_wrap2').offset().top - $(this).height()/2
        if (sct >= ceoMain){
            $('.ceo_message_wrap2 img').addClass('on')
        } else if(sct === 0){
            $('.ceo_message_wrap2 img').removeClass('on')
        }
    }

    // ceo 애니메이션 효과 / text
    function ceoScroll3(){
        var ceoMain = $('.ceo_message_wrap1').offset().top - $(this).height()/2
        if (sct >= ceoMain){
            $('.ceo_message1').addClass('on')
        } else if(sct === 0){
            $('.ceo_message1').removeClass('on')
        }
    }
    function ceoScroll4(){
        var ceoMain = $('.ceo_message_wrap2').offset().top - $(this).height()/2
        if (sct >= ceoMain){
            $('.ceo_message2').addClass('on')
        } else if(sct === 0){
            $('.ceo_message2').removeClass('on')
        }
    }


})(jQuery)