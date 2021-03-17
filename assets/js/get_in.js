const get_btn = document.querySelector('.get_in');
const close_btn = document.querySelector('.close_btn');
const social = document.querySelector('.social-section');
get_btn.addEventListener('click', () => {
   social.classList.toggle('visible')
});
close_btn.addEventListener('click', () => {
   social.classList.remove('visible')
});