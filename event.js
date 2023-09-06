document.addEventListener("DOMContentLoaded", function () {
    const descriptionElement = document.getElementById("description");

    // Simulate fetching description content
    fetch("description.txt")
        .then((response) => response.text())
        .then((data) => {
            descriptionElement.textContent = data;
        })
        .catch((error) => {
            console.error("Error fetching description:", error);
            descriptionElement.textContent = "Description not available.";
        });
});
