// Load character data from localStorage
const characterData = JSON.parse(localStorage.getItem('characterData'));

// Display character information on the page
const characterNameDisplay = document.getElementById('character-name');
const characterGenderDisplay = document.getElementById('character-gender');
const actionButton = document.getElementById('action-btn');
const actionMessage = document.getElementById('action-message');

// Check if character data exists
if (characterData) {
    // Set the character name and gender
    characterNameDisplay.textContent = characterData.name;
    characterGenderDisplay.textContent = characterData.gender;
} else {
    // If no character data is found, alert the user and redirect to character creation
    alert('No character data found. Please create a character first.');
    window.location.href = 'character-creator.html'; // Redirect to character creation page
}

// Action button functionality
actionButton.addEventListener('click', () => {
    // Perform some action in the game (this is just a placeholder message)
    actionMessage.textContent = `You performed an action, ${characterData.name}!`;
    actionMessage.style.display = 'block';
});
