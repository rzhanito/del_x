const header = document.querySelector('.header')

document.addEventListener('scroll', () => {
   if (!window.scrollY == 0) {
      header.classList.add('header-scrolled')
   } else {
      header.classList.remove('header-scrolled')
   }
})
