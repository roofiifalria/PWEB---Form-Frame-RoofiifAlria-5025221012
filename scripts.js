// Validasi untuk memastikan kata sandi dan konfirmasi kata sandi cocok
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Ambil nilai dari kata sandi dan konfirmasi kata sandi
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    // Jika kata sandi dan konfirmasi tidak cocok, tampilkan pesan error
    if (password !== confirmPassword) {
        document.getElementById("error-message").textContent = "Kata sandi tidak cocok!";
        document.getElementById("error-message").classList.remove("hidden");
    } else {
        document.getElementById("error-message").classList.add("hidden");
        alert("Pendaftaran berhasil!");
        // Reset form jika pendaftaran berhasil
        document.getElementById("registrationForm").reset();
    }
});
