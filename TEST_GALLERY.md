# Gallery Popup Test Instructions

## Cara Menggunakan Gallery Popup

### Metode 1: Klik pada Preview Image

1. Buka `projects.html`
2. Scroll ke project card "Result Product Manual Machining"
3. Hover ke gambar preview, akan muncul overlay "Lihat 5 Foto"
4. Klik pada gambar untuk membuka popup galeri

### Metode 2: Klik Tombol Galeri

1. Buka `projects.html`
2. Scroll ke project card "Result Product Manual Machining"
3. Klik tombol "Lihat Galeri (5 Foto)" di bawah deskripsi
4. Popup galeri akan terbuka

## Fitur Popup Gallery

### Navigasi

- **Tombol Sebelumnya (<)**: Navigasi ke gambar sebelumnya
- **Tombol Berikutnya (>)**: Navigasi ke gambar berikutnya
- **Tombol Close (×)**: Tutup popup
- **Keyboard Arrows**: Gunakan ← dan → untuk navigasi
- **Keyboard Escape**: Tekan ESC untuk tutup

### Tampilan

- Menampilkan 5 gambar machining product
- Counter menunjukkan posisi gambar (misal: "2 / 5")
- Background blur effect untuk fokus pada gambar
- Smooth animations dan transitions

## File yang Dimodifikasi

### 1. projects.html

- Menambahkan project card machining dengan preview image
- Struktur: div wrapper dengan position relative
- Image trigger dan overlay hover

### 2. css/style.css

- `.machining-gallery-modal` - Modal styling
- `.gallery-modal-content` - Content wrapper
- `.gallery-modal-image` - Image styling
- `.gallery-modal-close`, `.gallery-modal-nav-button` - Button styling
- `.gallery-modal-counter` - Counter styling

### 3. js/script.js

- `initGalleryModal()` - Setup gallery modal saat page load
- `openMachiningGallery(index)` - Buka modal dengan gambar tertentu
- `closeMachiningGallery()` - Tutup modal
- `nextMachiningImage()` - Navigasi ke gambar berikutnya
- `prevMachiningImage()` - Navigasi ke gambar sebelumnya

## File Gambar yang Digunakan

- images/result-product-machining/as-roda-0.jpg
- images/result-product-machining/as-roda-1.jpg
- images/result-product-machining/as-roda-2.jpg
- images/result-product-machining/as-roda-3.jpg
- images/result-product-machining/as-roda-4.jpg

## Troubleshooting

### Popup tidak muncul

1. Periksa console browser (F12) untuk error messages
2. Pastikan file CSS dan JS sudah ter-load dengan baik
3. Refresh halaman (Ctrl+Shift+R)

### Gambar tidak muncul

1. Periksa path gambar di folder `images/result-product-machining/`
2. Pastikan semua 5 file gambar ada dengan nama yang benar

### Overlay tidak muncul saat hover

1. Pastikan CSS di-refresh dengan cache clear
2. Periksa opacity styling di `.gallery-preview-overlay`
