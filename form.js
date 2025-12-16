document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recipeForm");

  function setError(input, message) {
    const group = input.closest(".form-group");
    group.classList.add("error");
    const small = group.querySelector("small");
    if (small) small.textContent = message;
  }

  function clearError(input) {
    const group = input.closest(".form-group");
    group.classList.remove("error");
  }

  form.addEventListener("submit", function (e) {
    let valid = true;

    clearError(form.nama_resep);
    clearError(form.kategori);
    clearError(form.bahan);
    clearError(form.langkah);
    clearError(form.penulis);

    if (form.nama_resep.value.trim().length < 3) {
      setError(form.nama_resep, "Nama resep minimal 3 karakter");
      valid = false;
    }

    if (form.kategori.value === "") {
      setError(form.kategori, "Kategori wajib dipilih");
      valid = false;
    }

    if (form.bahan.value.trim().length < 10) {
      setError(form.bahan, "Bahan terlalu singkat");
      valid = false;
    }

    if (form.langkah.value.trim().length < 10) {
      setError(form.langkah, "Langkah terlalu singkat");
      valid = false;
    }

    if (form.penulis.value.trim().length < 3) {
      setError(form.penulis, "Nama penulis minimal 3 karakter");
      valid = false;
    }

    const gambar = form.gambar.files[0];
    if (gambar) {
      if (!["image/jpeg", "image/png"].includes(gambar.type)) {
        setError(form.gambar, "Gambar harus JPG atau PNG");
        valid = false;
      }
      if (gambar.size > 5 * 1024 * 1024) {
        setError(form.gambar, "Ukuran gambar maksimal 5MB");
        valid = false;
      }
    }

    if (!valid) e.preventDefault();
  });

  // Hapus error saat user mulai mengetik
  form.querySelectorAll("input, textarea, select").forEach(el => {
    el.addEventListener("input", () => clearError(el));
  });
});
