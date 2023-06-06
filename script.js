document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll(".menu-item");

    for (var i = 0; i < menuItems.length; i++) {
        var menuItem = menuItems[i];

        menuItem.addEventListener("mouseover", function () {
            var submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        menuItem.addEventListener("mouseout", function () {
            var submenu = this.querySelector(".submenu");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    }
});