const element = document.getElementById('hamburger');
element.addEventListener('click', function(){
    const navmenu = document.querySelector('#nav-menu');
    element.classList.toggle('hamburger-active')
    navmenu.classList.toggle('hidden')
})

// navbar ffixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if(window.pageYOffset > fixnav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}

