<?php
// Verbindung zur Datenbank herstellen (SQLite)
$db = new SQLite3('rooms.db');

// Generiere einen zufälligen 5-stelligen Code
$roomCode = generateRoomCode($db);

// Füge den Raumcode in die Datenbank ein
$query = "INSERT INTO rooms (code) VALUES ('$roomCode')";
$db->exec($query);

// Gib den erstellten Raumcode zurück
echo $roomCode;

// Funktion zur Generierung eines zufälligen 5-stelligen Codes
function generateRoomCode($db) {
    $code = '';
    do {
        $code = sprintf("%05d", mt_rand(0, 99999));
    } while (codeExists($db, $code));
    return $code;
}

// Überprüfe, ob der Code bereits in der Datenbank existiert
function codeExists($db, $code) {
    $result = $db->querySingle("SELECT COUNT(*) FROM rooms WHERE code = '$code'");
    return $result > 0;
}

// Datenbankverbindung schließen
$db->close();
?>

