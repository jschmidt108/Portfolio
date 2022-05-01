
const openMenu = () => {
    $('#myLinks').css('display', 'block')
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
