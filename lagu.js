// Mendapatkan elemen audio
var audioPlayer = document.getElementById("audioPlayer");

// Memeriksa apakah ada status pemutaran sebelumnya di localStorage
window.onload = function() {
  var audioStatus = localStorage.getItem("audioStatus");
  if (audioStatus === "playing") {
    audioPlayer.play();
  } else if (audioStatus === "paused") {
    audioPlayer.pause();
  }
};

// Menyimpan status pemutaran audio setiap kali berhenti atau diputar
audioPlayer.addEventListener("play", function() {
  localStorage.setItem("audioStatus", "playing");
});

audioPlayer.addEventListener("pause", function() {
  localStorage.setItem("audioStatus", "paused");
});

// Untuk mengatur jika audio berhenti atau di-reset ketika halaman ditutup atau dipindah
window.onbeforeunload = function() {
  localStorage.removeItem("audioStatus");  // Hapus status saat halaman ditutup
};
window.onload = () => {
    const startButton = document.getElementById('startButton');
    setTimeout(() => {
        startButton.style.opacity = 1; // Gambar akan muncul setelah 2 detik
    }, 1000); // 2000ms = 2 detik
};