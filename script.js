const selectElement = (element) => document.querySelector(element);
selectElement('.micon').addEventListener( 'click', () => {
  selectElement('nav').classList.toggle('active');
});
