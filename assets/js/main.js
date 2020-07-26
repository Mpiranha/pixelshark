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

    setInterval(watchWorkspace, 1000);

    function watchWorkspace () {
        if (workspaces.length > 0) {
            $('.add-workspace-wrap').css('display', 'none');
        }
    }
})();