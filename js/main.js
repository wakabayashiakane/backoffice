$(function () {
    $(window).scroll(function () {
        EachTextAnimeControl();
    });

    $(window).on('load', function () {
        var element = $(".eachTextAnime");

        // spanタグを追加する
        element.each(function () {
            var text = $(this).text();
            var textbox = "";
            text.split('').forEach(function (t, i) {
                if (t !== " ") {
                    if (i < 10) {
                        textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
                    } else {
                        var n = i / 10;
                        textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
                    }
                } else {
                    textbox += t;
                }
            });
            $(this).html(textbox);
        });

        EachTextAnimeControl(); // アニメーションを開始
    });

    function EachTextAnimeControl() {
        // 最初のテキストの処理
        $('.firstText').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                $(this).addClass("appeartext");
            }
        });

        // 2つ目のテキストの処理
        $('.secondText').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                setTimeout(() => {
                    $(this).addClass("appeartext");
                }, 1500); // 1.5秒遅れて表示
            }
        });
    }
});

// スクロール時のイベント
$(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + 100) {
            $(this).css("opacity", "1");
            $(this).css("transform", "translateY(0)");
        }
    });
});

