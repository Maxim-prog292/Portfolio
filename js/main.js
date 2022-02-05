let git = document.querySelector('.github'),
    insta = document.querySelector('.insta'),
    vk = document.querySelector('.vk'),
    mail = document.querySelector('.mail'),
    phone = document.querySelector('.phone');



git.addEventListener('click', function toGitHub(){
            window.open('https://github.com/Maxim-prog292');
});

insta.addEventListener('click', function toInsta(){
            window.open('https://www.instagram.com/pictirid/');
});

vk.addEventListener('click', function toVK(){
            window.open('https://vk.com/simaksi');
});

mail.addEventListener('click', function writeMe() {
    window.open('mailto:mmmaks_19@mail.ru?subject=Добрый%20день!');
});

phone.addEventListener('click', function cellMe() {
    window.open('tel:+7-900-588-50-27');
});

window.onload = function() {
    let preloader = document.getElementById('preloader'),
        hidden = document.getElementById('hidden');       
    preloader.style.display = 'none';
    hidden.style.overflowY = 'scroll';
};