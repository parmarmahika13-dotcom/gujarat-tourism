
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation menu
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });
    }

    // Automatically show the current year in the footer
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Use an existing local photo if a card photo is missing
    document.querySelectorAll("img").forEach(function (img) {

        img.addEventListener("error", function () {

            // Prevent repeatedly trying the same failed image
            if (img.dataset.fallbackApplied === "true") {
                img.style.display = "none";
                return;
            }

            img.dataset.fallbackApplied = "true";

            // Use the existing image files in your project
            if (img.closest("#ahmedabad") ||
                img.alt.toLowerCase().includes("sabarmati")) {

                img.src = "image/sabarmati-riverfront.jpeg";

            } else {
                img.src = "image/laxmi-palace.jpeg";
            }
        });
    });

});
