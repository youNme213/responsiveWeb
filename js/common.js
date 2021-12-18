(function($){

    $(window).load(function(){
        $(".loadingAni").delay(1000).fadeOut(600);
        init();
    })

    // 기본 메인페이지 로딩
    $('#container_wrap').load('main.html');

    // 레이어 팝업창
    if( $.cookie('pop') != 'none' ){
        $('#popup_wrap').fadeIn(300);
    }
    // (오늘 하루 열지 않기 + 닫기) 버튼 클릭시
    $('#popup_wrap button').on('click', function(){
        var bool = $('#popup_wrap input').prop('checked');
        if( bool ){
            $.cookie('pop', 'none', { expires: 1});
        }
        $('#popup_wrap').fadeOut(300);
    })

    // HOME, 로그인, 회원가입
    $('.user_box > li > a').on('click', function(e){
        e.preventDefault();
        let url = $(this).attr('href');
        $('#container').remove();
        $('#container_wrap').load(url);
    })

    // 로고 클릭시
    $('h1.logo > a').on('click', function(e){
        e.preventDefault();
        let url = $(this).attr('href');
        $('#container').remove();
        $('#container_wrap').load(url);
    })

    // 서브메뉴 클릭시
    $('.depth2 > ul > li > a').on('click', function(e){
        e.preventDefault();
        let url = $(this).attr('href');
        $('#container').remove();
        $('#container_wrap').load(url);

        $('.depth2').slideUp();
        $('.depth1 > ul > li.on').removeClass('on');

        if( $('html').hasClass('mobile') ){
            $('.hd_nav_wrap').removeClass('on');
            $('.hd_nav').slideUp();
        }
    })

    // 스크롤바 넓이 제거
    let deviceSize = 768;
    function scrollOX(status){
      $("html").css({
        overflowY: status,
    });
    }
    let swh = scrollOX("hidden"),
      sws = scrollOX("scroll"),
      swd = swh - sws;
    if (swd > 0) {
      deviceSize = deviceSize - swd;
    }

    init();

    function init(){
        let ww = $(window).width();
        if( ww > deviceSize && !$('html').hasClass('pc') ){  // pc
            $('html').addClass('pc').removeClass('mobile');
            $('.hd_nav_wrap').removeClass('on');
            $('.depth1 > ul > li').removeClass('on');
            $('.open_gnb, .depth2').hide();
            $('.hd_nav').show().css({
                top: '50%'
            })
        } else if( ww<=deviceSize && !$('html').hasClass('mobile') ){  // mobile
            $('html').addClass('mobile').removeClass('pc');
            $('.open_gnb').show();
            $('.hd_nav').hide().css({
                top:'120px'
            })
        }
    }

    // resize시 변화
    $(window).on('resize', function(){
        init();
    })

    // 큰 화면에서는 호버시 작은 화면에서는 클릭시 depth2 나타나게 함
    $('.depth1 > ul > li').hover(
        function(){
            if( $('html').hasClass('pc') ){
                $(this).find('.depth2').stop().slideDown(300);
            }      
        },
        function(){
            if( $('html').hasClass('pc') ){
                $(this).find('.depth2').stop().slideUp(300);
            }
        }
    )
    $('.depth1 > ul > li > a').on('click', function(e){
        e.preventDefault();
        if( $('html').hasClass('mobile') ){
            $(this).parent().toggleClass('on');
            $(this).parent().find('.depth2').stop().slideToggle(300);
            $(this).parent().siblings().each(function(){
                $(this).find('.depth2').slideUp(300);
                $(this).removeClass('on');
            })
        }
    })


    // 햄버거바 클릭시
    $('.open_gnb').on('click', function(){
        $('.hd_nav').slideToggle(300);
        $('.hd_nav_wrap').toggleClass('on');
        if( !$('.hd_nav_wrap').hasClass('on') ){
            $('.depth2').stop().slideUp(300);
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
    let sct;
	$(window).scroll(function(){

        sct = $(this).scrollTop();
        winHeight = $(this).height();

        if(sct > 100){
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

        // 애니메이션 효과 세팅 (PC에서만 적용, 모바일 화면에서는 해제)
        if( $('#container').children().is('#intro_pg') && $('html').hasClass('pc') ){  // intro
            introScroll();
        } else if( $('html').hasClass('mobile') ){
            $('#company .company_center').css({
                opacity: '1'
            })
            $('#company .company_bottom').css({
                opacity: '1'
            })
        }

        if( $('#container').children().is('#ceo_pg') && $('html').hasClass('pc') ){  // ceo
            ceoScroll();
            ceoScroll2();
            ceoScroll3();
            ceoScroll4();
        } else if( $('html').hasClass('mobile') ){
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
        let cc = $('.company_center').offset().top - $(this).height()/2;
        if( sct >= cc ){
            $('.company_center').addClass('on');
        } else if( sct === 0 ){
            $('.company_center').removeClass('on');
        }

        let cb = $('.company_bottom').offset().top - $(this).height()/2;
        if( sct >= cb ){
            $('.company_bottom').addClass('on');
        } else if( sct === 0 ){
            $('.company_bottom').removeClass('on');
        }
    }

    // ceo 애니메이션 효과 / img
    function ceoScroll(){
        let ceoMain = $('.ceo_message_wrap1').offset().top - $(this).height()/2;
        if( sct >= ceoMain ){
            $('.ceo_message_wrap1 img').addClass('on');
        } else if(sct === 0){
            $('.ceo_message_wrap1 img').removeClass('on');
        }
    }
    function ceoScroll2(){
        let ceoMain = $('.ceo_message_wrap2').offset().top - $(this).height()/2;
        if( sct >= ceoMain ){
            $('.ceo_message_wrap2 img').addClass('on');
        } else if( sct === 0 ){
            $('.ceo_message_wrap2 img').removeClass('on');
        }
    }

    // ceo 애니메이션 효과 / text
    function ceoScroll3(){
        let ceoMain = $('.ceo_message_wrap1').offset().top - $(this).height()/2;
        if( sct >= ceoMain ){
            $('.ceo_message1').addClass('on');
        } else if( sct === 0 ){
            $('.ceo_message1').removeClass('on');
        }
    }
    function ceoScroll4(){
        let ceoMain = $('.ceo_message_wrap2').offset().top - $(this).height()/2;
        if( sct >= ceoMain ){
            $('.ceo_message2').addClass('on');
        } else if( sct === 0 ){
            $('.ceo_message2').removeClass('on');
        }
    }


})(jQuery)