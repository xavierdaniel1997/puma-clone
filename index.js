function toggleMobileMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    var menuIcon = document.getElementById("menuIcon");
    mobileMenu.classList.toggle("show");

    if (mobileMenu.classList.contains("show")) {
        menuIcon.classList.replace("bi-list", "bi-x");
    } else {
        menuIcon.classList.replace("bi-x", "bi-list");
    }
}
