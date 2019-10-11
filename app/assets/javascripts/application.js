//input block label
$('input:checkbox').click(function() {
    	$(this).parent().toggleClass('active');
});

//input block label
if($('.form-group--radio').length > 0) {
    $('.form-group--radio > input').on('click', function() {
        $('.form-group--radio').removeClass('display');
        $(this).parent().addClass('display');
    });

    $('.option--sub > input').on('click', function() {
        $('.option--sub').removeClass('display');
        $(this).parent().addClass('display');
    });

} else {
    $('input:radio').click(function() {
        $('input:radio[name='+$(this).attr('name')+']').parent().removeClass('active');
            $(this).parent().addClass('active');
    });
}

// Select - other
if( $('.form-control').length > 0 ) {
    $('select').on('change', function() {
        $(this).parent().removeClass('active');
        var value = this.value;
        if( value == 'Other' ) {
            $(this).parent().addClass('active');
        }
    });
}