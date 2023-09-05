document.addEventListener('DOMContentLoaded', () => {
    const wordInput = document.getElementById('wordInput');
    const addWordButton = document.getElementById('addWordButton');
    const wordCloud = document.getElementById('wordCloud');

    addWordButton.addEventListener('click', () => {
        const word = wordInput.value;
        if (word) {
            // Füge das Wort zur Wortwolke hinzu
            wordCloud.textContent += ' ' + word;
            wordInput.value = ''; // Leere das Eingabefeld
        }
    });
});
