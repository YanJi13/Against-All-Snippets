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
// Load initial kill count when the page is loaded
window.onload = fetchKillCount();

document.getElementById("quest-01").addEventListener("click", function() {
    window.location.href = "quest-01.html";
});
document.getElementById("quest-02").addEventListener("click", function() {
    window.location.href = "quest-02.html";
});
document.getElementById("quest-03").addEventListener("click", function() {
    window.location.href = "quest-03.html";
});