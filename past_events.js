document.getElementById("searchInput").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const events = document.querySelectorAll(".event");

    events.forEach(event => {
        const title = event.querySelector("h2").textContent.toLowerCase();
        if (title.includes(searchValue)) {
            event.style.display = "";
        } else {
            event.style.display = "none";
        }
    });
});
