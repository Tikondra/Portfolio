function headerMenu() {

  var popup = document.querySelector('.main-nav');
  var openPopupButton = document.querySelector('.page-header__btn');
    

  openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.toggle('main-nav_show');    
  });
};

headerMenu();