document.addEventListener('DOMContentLoaded', () => {
    const createRoomButton = document.getElementById('createRoomButton');
    const joinRoomButton = document.getElementById('joinRoomButton');
    const roomCodeInput = document.getElementById('roomCodeInput');
    const wordInput = document.getElementById('wordInput');
    const addWordButton = document.getElementById('addWordButton');
    const wordCloud = document.getElementById('wordCloud');
    let roomCode = '';

    createRoomButton.addEventListener('click', () => {
        // Generiere einen zufälligen 5-stelligen Raumcode
        roomCode = generateRoomCode();
        alert(`Your room code is: ${roomCode}`);
    });

    joinRoomButton.addEventListener('click', () => {
        const enteredCode = roomCodeInput.value;
        if (enteredCode === roomCode) {
            alert('Joined the room successfully.');
        } else {
            alert('Invalid room code. Please try again.');
        }
    });

    addWordButton.addEventListener('click', () => {
        const word = wordInput.value;
        if (word) {
            // Füge das Wort zur Wortwolke hinzu
            wordCloud.textContent += ' ' + word;
            wordInput.value = ''; // Leere das Eingabefeld
        }
    });

    // Funktion zur Generierung eines zufälligen 5-stelligen Codes
    function generateRoomCode() {
        let code = '';
        do {
            code = Math.floor(10000 + Math.random() * 90000); // Zufallszahl von 10000 bis 99999
        } while (code === roomCode); // Stelle sicher, dass der Code eindeutig ist
        return code;
    }
});
