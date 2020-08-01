(function () {

    let workspaces = [];
    $('.form-elem').each(function (index) {
        console.log($(this));
        $(this).on('focus', function (event) {
            $(event.target).parent().parent('.form-outter').addClass('form-focused');
        });
        $(this).on('blur', function (event) {
            $(event.target).parent().parent('.form-outter').removeClass('form-focused');
        });
    });

    $('#workspace-form').on('submit', function (event) {
        event.preventDefault();
        let value = $('#workspace-input').val();
        if (value.length > 0) {
            workspaces.push({
                name: value
            });
            $('#modal-create').modal('hide');
            $('#workspace-input').val('');
            $('.workspaces-wrap').css('display', 'flex');
            console.log(workspaces);
        } else {
            $('.error').text('Please enter a name');
            $('.workspace-input').focus();
        }
    });

    $('.user-options').on('click', function () {
        $('.menu-outter').toggleClass('visible');
    });

    $('#select-all').on('change', function (event) {
        if (event.target.checked) {
            $('.check-box').each(function () {
                $(this).attr('checked', true);
            });
        } else {
            $('.check-box').each(function () {
                $(this).attr('checked', false);
            });
        }
    });

    $('#platform').on('change', function () {
        if ($(this).val() === 'other') {
            $('#pixel-id-wrap').css('display', 'none');
            $('#embed-wrap').css('display', 'block');
        } else {
            $('#pixel-id-wrap').css('display', 'block');
            $('#embed-wrap').css('display', 'none');
        }
    });

    // $('.more-icons').on('click', function () {
    //     $('.options').toggleClass('show');
    // });
    $('.more-icons').each(function () {
        $(this).on('click', function () {
            $(this).children('.options').toggleClass('show');
        });
    });

    setInterval(watchWorkspace, 1000);

    function watchWorkspace() {
        if (workspaces.length > 0) {
            $('.add-workspace-wrap').css('display', 'none');
        }
    }
})();