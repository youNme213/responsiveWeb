(function($){

    // $('*').css({
    //     outline: 'none',
    // })

    $('form').submit(function(){

        // 이름 유효성 체크
        var joinName = $('#join_name').val();
        var joinNameCk = /^[가-힣]+$/;

        if ( !(joinNameCk.test(joinName)) ){
            alert('이름 칸은 한글만 가능합니다.');
            $('#join_name').focus().select();

            return false;
        }

        // 비밀번호 유효성 체크
        var joinTel = $('#join_tel').val();

        if ( !/^\d{10,11}$/.test(joinTel) ){
            alert('전화번호 형식이 맞지 않습니다.');
            $('#join_tel').focus().select();

            return false;
        }

        // 아이디 유효성 체크 (영문 소문자, 숫자 포함 4~10자)
        var joinId = $('#join_id').val();

        if (joinId.length >= 4 && joinId.length <= 10){

            for (var i = 0; i < joinId.length; i++){
                
                var ch = joinId.charAt(i);

                if ( !(ch >= '0' && ch <= '9') && !(ch >= 'a' && ch <= 'z') && !(ch >= 'A' && ch <= 'Z') ){
                    alert('아이디는 대소문자, 숫자만 가능합니다.');
                    $('#join_id').focus().select();

                    return false;
                }

            }

        } else{
            alert('아이디는 4 ~ 10글자 내외로 입력해주세요.');
            $('#join_id').focus().select();

            return false;
        }

        // 비밀번호 유효성 체크
        var joinPw1 = $('#join_pw').val();
        var joinPw2 = $('#join_pw').val();
        var joinPwCk = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/;

        if (joinPw1.length >= 8 && joinPw1.length <= 16){

            if ( !joinPwCk.test(joinPw1) ){
                alert('첫 글자는 영문자만, 반드시 영문, 숫자, 특수문자를 모두 포함하여 주세요');
                $('#join_pw').focus().select();
            }

        } else{
            alert('비밀번호 글자 수는 10글자 ~ 12글자 범위입니다.');
            $('#join_pw').focus().select();

            return false;
        }

        // 비밀번호와 비밀번호 확인 일치여부 점검
        if (joinPw2.length === 0){
            alert('비밀번호 확인을 입력하지 않았습니다.');
            $('#join_pw_check').focus().select();
            
            return false;
        } else if(joinPw1 !== joinPw2){
            alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
            $('#join_pw_check').focus().select();

            return false;
        }

        // 이메일 유효성 체크
        var joinEmail = $('#join_email').val();
        var joinEmailCk = /^[a-z A-Z 0-9]+$/;   // 특수문자 제외

        if ( !joinEmailCk.test(joinEmail) ){
            alert('이메일 형식이 틀립니다');
            $('#join_email').focus().select();

            return false;
        }

        return false;
    })

    // 이메일 직접 입력 선택시에만 활성화
    $('select[title="select"]').on('change', function(){

        if ($(this).find('option:selected').val() !== "selftxt" || $(this).find('option:selected').val() === ""){
            $('.self').attr({
                disabled: 'disabled',
            })
        } else{
            $('.self').removeAttr('disabled');
        }

    })

})(jQuery)