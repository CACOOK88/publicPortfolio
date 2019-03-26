const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')
const juKwitYetImg = document.getElementById('juKwitYetImg')
const onYourMarkImg = document.getElementById('onYourMarkImg')

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu)

juKwitYetImg.addEventListener('mouseover', function() {
  juKwitYetImg.src = '/assets/img/juKwitYetProfile.jpeg'
})
juKwitYetImg.addEventListener('mouseleave', function() {
  juKwitYetImg.src = '/assets/img/juKwitYetHome.jpeg'
})

onYourMarkImg.addEventListener('mouseover', function() {
  onYourMarkImg.src = '/assets/img/onYourMarkRaces.jpeg'
})
onYourMarkImg.addEventListener('mouseleave', function() {
  onYourMarkImg.src = '/assets/img/onYourMark.jpeg'
})


function toggleMenu(){
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}