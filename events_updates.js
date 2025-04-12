const searchInput = document.getElementById('searchInput');
const events = document.querySelectorAll('.event');

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    events.forEach(event => {
        const text = event.innerText.toLowerCase();
        event.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});
