$(document).ready(function(){
    $('.burgerMenu').on('click', event => {
        $('.linkBox').addClass('burgerDropdown').css({'display': 'flex'})
        $('.windowCover').css({'display': 'block'})
    })

    $('.windowCover').on('click', event => {
        $('.windowCover').css({'display': 'none'})
        $('.linkBox').removeClass('burgerDropdown').css({'display': 'none'})
    })

})