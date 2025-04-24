const searchInput = document.getElementById("searchInput");
const events = document.querySelectorAll(".event");
const container = document.querySelector(".container");
let noResultsMessage = document.createElement("p");
noResultsMessage.id = "noResultsMessage";
noResultsMessage.textContent = "No matching events found!";
noResultsMessage.style.textAlign = "center";
noResultsMessage.style.color = "#cc0000";
noResultsMessage.style.fontSize = "18px";
noResultsMessage.style.display = "none"; // Initially hidden
container.appendChild(noResultsMessage);

searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    let found = false;

    events.forEach(event => {
        const titleElement = event.querySelector("h3");
        const paragraphs = event.querySelectorAll("p");
        const titleText = titleElement.textContent.toLowerCase();
        let matched = titleText.includes(searchTerm);

        paragraphs.forEach(p => {
            if (!matched) matched = p.textContent.toLowerCase().includes(searchTerm);
        });

        if (matched) {
            event.style.display = ""; // Show event
            found = true;
            const regex = new RegExp(`(${searchTerm})`, "gi");
            titleElement.innerHTML = titleElement.textContent.replace(regex, "<mark>$1</mark>");
            paragraphs.forEach(p => {
                p.innerHTML = p.textContent.replace(regex, "<mark>$1</mark>");
            });
        } else {
            event.style.display = "none"; // Hide event
        }
    });

    // Show or hide "No Results" message based on search results
    noResultsMessage.style.display = found ? "none" : "block";
});

// **Modal and Registration Functionality**
const registerButtons = document.querySelectorAll(".register-button");
const modal = document.getElementById("registerModal");
const closeModal = document.querySelector(".close-button");
const eventNameInput = document.getElementById("eventName");
const form = document.getElementById("registerForm");

// Open modal and populate event name when "Register" button is clicked
registerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const eventName = this.getAttribute("data-event");
        eventNameInput.value = eventName;
        modal.style.display = "block"; // Show modal
    });
});

// Close modal on 'X' click
closeModal.addEventListener("click", function () {
    modal.style.display = "none"; // Hide modal
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none"; // Hide modal
    }
});

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🎉 Registration successful! Check your inbox for confirmation.");
    modal.style.display = "none"; // Close modal
    form.reset(); // Reset form fields
});
