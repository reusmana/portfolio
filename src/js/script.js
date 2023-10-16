const element = document.getElementById('hamburger');
const navmenu = document.querySelector('#nav-menu');
element.addEventListener('click', function(){
    element.classList.toggle('hamburger-active')
    navmenu.classList.toggle('hidden')
})

// navbar ffixed
window.onscroll = function(){
    const totop = document.querySelector('#totop');
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if(window.pageYOffset > fixnav){
        header.classList.add('navbar-fixed')
        totop.classList.remove('hidden')
        totop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        totop.classList.remove('flex')
        totop.classList.add('hidden')
    }
}

// next
window.addEventListener('click', function(e){
    if(e.target != element && e.target != navmenu){
        element.classList.remove('hamburger-active')
        navmenu.classList.add('hidden')
    }
})

const darktoggle = document.querySelector('#darktoggle');
const html = document.querySelector('html')

darktoggle.addEventListener('click', function(){
    if(darktoggle.checked){
        localStorage.theme = 'dark'
        html.classList.add('dark')
    }else{
        localStorage.theme = 'light'
        html.classList.remove('dark')
    }
})


//move toogle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darktoggle.checked = true
} else {
    darktoggle.checked = false
}

