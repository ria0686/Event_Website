const searchInput = document.getElementById('searchInput');
const events = document.querySelectorAll('.event');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    events.forEach(event => {
        const titleElement = event.querySelector('h3');
        const paragraphs = event.querySelectorAll('p');
        const titleText = titleElement.textContent.toLowerCase();
        let matched = titleText.includes(searchTerm);

        paragraphs.forEach(p => {
            if (!matched) matched = p.textContent.toLowerCase().includes(searchTerm);
        });

        if (matched) {
            event.style.display = '';
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            titleElement.innerHTML = titleElement.textContent.replace(regex, '<mark>$1</mark>');
            paragraphs.forEach(p => {
                p.innerHTML = p.textContent.replace(regex, '<mark>$1</mark>');
            });
        } else {
            event.style.display = 'none';
        }
    });
});

