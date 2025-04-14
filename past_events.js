document.getElementById("searchInput").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const events = document.querySelectorAll(".event");

    events.forEach(event => {
        const titleElement = event.querySelector("h2");
        const descriptionElement = event.querySelector("p");

        if (titleElement.textContent.toLowerCase().includes(searchValue) || descriptionElement.textContent.toLowerCase().includes(searchValue)) {
            event.style.display = "";
            titleElement.innerHTML = highlightText(titleElement.textContent, searchValue); 
            descriptionElement.innerHTML = highlightText(descriptionElement.textContent, searchValue);
        } else {
            event.style.display = "none";   
            titleElement.innerHTML = titleElement.textContent;
            descriptionElement.innerHTML = descriptionElement.textContent;
        }    
    });
});

function highlightText(text, searchValue) {
    const regex = new RegExp(`(${searchValue})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>'); // Wrap matching text in <mark> tags for highlighting
}


// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const darkModeButton = document.querySelector(".dark-mode-toggle");
    
    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "🌞 Light Mode";
    } else {
        darkModeButton.textContent = "🌙 Dark Mode";
    }
    
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

window.onload = function() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.querySelector(".dark-mode-toggle").textContent = "🌞 Light Mode";
    }
}