AOS.init();

let body = document.querySelector('body');
let iconLove = document.querySelector('.header_icon_love');
let mainModal = document.querySelector('.modal_main_wrapper');
let closeBtn = mainModal.querySelector('.close_btn');

if(iconLove && mainModal){
    iconLove.onclick = () => {
        mainModal.classList.remove('close')
        mainModal.classList.add('open')
        body.classList.add('bodyHidden')
    } 

    closeBtn.onclick = () => {
        mainModal.classList.remove('open')
        mainModal.classList.add('close')
        body.classList.remove('bodyHidden')
    }
}