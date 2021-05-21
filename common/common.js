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

});
