const searchInput = document.getElementById('searchInput');
const events = document.querySelectorAll('.event');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    events.forEach(event => {
        // Extract and store original title and description
        const titleElement = event.querySelector('h3');
        const descriptionElement = event.querySelector('p');
        const titleText = titleElement.textContent.toLowerCase();
        const descriptionText = descriptionElement.textContent.toLowerCase();

        // Check if search term exists in title or description
        if (titleText.includes(searchTerm) || descriptionText.includes(searchTerm)) {
            event.style.display = ''; // Show event if match is found

            // Highlight matches in the title
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            titleElement.innerHTML = titleElement.textContent.replace(regex, '<mark>$1</mark>');

            // Highlight matches in the description
            descriptionElement.innerHTML = descriptionElement.textContent.replace(regex, '<mark>$1</mark>');
        } else {
            event.style.display = 'none'; // Hide event if no match is found
        }
    });
});
