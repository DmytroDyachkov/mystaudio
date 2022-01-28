
$(function(){
	// $.pixlayout({
	// 	src: "/app.png", 
	// 	opacity: 0.3,
    //     top: 0,
    //     center: true,
    //     left: 240,
    //     right: 235,
	// 	pervious: true,
	// 	clip: true,
	// 	show: true
    // }, "body");
    
    // Модальные окна
    function modal(){
        $('.modal_btn_close,.modal_close,.close_btn,.btnCloseModal').click(function(){
            $('.modal_window').fadeOut();
            $('body,head,html').css('overflow-x','hidden')
            $('body,head,html').css('overflow-y','auto')
        });
        $('.open_modal').click(function(){
            var id_btn = $(this).attr('monolit-modal');
            $('.modal_window').each(function(){
                if($(this).attr('monolit-modal') == id_btn){
                    $('body,head,html').css('overflow','hidden')
                    $(this).fadeIn();
                }
            })
        })
    }
    modal()

    // Табы
    function tab2s(){
        $('.tabs__title').click(function(){
            if($(this).hasClass('active')){
                $('.tabs__title').removeClass('active');
                $('.tabs__content').slideUp(300)
            }else{
                $('.tabs__title').parent('.item').removeClass('active');
                $('.tabs__title').removeClass('active');
                $(this).parent('.item').addClass('active');
                $(this).addClass('active');
                $('.tabs__content').slideUp(300)
                var id_btn = $(this).attr('monolit-tabs');
                $('.tabs__content').each(function(){
                    if($(this).attr('monolit-tabs') == id_btn){
                        $(this).slideDown(300);
                    }
                })
            }
        })
        }
    tab2s()

    // Увеличение картинок
    $('.fancybox-media,.content_wp a:has(img)').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
            maxWidth    : '100%',
            maxHeight   : 'auto',  
            padding     : 0,
            margin      : 0,           
        helpers : {
          media : {
              youtube : {
                   params : {
                       theme : 'light',
                             vq    : 'hd720',
                             css   : {
                                'body' : 'color: #fff'
                             } 
                   }
              } 
          }
        }
    });

    // Анимация слайдера
    function animateSlider(elements,currentSlide){
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        if(currentSlide != false){
            currentSlide.each(function(){
                var $this = $(this);
                var $animationType = 'animate__animated ' + $this.attr('data-animationOut');
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            })
        }
        elements.each(function(){
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animate__animated ' + $this.data('animation');
            $this.css({
              'animation-delay': $animationDelay,
              '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        })
    }
    $("#animation-slider").on("beforeChange", function(e, slick, currentSlide, nextSlide) {
        var currentElements = $('.slick-slide[data-slick-index="' + currentSlide + '"]').find('[data-animationOut]');
        var $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        animateSlider($animatingElements,currentElements);    
    })
    $('#animation-slider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('.slick-slide:first-child').find('[data-animation]');
        animateSlider($firstAnimatingElements,false);    
    });

    // slick
    $('.hero-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        swipeToSlide: true,
        dots: true,
        appendDots: $(".slick-m-dots--main"),
        variableWidth: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
            }
          },
        ]
    });
    $('.cat-list-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        infinite: false,
        dots: true,
        appendDots: $(".slick-m-dots--cat-list"),
        prevArrow: $(".slick-m-prev--cat-list"),
        nextArrow: $(".slick-m-next--cat-list"),
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1115,
            settings: {
                variableWidth: false,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
          },
        ]
    });
    $('.article-products-corusel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: true,
        fade: true,
        dots: true,
        appendDots: $(".slick-m-dots--article-products"),
        prevArrow: $(".slick-m-prev--article-products"),
        nextArrow: $(".slick-m-next--article-products"),
        responsive: [
          {
            breakpoint: 800,
            settings: {
            }
          },
        ]
    });

    $('.slick-m-dots--products').each(function(i){
        var elem = $(this);
        elem.addClass('slick-m-dots--products-'+i);
    });
    $('.products-corusel').each(function(i){
        var elem = $(this);
        elem.addClass('products-corusel-'+i);
        $('.products-corusel-'+i).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            swipeToSlide: true,
            infinite: true,
            dots: true,
            arrows: false,
            appendDots: $(".slick-m-dots--products-"+i),
            variableWidth: false,
            responsive: [
              {
                breakpoint: 800,
                settings: {
                }
              },
            ]
        });
    });
    
    
    // Указываем текущую ссылку
    var location = window.location.href;
    // var cur_url = '/' + location.split('/').pop();
    var cur_url = location;
 
    $('.menu li').each(function () {
        var link = $(this).find('a').attr('href');
 
        if (cur_url == link) {
            $(this).addClass('active');
            $(this).find('a').removeAttr('href');
        }
    });

    // Меню бургер
    $('.burger').on('click',function(){
        if($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0)
            $(this).parents('.header').toggleClass('active');
            $(this).parents('.sidebar').toggleClass('active');
            $(this).parents('.sidebar-parent').toggleClass('active');
        } else {
            $(this).attr('data-click-state', 1)
            $(this).parents('.header').toggleClass('active');
            $(this).parents('.sidebar').toggleClass('active');
            $(this).parents('.sidebar-parent').toggleClass('active');
        }
    });

    // Открытие дочернего меню
    $('a.parent').click(function(){
        $(this).parent('li').toggleClass('active');
        $(this).siblings('ul').slideToggle();
    })

    // адаптив в js
    if($(document).width() > 1366 ? true : false){
        $('.page__content-wrapper').theiaStickySidebar({
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
        });
        $('.page__sidebar-wrapper').theiaStickySidebar({
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
        });
        // $('.block__content-wrapper').theiaStickySidebar({
        //     additionalMarginTop: 20,
        //     additionalMarginBottom: 20,
        // });
        // $('.block__sidebar-wrapper').theiaStickySidebar({
        //     additionalMarginTop: 20,
        //     additionalMarginBottom: 20,
        // });
    };
    
    // сайд бары

    // Скрол до пункта
    $('.scroll[href^="#"]').click(function() { 
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top
        }, {
           duration: 600,
           easing: "swing"
        });
        return false;
    });

    // wow анимация
    var wow = new WOW(
        {
          mobile:       false,   
          live:         true,     
        }
    );
    wow.init();

    $('input,textarea').on('input keyup', function () {
        var Value = $(this).val();
        if(Value == ''){
            $(this).removeClass('true');
            $(this).addClass('false'); 
        }else{ 
            $(this).removeClass('false'); 
            $(this).addClass('true'); 
        }
    });

    // if($(document).width() > 800 ? true : false){
    //     var rellax2 = new Rellax('.article-head .container', {
    //         center: true,
    //         speed: -3,
    //     });
    // }
    // if($(document).width() > 800 ? true : false){
    //     $(window).scroll(function(){
    //         $('.hero-carousel__item').bgscroll({
    //         });
    //         // $('.news-prev').bgscroll({
    //         // });
    //         $('.article-head').bgscroll({

    //         });
    //     })
    // };


    // поиск по select
    // $(".js-selectize").chosen({no_results_text: "Oops, nothing found!"}); 
    // мокски
    $(".tel_mask").inputmask({
        mask: "+7 (999) 999-99-99",
        greedy: true,
        clearMaskOnLostFocus: false,
        clearIncomplete: true
    });
  
   
    
    // Количество в корзине
    // Убавляем кол-во по клику
    $('.quantity_inner .bt_minus').click(function() {
        var el_input = $(this).parent().find('.quantity');
        var sep = el_input.attr('data-sep');
        var count = parseInt(el_input.val()) - 1;
        count = count < 1 ? 1 : count;
        el_input.val(count +' '+ sep);
        el_input.attr('data-count',parseInt(count))
    });
    // Прибавляем кол-во по клику
    $('.quantity_inner .bt_plus').click(function() {
        var el_input = $(this).parent().find('.quantity');
        var sep = el_input.attr('data-sep');
        var count = parseInt(el_input.val()) + 1;
        count = count > parseInt(el_input.data('max-count')) ? parseInt(el_input.data('max-count')) : count;
        el_input.val(parseInt(count) +' '+ sep);
        el_input.attr('data-count',parseInt(count))
    }); 
    // Убираем все лишнее и невозможное при изменении поля
    $('.quantity_inner .quantity').bind("change keyupel_input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
        if (this.value == "") {
            this.value = 1;
        }
        if (this.value > parseInt($(this).data('max-count'))) {
            this.value = parseInt($(this).data('max-count'));
        }    
    });   
    // Карта
    // ymaps.ready(init);

    // var geocode = [55.755532, 37.658499];

    // function init() {
    //     // Создание карты.
    //     var myMap = new ymaps.Map("map", {
    //         // Координаты центра карты.
    //         // Порядок по умолчнию: «широта, долгота».
    //         center: geocode	,
    //         // Уровень масштабирования. Допустимые значения:
    //         // от 0 (весь мир) до 19.
    //         zoom: 17,
    //         // Элементы управления
    //         // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
    //         controls: [

    //             'zoomControl', // Ползунок масштаба
    //             // 'rulerControl', // Линейка
    //             // 'routeButtonControl', // Панель маршрутизации
    //             // 'trafficControl', // Пробки
    //             // 'typeSelector', // Переключатель слоев карты
    //             'fullscreenControl', // Полноэкранный режим

    //             // Поисковая строка
    //             new ymaps.control.SearchControl({
    //                 options: {
    //                     // вид - поисковая строка
    //                     size: 'large',
    //                     // Включим возможность искать не только топонимы, но и организации.
    //                     provider: 'yandex#search'
    //                 }
    //             })

    //         ]
    //     });

    //     // myMap.behaviors.disable('scrollZoom');
    //     // После того как метка была создана, добавляем её на карту.
    //     // myMap.geoObjects.add(myPlacemark);
    //     var myPlacemark = new ymaps.Placemark([55.75596, 37.65821], null,{
    //         iconLayout: 'default#image',
    //         iconImageHref: "../assets/images/logoM.svg",
    //         iconImageSize: [44, 54],
    //         // iconImageOffset: [-15, -44],
    //     });
    //     myMap.geoObjects.add(myPlacemark);
    //     var myPlacemark = new ymaps.Placemark([55.75513, 37.65779], null,{
    //         iconLayout: 'default#image',
    //         iconImageHref: "../assets/images/logoMA.svg",
    //         iconImageSize: [34, 48],
    //         // iconImageOffset: [-15, -44],
    //     });
    //     myMap.geoObjects.add(myPlacemark);
    // }
});