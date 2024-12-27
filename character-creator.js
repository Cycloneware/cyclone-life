// Get form elements
const characterForm = document.getElementById('character-form');
const nameInput = document.getElementById('name');
const genderInput = document.getElementById('gender');

// Handle form submission
characterForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const characterName = nameInput.value.trim();
    const characterGender = genderInput.value;

    if (characterName) {
        // Save character data to localStorage or prepare JSON
        const characterData = {
            name: characterName,
            gender: characterGender
        };

        // Save character data as JSON to localStorage
        localStorage.setItem('characterData', JSON.stringify(characterData));

        // Optionally, you can store it on the server or Firebase here.

        // Redirect to the game page with the character
        window.location.href = "game-page.html"; // Adjust to the actual game page URL
    } else {
        alert("Please enter a character name.");
    }
});
