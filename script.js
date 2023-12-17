// function closeDropdown() {
//   var dropdown = document.querySelector('.sideLinksMob');
//   dropdown.style.display = 'none';
// }


document.addEventListener("DOMContentLoaded", function () {
  const toggleMenuBtn = document.getElementById("closeIcon");
  const menu = document.querySelector(".sidelinksMob");

  toggleMenuBtn.addEventListener("click", function () {
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });
});
