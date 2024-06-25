const dropdownToggle = document.querySelector('#dropdown-toggle');
const navUL = document.querySelector('#navUL');
const menuButtons = document.querySelector('#menu-buttons');

dropdownToggle.addEventListener('click', function () {
  if (dropdownToggle.classList.contains('show')) {
    dropdownToggle.classList.remove('show');
    dropdownToggle.style.transform = 'rotate(0deg)';
    dropdownToggle.style.paddingRight = '0';
    dropdownToggle.style.transition = 'transform 0.5s';
    navUL.style.flexDirection = 'row';
    navUL.style.flexWrap = 'nowrap';
  } else {
    dropdownToggle.classList.toggle('show');
    dropdownToggle.style.paddingRight = '.5em';
    dropdownToggle.style.transform = 'rotate(90deg)';
    dropdownToggle.style.transition = 'transform 0.5s';
    navUL.style.flexDirection = 'column';
    navUL.style.justifyContent = 'flex-start';
    navUL.style.maxHeight = '20em';
    if (screen.width < 900) {
      navUL.style.flexWrap = 'nowrap';
    } else {
      navUL.style.flexWrap = 'wrap';
      navUL.style.overflowX = 'none';
      menuButtons.marginBottom = '1em';
    }
  }
});
