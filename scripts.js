document.addEventListener("DOMContentLoaded", function () {
    const toggleMenuBtn = document.getElementById("menuButtonMob");
    const menu = document.querySelector(".sidelinksMob");

    toggleMenuBtn.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });
});
