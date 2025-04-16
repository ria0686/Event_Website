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


