function mostrar_Menu() {
    let menuMobile = document.querySelector('.menu-mobile')
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "assets/icons8_menu_32.png"
    }
    else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/icons8_close_32.png"

    }
}
/* Alternate Mode
const mode = document.querySelector('.mode_icon')

mode.addEventListener('click', () => {
    if(mode.)
})
*/