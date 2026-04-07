// INIT EMAILJS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // ganti nanti
})();

function scrollToForm() {
  document.getElementById("pesan").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    email: document.getElementById("email").value,
    telepon: document.getElementById("telepon").value,
    alamat: document.getElementById("alamat").value,
    pesan: document.getElementById("pesanText").value,
  };

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
    .then(function() {
      alert("Pesanan berhasil dikirim!");
      document.getElementById("bookingForm").reset();
    }, function(error) {
      alert("Gagal mengirim: " + JSON.stringify(error));
    });
});