const openMenu = () => {
    $('#myLinks').css('display', 'block')

    $('#myLinks').css('background', 'rgb(10,10,10)')
    $('#myLinks').css('background', 'linear-gradient(bottom, rgba(10,10,10,1), rgba(10,10,10,.4))')
    $('#myLinks').css('background', '-webkit-linear-gradient(bottom, rgba(10,10,10,1), rgba(10,10,10,.4))')
    $('#myLinks').css('background', '-moz-linear-gradient(bottom, rgba(10,10,10,1), rgba(10,10,10,.4))')
    
    $('.container').css('position', 'relative')
    $('.hamburger').css('display', 'none')
    $('.exit').css('display', 'block')

}


const closeMenu = () => {
    $('#myLinks').css('display', 'none')
    $('.container').css('position', 'absolute')
    $('.hamburger').css('display', 'block')
    $('.exit').css('display', 'none')
}



$(()=>{

    $('.hamburger').on('click', openMenu);
    $('.exit').on('click', closeMenu);
  });
