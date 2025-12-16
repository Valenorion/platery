<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama_resep = isset($_POST['nama_resep']) ? htmlspecialchars($_POST['nama_resep']) : 'Resep Tanpa Nama';
    $kategori = isset($_POST['kategori']) ? htmlspecialchars($_POST['kategori']) : 'Tidak ada kategori';
    $bahan = isset($_POST['bahan']) ? htmlspecialchars($_POST['bahan']) : 'Tidak ada bahan';
    $langkah = isset($_POST['langkah']) ? htmlspecialchars($_POST['langkah']) : 'Tidak ada langkah';
    $penulis = isset($_POST['penulis']) ? htmlspecialchars($_POST['penulis']) : 'Anonim';
    
    $gambar_path = null;
    $gambar_upload_success = false;
    
    if (isset($_FILES['gambar']) && $_FILES['gambar']['error'] == 0) {
        $uploadDir = "assets/images/";
        if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);
        
        $file_ext = strtolower(pathinfo($_FILES['gambar']['name'], PATHINFO_EXTENSION));
        $allowed = ['jpg', 'jpeg', 'png', 'gif'];
        
        if (in_array($file_ext, $allowed) && $_FILES['gambar']['size'] <= 5 * 1024 * 1024) {
            $filename = time() . '_' . preg_replace('/[^a-zA-Z0-9]/', '_', basename($_FILES['gambar']['name']));
            $uploadFile = $uploadDir . $filename;
            
            if (move_uploaded_file($_FILES['gambar']['tmp_name'], $uploadFile)) {
                $gambar_path = $uploadFile;
                $gambar_upload_success = true;
            }
        }
    }
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resep Dikirim - Platery</title>
    <link rel="stylesheet" href="style-submit.css">
</head>
<body>

<div class="container">
    <div class="success-header">
        <div class="success-icon">✅</div>
        <h1>Resep Berhasil Dikirim!</h1>
        <p>Terima kasih telah berbagi kreasi dapur Anda dengan komunitas Platery</p>
    </div>

    <div class="submit-container">
        <span class="status-badge">✓ Status: Resep Dikirim</span>
        
        <div class="resep-card">
            <div class="resep-header">
                <h2><?php echo $nama_resep; ?></h2>
                
                <div class="resep-meta">
                    <div class="meta-item">
                        <div class="meta-icon">🏷️</div>
                        <div class="meta-info">
                            <h4>Kategori</h4>
                            <p><?php echo ucfirst($kategori); ?></p>
                        </div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-icon">👤</div>
                        <div class="meta-info">
                            <h4>Penulis</h4>
                            <p><?php echo $penulis; ?></p>
                        </div>
                    </div>
                    <div class="meta-item">
                        <div class="meta-icon">📅</div>
                        <div class="meta-info">
                            <h4>Tanggal Dibuat</h4>
                            <p><?php echo date('d M Y'); ?></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="resep-content">
                <div class="resep-section">
                    <h3><span class="section-icon">🥘</span> Bahan-bahan</h3>
                    <pre><?php echo $bahan; ?></pre>
                </div>

                <div class="resep-section">
                    <h3><span class="section-icon">👨‍🍳</span> Langkah-langkah</h3>
                    <pre><?php echo $langkah; ?></pre>
                </div>

                <?php
                if ($gambar_path && $gambar_upload_success) {
                    echo "
                    <div class='resep-section'>
                        <h3><span class='section-icon'>📸</span> Foto Resep</h3>
                        <div class='image-container'>
                            <img src='" . htmlspecialchars($gambar_path) . "' alt='" . htmlspecialchars($nama_resep) . "'>
                        </div>
                        <div class='success-msg'>✓ Gambar berhasil diunggah</div>
                    </div>
                    ";
                } elseif (isset($_FILES['gambar']) && $_FILES['gambar']['error'] != 0) {
                    echo "<div class='error-msg'>⚠️ Gambar tidak berhasil diunggah. Pastikan ukuran kurang dari 5MB dan format JPG/PNG</div>";
                }
                ?>
            </div>
        </div>

        <div class="share-section">
            <h3>🎉 Resep Anda sudah siap dibagikan!</h3>
            <p>Resep Anda akan segera ditinjau oleh tim Platery sebelum dipublikasikan.</p>
        </div>

        <div class="action-buttons">
            <a href="form.html" class="btn btn-primary">➕ Tambah Resep Lain</a>
            <a href="index.html" class="btn btn-secondary">🏠 Kembali ke Beranda</a>
        </div>
    </div>
</div>

</body>
</html>
<?php
} else {
    header("Location: tambah_resep.html");
    exit();
}
?>
