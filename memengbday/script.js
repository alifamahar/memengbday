document.getElementById('name-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah pengiriman form secara default

  const nameInput = document.getElementById('name-input').value.trim(); // Mengambil nilai input nama dan menghapus spasi ekstra
  const bdayInput = document.getElementById('bday-input').value.trim(); // Mengambil nilai input tanggal lahir
  const ageInput = document.getElementById('age-input').value.trim(); // Mengambil nilai input usia
  const errorMessage = document.getElementById('error-message');
  const successMessage = document.getElementById('success-message');
  const submitButton = document.getElementById('submit-btn'); // Tombol untuk mengganti teks

  // Cek apakah nama, tanggal lahir dan usia yang dimasukkan benar
  if (nameInput.toLowerCase() === 'meyfa dwi rizka' && bdayInput.toLowerCase() === '20 mei 2011' && ageInput === '14') {
      // Tampilkan pesan sukses
      successMessage.style.display = 'block'; // Tampilkan pesan sukses
      successMessage.textContent = 'Anjay bener'; // Tampilkan teks jawaban benar
      successMessage.style.color = 'green'; // Ganti warna pesan menjadi hijau

      // Sembunyikan pesan error jika benar
      errorMessage.style.display = 'none'; 

      // Ubah teks tombol menjadi "Lanjut"
      submitButton.textContent = 'Lanjut lah oi';

      // Menambahkan event listener untuk tombol "Lanjut"
      submitButton.addEventListener('click', function() {
          window.location.href = 'kuis2.html'; // Arahkan ke halaman berikutnya
      });
  } else {
      // Sembunyikan pesan sukses jika salah
      successMessage.style.display = 'none'; 

      // Tampilkan pesan error
      errorMessage.style.display = 'block'; // Tampilkan pesan error
  }
});

// Select elements
const triggerImage = document.getElementById('trigger-image');
const infoCard = document.getElementById('info-card');
const overlay = document.getElementById('overlay');
const closeCardButton = document.getElementById('close-card');

// Show card and overlay when the image is clicked
triggerImage.addEventListener('click', () => {
  infoCard.classList.add('visible'); // Tambahkan kelas untuk transisi
  overlay.style.display = 'block'; // Tampilkan overlay
});

// Hide card and overlay when "Close" button is clicked
closeCardButton.addEventListener('click', () => {
  infoCard.classList.remove('visible'); // Hapus kelas untuk transisi keluar
  overlay.style.display = 'none'; // Sembunyikan overlay
});

// Optional: Hide card and overlay when overlay is clicked
overlay.addEventListener('click', () => {
  infoCard.classList.remove('visible'); // Hapus kelas untuk transisi keluar
  overlay.style.display = 'none'; // Sembunyikan overlay
});

triggerImage.addEventListener('click', () => {
  infoCard.classList.add('visible');
  overlay.classList.add('visible'); // Tambahkan kelas visible pada overlay
});

closeCardButton.addEventListener('click', () => {
  infoCard.classList.remove('visible');
  overlay.classList.remove('visible'); // Hapus kelas visible pada overlay
});

overlay.addEventListener('click', () => {
  infoCard.classList.remove('visible');
  overlay.classList.remove('visible'); // Hapus kelas visible pada overlay
});
