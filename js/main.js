$(document).ready(function () {
    $('.fade_open').on('click', function() {
        $('#fade').popup({
            transition: 'all 0.3s',
            scrolllock: true,
            onclose: function () {
            }
        });
    });
});