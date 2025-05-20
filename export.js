(function() {
    try {
        const data = localStorage.getItem("infinite-craft-data");

        if (data === null || data.trim() === "") {
            alert("No Infinite Craft data found to export.");
        } else {
            prompt("Copy your Infinite Craft data below:", data);
        }
    } catch (e) {
        alert("Error: Could not access localStorage. Export failed. Please ensure your browser settings allow localStorage access.");
        console.error("localStorage access error:", e);
    }
})();
