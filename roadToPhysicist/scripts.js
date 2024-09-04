function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("leftMenu");
  const button = document.querySelector(".w3-button.w3-teal.w3-xlarge.w3-left");

  // Check if the sidebar is open and the click was outside the sidebar and the button
  if (
    sidebar.style.display === "block" &&
    !sidebar.contains(event.target) &&
    !button.contains(event.target)
  ) {
    closeLeftMenu();
  }
});
