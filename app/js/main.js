$(document).ready(function () {


    //header-menu
    $(function () {
        var headerMenu = $('.header__menu'),
            headerNav = $('.header__nav');

        headerMenu.click(function () {
            if ($(this).hasClass('-active')) {
                $(this).removeClass('-active');
                headerNav.removeClass('-active');
            } else {
                $(this).addClass('-active');
                headerNav.addClass('-active');
            }
        });
    });

    //header-item
    $(function () {
        var itemSub = $('.menu__item.-has-sublist'),
            sublist = itemSub.find('.sublist');

        itemSub.click(function () {
            $(this).toggleClass('-active');
            sublist.slideToggle();
        });
    });

    //tabs
    $(function () {
        var tabs = $('.tabs');

        if (tabs.length) {
            tabs.each(function () {
                var headerItem = $('.tabs__header .list__item'),
                    contentItem = $('.tabs__wrapper .tabs__item'),
                    contentWrapper = $('.tabs__wrapper');

                headerItem.click(function () {
                    headerItem.removeClass('-active');
                    $(this).addClass('-active');

                    var tabId = $(this).attr('data-id');

                    contentItem.removeClass('-active');
                    contentWrapper.find('#' + tabId).addClass('-active');
                });
            });
        }
    });

    //reviews
    $(function () {
        var reviewsBlock = $('.reviews-block');

        if (reviewsBlock.length) {
            reviewsBlock.each(function () {
                var reviewsItemHidden = $(this).find('.reviews__item.-hidden-item'),
                    reviewsButton = $(this).find('.reviews__button .link');

                reviewsButton.click(function () {
                    if ($(this).hasClass('-active')) {
                        reviewsItemHidden.fadeOut();
                        $(this).text('Показать еще');
                        $(this).removeClass('-active');
                    } else {
                        reviewsItemHidden.fadeIn();
                        $(this).text('Скрыть');
                        $(this).addClass('-active');
                    }
                });
            });
        }
    });

    //F.A.Q. script
    $(function () {
        $('.faq__question').click(function () {
            if ($(this).parent().hasClass('-active')) {
                $(this).parent().removeClass('-active');
                $(this).parent().find('.faq__answer').slideUp();
            } else {
                $(this).parent().addClass('-active');
                $(this).parent().find('.faq__answer').slideDown();
            }
        });
    });

    //link anchor script
    $(function () {
        $("a.anchor-link[href*='#']").click(function () {
            var elementClick = $(this).attr("href"),
                headerHeight = $('.header').innerHeight();

            if ($(elementClick).length) {
                var destination = $(elementClick).offset().top;
                $('html,body').animate({scrollTop: destination - headerHeight}, 1100);


                if ($(this).parents('.header__nav') && $(window).width() < 992) {
                    $(this).parents('.header__nav').removeClass('-active');
                    $('.ov').hide();
                }
            }

            return false;
        });
    });

    //form-action

    $(function () {
        var form = $('.form-action');

        if (form.length) {
            form.each(function () {
                var selectArrow = $('.select-arrow'),
                    selectList = $('.select-list'),
                    selectListItem = $('.select-list .list__item');

                selectArrow.click(function () {
                    selectList.toggleClass('-active');
                    $(this).toggleClass('-active');
                });

                selectListItem.click(function () {
                    selectList.prepend($(this));
                    selectArrow.removeClass('-active');
                    selectList.removeClass('-active')
                });
            });
        }
    });
});