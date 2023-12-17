document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuBtn = document.getElementById("dropBtn");
    const menu = document.querySelector(".dropMenu");

    toggleMenuBtn.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });
});
