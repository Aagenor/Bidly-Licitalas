document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-box");
    const searchButton = document.querySelector(".btn-search");
    const searchInput = document.querySelector(".input-search");

    searchButton.addEventListener("click", function () {
        searchBox.classList.toggle("active");
        if (searchBox.classList.contains("active")) {
            searchInput.focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchBox.contains(event.target)) {
            searchBox.classList.remove("active");
        }
    });
});

function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close the dropdown when clicking outside
document.addEventListener("click", function (event) {
    const dropdown = document.querySelector(".dropdown-menu");
    const hamburger = document.querySelector(".hamburger-icon");

    if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
//Footer date
document.getElementById("year").textContent = new Date().getFullYear();
