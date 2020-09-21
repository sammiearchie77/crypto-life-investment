$(document).ready(function() {

    // navigation bar toggle

    // hide all shown on load
    $('#trade-portion').hide()
    $('#education-portion').hide()
    $('#about-portion').hide()

    // moibile hide
    $('#nav-link-mobile').hide()
    $('#trade-portion-mobile').hide()
    $('#education-portion-mobile').hide()
    $('#about-portion-mobile').hide()

    // trade head toggle
    $('#trade-link').click(function() {
        $('#trade-portion').toggle()
    })

    // education portion
    $('#education-link').click(function() {
        $('#education-portion').toggle()
    })

    // about portion
    $('#about-link').click(function() {
        $('#about-portion').toggle()
    })

    /* 
       mobile nav bar 
    */
    $('#nav-toggle').click(function() {
        $('#nav-link-mobile').toggle()
    })

    // sticky navigation 
    $(window).scroll(function() {
        // when the scroll  is 150px do the following
        if ($(this).scrollTop() > 150) {
            // add sticky nav class to the custom nav bar
            $('#custom-nav').addClass('sticky-nav');

            // hide all the open trade/analytics/about company that might be opened
            // $('#trade-portion').hide()
            // $('#education-portion').hide()
            // $('#about-portion').hide()
        } else {
            $('#custom-nav').removeClass('sticky-nav')
        }
    })

    // validation for user information 
    $('#id_username').change(function(){
        var username = $(this).val();
        $.ajax({
            url:'/validate/username',
            data: {
                'username': username
            },
            dataType: 'json',
            success: function(data) {
                if (data.is_taken){
                    alert('I am already a user')
                }
            }
        })
    })
})