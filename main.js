
const openMenu = () => {
    $('#myLinks').css('display', 'block')
}

const noMenu = () => {
    $('#myLinks').css('display', 'none')
}

const closeMenu = () => {
    let $noMenu = $('#myLinks').css('display', 'none')
    if ($('#myLinks').css('display', 'block') == true) {
        
    }
}


$(()=>{

    $('.hamburger').on('click', openMenu);
  });
