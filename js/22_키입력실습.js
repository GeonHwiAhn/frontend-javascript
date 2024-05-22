 //키 다운 background = lightblue
        //키 다운 color = lightpink

        //키 업 background = lightpink
        //키 업 color = lightblue
        
        function 키다운기능 (e) {
            // e : 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
            // e.key : 입력된 키를 확인

            let 숫자값저장; //인덱스 값을 저장할 변수

            switch(e.key) {
                case 'a' : 숫자값저장 = 0;
                    break;
                case 's' : 숫자값저장 = 1;
                    break;
                case 'd' : 숫자값저장 = 2;
                    break;
                case 'f' : 숫자값저장 = 3;
                    break;
                default  : 
                    return; //함수종료
            }

            //숫자벊와 일치하는 key  배열의 태그색을 변경
            키들[숫자값저장].style.background = "lightblue";
            키들[숫자값저장].style.color = "lightpink";

        };


             function 키업기능 (e) {
            // e : 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
            // e.key : 입력된 키를 확인

            let 숫자값저장; //인덱스 값을 저장할 변수

            switch(e.key) {
                case 'a' : 숫자값저장 = 0;
                    break;
                case 's' : 숫자값저장 = 1;
                    break;
                case 'd' : 숫자값저장 = 2;
                    break;
                case 'f' : 숫자값저장 = 3;
                    break;
                default  : 
                    return; //함수종료
            }

            //숫자벊와 일치하는 key  배열의 태그색을 변경
            키들[숫자값저장].style.background = "lightpink";
            키들[숫자값저장].style.color = "lightblue";
        };

        document.addEventListener("keydown",키다운기능);
        document.addEventListener("keyup",키업기능);