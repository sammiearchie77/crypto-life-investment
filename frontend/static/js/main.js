$(document).ready(function(){

// navigation bar toggle

    // hide all shown 
    $('#trade-portion').hide()
    $('#education-portion').hide()
    $('#about-portion').hide()
    
    // trade head toggle
    $('#trade-link').click(function(){
        $('#trade-portion').toggle()
    })

    // education portion
    $('#education-link').click(function(){
        $('#education-portion').toggle()
    })

    // about portion

    $('#about-link').click(function(){
        $('#about-portion').toggle()
    })
    // $('.btn-close').click(function(){
    //     $('#trade-portion').hide()
    //     console.log('hide')
    // })
})