//load document on ready
document.addEventListener("DOMContentLoaded", function() {
    // Get the menu button and the sidebar
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");

    const sidebar = document.getElementById("sidebar");

    // Add slide transition to sidebar
    sidebar.style.transition = "left 0.4s cubic-bezier(0.4, 0, 0.2, 1)";

    // Add click event listener to the menu button
    openMenuBtn.addEventListener("click", function() {
        sidebar.style.left = "0px"; // Show the sidebar with animation
    });
    // Add click event listener to the close button
    closeMenuBtn.addEventListener("click", function() {
        sidebar.style.left = "-360px"; // Hide the sidebar with animation
    });
});