$(document).ready(function () {

    /*  ※  중계 일정  ※  */
    $('.olsc_lst ul').slick({
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        draggable: true,
        speed: 600,
        prevArrow: '.olsc_prev',
        nextArrow: '.olsc_next',
    });

    // * 중계일정 좌우 클릭 이벤트 * 
    // 초기에 prev 버튼 숨김
    $('.olp_scd .olsc_prev').hide();

    // next 버튼 클릭 시 동작
    $('.olp_scd .olsc_next').click(function () {
        $('.olp_scd .olsc_prev').show(); // prev 버튼 보임
        const lastSlide = $('.olp_scd .slick-slide').last();
        if (lastSlide.hasClass('slick-active')) {
            $('.olp_scd .olsc_next').hide(); // 마지막 슬라이드일 때 next 버튼 숨김
        }
    });

    // prev 버튼 클릭 시 동작
    $('.olp_scd .olsc_prev').click(function () {
        $('.olp_scd .olsc_next').show(); // next 버튼 보임
        const firstSlide = $('.olp_scd .slick-slide[data-slick-index="0"]');
        if (firstSlide.hasClass('slick-current')) {
            $('.olp_scd .olsc_prev').hide(); // 첫 번째 슬라이드일 때 prev 버튼 숨김
        }
    });

    /*  ※  경기 목록  ※  */
    $('.olp_tab ul').slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        arrows: true,
        infinite: false,
        draggable: true,
        speed: 1000,
        prevArrow: '.ot_prev',
        nextArrow: '.ot_next',
    });

    //  * 경기 목록 좌우 클릭 이벤트 * 
    const $otPrev = $('.olp_tab_bx .ot_prev');
    const $otNext = $('.olp_tab_bx .ot_next');
    const $olpTabSlides = $('.olp_tab .slick-slide');

    $otPrev.hide();
    $otNext.click(function () {
        $otPrev.show();
        if ($olpTabSlides.last().hasClass('slick-active')) {
            $otNext.hide();
        }
    });
    $otPrev.click(function () {
        $otNext.show();
        if ($olpTabSlides.filter('[data-slick-index="0"]').hasClass('slick-current')) {
            $otPrev.hide();
        }
    });
    
    $('.olp_tab ul li').click(function () {
        const tab_id1 = $(this).attr('data-tab');
        
        $('.olp_list_wrap').css('height', '630px');
        $('.more_down').show();
        
        $('.olp_tab ul li').removeClass('current1');
        $('.olp_list').removeClass('current1');
        $(this).addClass('current1');
        $("#" + tab_id1).addClass('current1');
    });
    
    $('.olp_tab_bx .ot_arrw').click(function () {
        $('.olp_list_wrap').css('height', '630px');
        $('.more_down').show();
    });
    
    /*  ※  경기 영상  ※  */
    if ($(".olp_list li.ol_01").length > 0) {
        $('.olp_list:first-child').addClass('ol_all')
            .nextAll('.olp_list').removeClass('ol_all').addClass('ol_evt')
            .find('ul li:nth-child(4n+6)').css('margin-left', '0');
    }
    
    $('.more_down').click(function () {
        const ollstOthgt = $('.olp_list ul li:nth-child(2)').outerHeight(true);
        $('.olp_list_wrap').css('height', '+=' + ollstOthgt);
        const olpInrHgt = $('.olp_list_wrap').innerHeight();
        const crtlInrHgt = $('.olp_list.current1').innerHeight();
        $('.more_down').toggle(olpInrHgt <= crtlInrHgt);
    });
    
    const olscLst = $('.olsc_lst .slick-slide').length;
    $('.olp_vod .olp_scd .olsc_next').toggle(olscLst > 3);

    //중계 일정 탭 클릭 버튼 
    $('.olsc_tab ul li').click(function () {
        $(this).addClass('c_0195d7').siblings().removeClass('c_0195d7');
    });
    
});
