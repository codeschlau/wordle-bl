<?php
// Simuliere das Speichern der Wörter und Generieren der Wortwolke
$words = ['apple', 'banana', 'cherry', 'dog', 'elephant']; // Beispielwörter
shuffle($words); // Zufällige Reihenfolge
$wordCloud = implode(' ', $words);
echo json_encode(['wordCloud' => $wordCloud]);
?>
