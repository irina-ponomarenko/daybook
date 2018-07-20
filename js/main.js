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
    $('.user-registered').click(function () {
        $(this).addClass('active-user-cabinet');
        $('.drop-down-user').show();
    });
    $(document).mouseup(function (e){
        if (jQuery(e.target).closest(".drop-down-user").length > 0){
            return false;
        }

        else $(".drop-down-user").hide();
        $('.user-registered').removeClass('active-user-cabinet');
        clickCount = 1;
    });
});