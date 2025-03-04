// Fetch initial kill count on page load
async function fetchKillCount() {
    try {
        const response = await fetch('/get_kc');
        const data = await response.json();
        document.getElementById('killCount').textContent = data.killCount;
    } catch (error) {
        console.error("Error fetching kill count:", error);
    }
}

// Increment kill count when button is clicked
async function incrementKillCount() {
    try {
        const response = await fetch('/add_kc', { method: 'PUT' });
        const data = await response.json();
        document.getElementById('killCount').textContent = data.newKillCount;
    } catch (error) {
        console.error("Error updating kill count:", error);
    }
}

// Load initial kill count when the page is loaded
window.onload = fetchKillCount;

