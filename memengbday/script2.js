document.getElementById('date-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah pengiriman form secara default

    const dateInput = document.getElementById('date-input').value.trim(); // Mengambil nilai input dan menghapus spasi ekstra
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    const submitButton = document.getElementById('submit-btn'); // Tombol untuk mengganti teks
    if (dateInput.trim().toLowerCase() === '04 desember 2002') {
      successMessage.style.display = 'block';
      successMessage.textContent = 'Anjay bener';
      successMessage.style.color = 'green';
      errorMessage.style.display = 'none';
      submitButton.textContent = 'Lanjut lah oi';
  
      submitButton.addEventListener('click', function() {
          window.location.href = 'selamat.html';
      });
  } else {
      successMessage.style.display = 'none';
      errorMessage.style.display = 'block';
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