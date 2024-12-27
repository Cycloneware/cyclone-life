// Get buttons
const newGameButton = document.getElementById('new-game-btn');
const loadGameButton = document.getElementById('load-game-btn');

// New Game Button - Direct to Character Creator
newGameButton.addEventListener('click', () => {
    window.location.href = "character-creator.html"; // You can change the URL to the actual character creator page
});

// Load Game Button - Choose a JSON file
loadGameButton.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';  // Ensure it accepts JSON files

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const gameData = JSON.parse(e.target.result);
                loadGameProgress(gameData);  // Function to handle loading the game progress
            };
            reader.readAsText(file);
        }
    });

    fileInput.click(); // Trigger file input dialog
});

// Function to handle loading game progress from JSON
function loadGameProgress(gameData) {
    // Example of loading character data from the JSON file
    console.log("Game Data Loaded:", gameData);

    // For instance, if the game data has a character object
    // You can use it to populate the game state
    if (gameData && gameData.character) {
        console.log("Character Loaded:", gameData.character);
        // Redirect or load the game state based on the JSON
        window.location.href = "game-page.html";  // Adjust to the actual game page
    } else {
        alert("Invalid game data.");
    }
}
