const dropdownToggle = document.querySelector('#dropdown-toggle');
const navUL = document.querySelector('#navUL');
const menuButtons = document.querySelectorAll('.menu-buttons');
const currentPage = window.location.pathname;

//Menu Page JS
if (currentPage.endsWith('menu.html') || currentPage.endsWith('menu')) {
  dropdownToggle.addEventListener('click', function () {
    if (dropdownToggle.classList.contains('show')) {
      dropdownToggle.classList.remove('show');
      dropdownToggle.style.transform = 'rotate(0deg)';
      dropdownToggle.style.paddingRight = '0';
      dropdownToggle.style.transition = 'transform 0.5s';
      navUL.style.flexDirection = 'row';
      navUL.style.flexWrap = 'nowrap';
      navUL.style.overflowX = 'auto';
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
        navUL.style.overflowX = 'hidden';
        menuButtons.forEach((button) => {
          button.style.marginBottom = '1em';
        });
      }
    }
  });

  //return to top button
  document.addEventListener('DOMContentLoaded', () => {
    const hiddenElement = document.getElementById('return-to-top');

    function checkScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;

      if (scrollPosition > 200) {
        hiddenElement.style.display = 'block';
      } else {
        hiddenElement.style.display = 'none';
      }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);

    hiddenElement.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
}

function goHome() {
  window.location.href = '/';
}

// about page slideshow

if (currentPage.endsWith('about.html') || currentPage.endsWith('about')) {
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName('mySlides');
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    x[slideIndex - 1].style.display = 'block';
  }
}
