document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuBtn = document.getElementById("navList");
    const menu = document.querySelector(".sidebar");

    toggleMenuBtn.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });
});
