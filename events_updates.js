const searchInput = document.getElementById('searchInput');
const events = document.querySelectorAll('.event');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    events.forEach(event => {
        const text = event.innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            event.style.display = '';
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            event.innerHTML = event.innerText.replace(regex, '<mark>$1</mark>');
        } else {
            event.style.display = 'none';
        }
    });
});
