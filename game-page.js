// Load character data from localStorage
let characterData = JSON.parse(localStorage.getItem('characterData')) || {};

// Initialize character data if it doesn't exist
if (!characterData.money) {
    characterData.money = 0;  // Default money value
}

// Display character information on the page
const characterNameDisplay = document.getElementById('character-name');
const characterGenderDisplay = document.getElementById('character-gender');
const characterMoneyDisplay = document.getElementById('character-money');
const actionButton = document.getElementById('action-btn');
const actionMessage = document.getElementById('action-message');

// Career selection
const chooseCareerBtn = document.getElementById('choose-career-btn');
const careerOptions = document.getElementById('career-options');
const careerNameDisplay = document.getElementById('career-name');
const workButton = document.getElementById('work-btn');

// Check if character data exists
if (characterData) {
    // Set the character name, gender, and money
    characterNameDisplay.textContent = characterData.name;
    characterGenderDisplay.textContent = characterData.gender;
    characterMoneyDisplay.textContent = `$${characterData.money}`;

    // If no career is selected, display career options
    if (!characterData.career) {
        careerNameDisplay.textContent = 'Unemployed';
        workButton.disabled = true;  // Disable work button if no career
    } else {
        // If career exists, display the career name and enable work button
        careerNameDisplay.textContent = characterData.career.name;
        workButton.disabled = false;  // Enable work button
    }
} else {
    // If no character data is found, alert the user and redirect to character creation
    alert('No character data found. Please create a character first.');
    window.location.href = 'character-creator.html'; // Redirect to character creation page
}

// Career options toggle
chooseCareerBtn.addEventListener('click', () => {
    careerOptions.style.display = careerOptions.style.display === 'none' ? 'block' : 'none';
});

// Career buttons functionality
const careerButtons = document.querySelectorAll('.career-option');
careerButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const selectedCareer = btn.getAttribute('data-career');
        const salary = parseInt(btn.getAttribute('data-salary'));

        // Set the character career and salary
        characterData.career = {
            name: selectedCareer,
            salary: salary
        };

        // Save updated character data to localStorage
        localStorage.setItem('characterData', JSON.stringify(characterData));

        // Update the UI with the selected career
        careerNameDisplay.textContent = selectedCareer;
        careerOptions.style.display = 'none';  // Hide career options
        workButton.disabled = false;  // Enable work button

        alert(`You are now a ${selectedCareer}, earning $${salary} per day.`);
    });
});

// Work button functionality (earn money)
workButton.addEventListener('click', () => {
    // Add the salary to the character's money
    characterData.money += characterData.career.salary;

    // Update the character's money in localStorage
    localStorage.setItem('characterData', JSON.stringify(characterData));

    // Update the money display
    characterMoneyDisplay.textContent = `$${characterData.money}`;

    // Display an action message
    actionMessage.textContent = `You worked as a ${characterData.career.name} and earned $${characterData.career.salary}!`;
    actionMessage.style.display = 'block';
});
