$(document).ready(function () {

    //------------------------модальні вікна------------------//


    $('.teacher_open').on('click', function() {
        $('#teacher').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.parents_open').on('click', function() {
        $('#parents').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.student_open').on('click', function() {
        $('#student').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.user_open').on('click', function() {
        $('#user').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.login_open').on('click', function() {
        $('#login').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $(function(){
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
    });

    $('.question-form').hover(function(){
            $('.hint').show();
        },
        function(){
            $('.hint').hide();
        });


    $('.tree-dots').click(function() {
        $(this)
            .parent()
            .find('.class-delete')
            .addClass('class-delete-active');
    });

    $('.class-delete').on('click', function() {
        $(this).removeClass('class-delete-active');
    });
    $(document).mouseup(function (e){
        if (jQuery(e.target).closest(".class-delete").length > 0){
            return false;
        }

        else $(".class-delete").removeClass('class-delete-active');
        clickCount = 1;
    });


    $('.add-class').click(function() {
        $(this)
            .parent()
            .find('.add-class-modal')
            .addClass('add-class-active');
    });

    $('.cancel').on('click', function() {
        $('.add-class-modal').removeClass('add-class-active');
    });

    $(document).mouseup(function (e){
        if (jQuery(e.target).closest(".add-class-modal").length > 0){
            return false;
        }

        else $(".add-class-modal").removeClass('add-class-active');
        clickCount = 1;
    });


    $('.user-registered').click(function () {
        $(this).toggleClass('active-user-cabinet');
    });

    $(document).mouseup(function (e){
        if ($(e.target).closest(".active-user-cabinet").length > 0){
            return false;
        }
        else {
            $('.user-registered').removeClass('active-user-cabinet');
        }
    });

    $('.search-btn').on('click', function () {
        $('.search-header').toggleClass('open-search');
    });
    $('.close-search').on('click', function () {
        $('.search-header').removeClass('open-search');
    });
    $(document).mouseup(function (e){
        if ($(e.target).closest(".open-search").length > 0){
            return false;
        }
        else {
            $('.search-header').removeClass('open-search');
        }
    });





});