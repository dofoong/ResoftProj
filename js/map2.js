        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(35.87179, 128.62492), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
                mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
            };

        // 지도를 생성한다 
        var map = new kakao.maps.Map(mapContainer, mapOption);
        // 마커 이미지의 주소
        var markerImageUrl = 'https://raw.githubusercontent.com/dofoong/ResoftProj/main/img/%EC%A7%80%EB%8F%84%EB%A7%88%EC%BB%A4.png',
            markerImageSize = new kakao.maps.Size(220, 45), // 마커 이미지의 크기
            markerImageOptions = {
                offset: new kakao.maps.Point(33, 100)// 마커 좌표에 일치시킬 이미지 안의 좌표
            };

        // 마커 이미지를 생성한다
        var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

        // 지도에 마커를 생성하고 표시한다
        var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(35.87179, 128.62492), // 마커의 좌표
            image: markerImage, // 마커의 이미지
            map: map // 마커를 표시할 지도 객체
        });
