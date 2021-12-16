(function($){

    // 아이디, 비밀번호 input 박스
    $('#login_id').attr('placeholder', '3 ~ 5글자 내외로 입력해주세요.');
    $('#login_pw').attr('placeholder', '첫 글자는 대소문자만, 반드시 영문, 숫자, 특수문자를 모두 포함해 입력해주세요.');


    // 폼 유효성 체크
    $('form').submit(function(){

        // 아이디 유효성 체크
        var loginId = $('#login_id').val();

        if (loginId.length >= 3 && loginId.length <= 5){

            for (var i = 0; i < loginId.length; i++){

                var ch = loginId.charAt(i);

                if ( !(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z') && !(ch >= 'A' && ch <= 'Z') ){

                    alert('아이디는 대소문자, 숫자만 가능합니다.');
                    $('#login_id').focus().select();

                    return false;
                    
                }

                $('#login_pw').focus().select();  // 아이디 유효성 통과시 비밀번호로 포커스 이동
            }
        } else{
            alert('아이디는 3 ~ 5글자 내외로 입력해주세요.');
            $('#login_id').focus().select();
            return false;
        }

        // 비밀번호 유효성 체크
        var loginPw = $('#login_pw').val();
        var loginPwCk = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/;

        if (loginPw.length === 0){

            alert('비밀번호를 입력해주세요,');
            $('#login_pw').focus().select();

        } else if (loginPw.length >= 10 && loginPw.length <= 12){

            if ( !loginPwCk.test(loginPw) ){

                alert('첫 글자는 대소문자만, 반드시 영문, 숫자, 특수문자를 모두 포함해 입력해주세요');
                $('#login_pw').focus().select();
            }

        } else{

            alert('비밀번호 글자 수는 10글자 ~ 12글자 범위입니다.');
            $('#login_pw').focus().select();

            return false;

        }

        return false;
        
    })

})(jQuery)