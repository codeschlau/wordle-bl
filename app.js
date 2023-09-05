document.addEventListener('DOMContentLoaded', () => {
    const createButton = document.getElementById('createButton');
    const roomCodeInput = document.getElementById('roomCodeInput');
    const roomCodeDisplay = document.getElementById('roomCode');

    createButton.addEventListener('click', () => {
        // Hiermit kannst du einen neuen Raum erstellen und den Raumcode anzeigen
        fetch('create_room.php')
            .then(response => response.text())
            .then(roomCode => {
                roomCodeDisplay.textContent = roomCode;
            });
    });
    joinButton.addEventListener('click', () => {
        const roomCode = roomCodeInput.value;
        // Simuliere das Hinzufügen von Wörtern zur Wortwolke
        const newWord = prompt('Enter a word:');
        if (newWord) {
            // Hier könntest du AJAX verwenden, um das Wort an den Server zu senden
            // und die aktualisierte Wortwolke abzurufen.
            wordCloud.textContent += ' ' + newWord;
        }
    });
});

