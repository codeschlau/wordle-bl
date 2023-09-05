<?php
$wordCloud = isset($_POST['wordCloud']) ? $_POST['wordCloud'] : '';

if ($wordCloud) {
    // Speichere die Wortwolke in einer Datei oder einer Datenbank
    // Hier verwenden wir eine Datei, um es einfach zu halten
    file_put_contents('word_cloud.txt', $wordCloud);
    echo "Word cloud saved successfully.";
} else {
    // Lade die gespeicherte Wortwolke
    $wordCloud = file_get_contents('word_cloud.txt');
    echo $wordCloud;
}
?>
