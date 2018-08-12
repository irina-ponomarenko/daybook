$(document).ready(function () {

    //------------------------модальні вікна------------------//


    $('.teacher_open').on('click', function () {
        $('#teacher').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
    $('.parents_open').on('click', function () {
        $('#parents').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.student_open').on('click', function () {
        $('#student').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.user_open').on('click', function () {
        $('#user').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $('.login_open').on('click', function () {
        $('#login').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });

    $(function () {
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-36251023-1']);
        _gaq.push(['_setDomainName', 'jqueryscript.net']);
        _gaq.push(['_trackPageview']);

        (function () {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();
    });

    $('.question-form').hover(function () {
            $('.hint').show();
        },
        function () {
            $('.hint').hide();
        });

    $('.male').hover(function () {
            $(this)
                .parent()
                .find('.hint-male')
                .addClass('open-hint-male');
        },
        function () {
            $('.hint-male').removeClass('open-hint-male');
        });
    $('.female').hover(function () {
            $(this)
                .parent()
                .find('.hint-male')
                .addClass('open-hint-male');
        },
        function () {
            $('.hint-male').removeClass('open-hint-male');
        });


    $('.tree-dots').click(function () {
        $(this).addClass('class-delete-active')
            .parent()
            .find('.class-delete')
            .addClass('class-delete-active');
    });

    $('.class-delete').on('click', function () {
        $(this).removeClass('class-delete-active');
        $('.tree-dots').removeClass('class-delete-active');
    });
    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".class-delete").length > 0) {
            return false;
        }

        else $(".class-delete").removeClass('class-delete-active');
        $('.tree-dots').removeClass('class-delete-active');
        clickCount = 1;
    });


    $('.add-class').click(function () {
        $(this)
            .parent()
            .find('.add-class-modal')
            .addClass('add-class-active');
    });

    $('.cancel').on('click', function () {
        $('.add-class-modal').removeClass('add-class-active');
    });

    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".add-class-modal").length > 0) {
            return false;
        }

        else $(".add-class-modal").removeClass('add-class-active');
        clickCount = 1;
    });


    $('.new-student').click(function () {
        $(this)
            .parent()
            .find('.add-student-modal')
            .addClass('add-student-active');
    });

    $('.cancel').on('click', function () {
        $('.add-student-modal').removeClass('add-student-active');
    });

    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".add-student-modal").length > 0) {
            return false;
        }

        else $(".add-student-modal").removeClass('add-student-active');
        clickCount = 1;
    });



    $('.some-class').click(function () {
        $(this).toggleClass('active-some');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-some").length > 0) {
            return false;
        }
        else {
            $('.some-class').removeClass('active-some');
        }
    });
    $('.add-some-modal').click(function (e) {
        e.stopPropagation();
    });

    $('.sortable-new').click(function () {
        $(this)
            .parent()
            .find('.add-class-modal-sort')
            .addClass('add-sort-active');
    });

    $('.cancel').on('click', function () {
        $('.add-class-modal-sort').removeClass('add-sort-active');
    });

    $(document).mouseup(function (e) {
        if (jQuery(e.target).closest(".add-class-modal-sort").length > 0) {
            return false;
        }

        else $(".add-class-modal-sort").removeClass('add-sort-active');
        clickCount = 1;
    });


    $('.user-registered').click(function () {
        $(this).toggleClass('active-user-cabinet');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-user-cabinet").length > 0) {
            return false;
        }
        else {
            $('.user-registered').removeClass('active-user-cabinet');
        }
    });

    $('.add-new-class').click(function () {
        $(this)
            .parent()
            .find('.drop-down-add-new-class')
            .toggleClass('active-class-block');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-class-block").length > 0) {
            return false;
        }
        else {
            $('.drop-down-add-new-class').removeClass('active-class-block');
        }
    });
    $('.drop-down-add-new-class').click(function (e) {
        e.stopPropagation();
    });

    $('.add-note-active').click(function () {
        $(this)
            .parent()
            .find('.drop-down-note')
            .toggleClass('active-note');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-note").length > 0) {
            return false;
        }
        else {
            $('.drop-down-note').removeClass('active-note');
        }
    });
    $('.drop-down-note').click(function (e) {
        e.stopPropagation();
    });

    $('.btn-setting').click(function () {
        $(this)
            .parent()
            .find('.drop-down-setting')
            .toggleClass('active-setting');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-setting").length > 0) {
            return false;
        }
        else {
            $('.drop-down-setting').removeClass('active-setting');
        }
    });
    $('.drop-down-setting').click(function (e) {
        e.stopPropagation();
    });

    $('.btn-redactor').click(function () {
        $(this)
            .addClass('btn-redactor-active')
            .parent()
            .find('.drop-down-redactor')
            .toggleClass('active-redactor');
    });

    $(document).mouseup(function (e) {
        if ($(e.target).closest(".active-redactor").length > 0) {
            return false;
        }
        else {
            $('.drop-down-redactor').removeClass('active-redactor');
            $('.btn-redactor').removeClass('btn-redactor-active');
        }
    });
    $('.drop-down-redactor').click(function (e) {
        e.stopPropagation();
    });

    $('.search-btn').on('click', function () {
        $('.search-header').toggleClass('open-search');
    });
    $('.close-search').on('click', function () {
        $('.search-header').removeClass('open-search');
    });
    $(document).mouseup(function (e) {
        if ($(e.target).closest(".open-search").length > 0) {
            return false;
        }
        else {
            $('.search-header').removeClass('open-search');
        }
    });

    let data = [
        'Історія україни',
        'Історія мистецтва',
        'Приклад три',
        'Приклад чотири',
        'Приклад П’ять'
    ];

    $('#autocomplete').autocomplete({
        lookup: data
    });

    $('select').customSelect();

    $('.class-delete').click(function () {
        $().toastmessage('showSuccessToast', "Клас видалено.");
    });

    $('.copy-text').click(function (){
        $('').toastmessage('showToast', { type: 'notice', text: "Pre-код скопійовано.", closeText: '' });
    });



    $(function(){
        $('#wrapper').jScrollPane();
    });


    $(function()	{
        $('.text-center').click(function(e)	{
            var t = e.target || e.srcElement;
            var elm_name = t.tagName.toLowerCase();
            if(elm_name == 'input')	{return false;}
            var val = $(this).html();
            var code = '<input type="text" id="edit" value="'+val+'" />';
            $(this).empty().append(code);
            $('#edit').focus();
            $('#edit').blur(function()	{
                var val = $(this).val();
                $(this).parent().empty().html(val);
            });
        });
    });
    $(window).keydown(function(event){
        if(event.keyCode == 13) {
            $('#edit').blur();
        }
    });

    $('.table-journal td').hover( function() {
        $(this).parent()
            .find('.btn-book')
            .addClass('btn-book-active');
    }, function() {
        $(this).parent()
            .find('.btn-book')
            .removeClass('btn-book-active');
    });
});