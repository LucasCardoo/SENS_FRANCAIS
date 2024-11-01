function playAudio(file) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = file;
    audioPlayer.play();
}