function changeColor(element) {
    var menuItems = document.querySelectorAll('#menu-item1');
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove('active');
    });

    element.classList.add('active');
  }
