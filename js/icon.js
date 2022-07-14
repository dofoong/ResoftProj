
// 아이콘 8개
    //push : list의 i번째 추가
    if (window.matchMedia("screen and (max-width: 1217px)").matches) {
        $(function () {
            $(".customer_list").hide();
            var array = [];
    var list = document.getElementsByClassName('customer_list');

    for (var i = 0; i < list.length; i++) {
        array.push(list[i]);
    }
    //slice
    var visiArray = [];
    visiArray = array.slice(0, 8); //0~7번째 가져옴
    visiArray = visiArray.concat(array.slice(8, 16).reverse()); //8~15번째 8개 거꾸로 바꾼 후 결합
    visiArray = visiArray.concat(array.slice(16, 24)); //16~23번째 8개 결합
    
    var second = 0;
    for (var i = 0; i < visiArray.length; i++) {
        second = second + 0.1;
        visiArray[i].setAttribute('data-wow-delay', second + 's')
        visiArray[i].style.display = 'block';
    }
    
    var load = document.getElementsByClassName('load')[0];
//숨겨진 아이콘
    load.addEventListener('click', function (e) {
        e.preventDefault();
        var hiddenArray = [];
        hiddenArray = array.slice(24, 27);
        
        var hSecond = 0;
        for (var i = 0; i < hiddenArray.length; i++) {
            hSecond = hSecond + 0.1;
            hiddenArray[i].setAttribute('data-wow-delay', hSecond + 's');
            hiddenArray[i].style.display = 'block';
        }
        load.style.display="none";
        
        window.scrollTo(0, window.pageYOffset + 1);
        window.scrollTo(0, window.pageYOffset - 1);
    });
});
}

// 아이콘 4개
    if (window.matchMedia("screen and (max-width: 940px)").matches) {
        $(function () {
            $(".customer_list").hide();
            var list = document.getElementsByClassName('customer_list');
            var hiddenArray = [];
            var openArray = [];
            $(".customer_list").slice(0, 12).show();
            for (var i = 0; i < list.length; i++) {
                if (list[i].style.display == "none") {
                    hiddenArray.push(list[i]);
                } else {
                    openArray.push(list[i]);
                }
            }
    // 보여진 아이콘
        var second = 0
        for (var i = 0; i < openArray.length; i++) {
            second = second + 0.1
            openArray[i].setAttribute('data-wow-delay', second + 's');
        }
    //숨겨진 아이콘
        var hSecond = 0;
        $(".load").click(function (e) {
            e.preventDefault();
            for (var i = 0; i < hiddenArray.length; i++) {
                hSecond = hSecond + 0.1;
                hiddenArray[i].setAttribute('data-wow-delay', hSecond + 's');
                hiddenArray[i].style.display = 'block';
                if ($(".customer_list:hidden").length == 0) {
                    $(".load").hide();
                }
            };
        });
        window.scrollTo(0, window.pageYOffset + 1);
        window.scrollTo(0, window.pageYOffset - 1);
    })
}
function preventClick(e){
    e.preventDefault()

}

