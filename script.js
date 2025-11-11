// script.js (Untuk Menu Tomyam)

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Ambil semua elemen dengan kelas 'menu-item'
    const menuItems = document.querySelectorAll('.menu-item');
    const defaultBgColor = '#FFFFFF'; // Sesuai dengan latar belakang item menu di style.css

    // Fungsi handler untuk menangani klik item
    const handleItemClick = (event) => {
        const item = event.currentTarget; // Elemen .menu-item yang diklik

        // Ambil nama item, menggunakan operator optional chaining (?.) untuk keamanan
        const itemName = item.querySelector('.item-name')?.textContent.trim() || 'Hidangan Thailand';

        // Tampilkan notifikasi pop-up
        alert(`🔥 Pesanan Anda telah diterima!\nAnda memesan: ${itemName}\nMohon tunggu, kuah Tomyam segera disajikan!`);
        
        // Umpan balik visual singkat
        item.style.backgroundColor = '#fff0f0'; // Warna feedback merah muda lembut (dari efek hover di CSS)
        
        // Kembalikan warna latar setelah 300ms agar efeknya terlihat
        setTimeout(() => {
            item.style.backgroundColor = defaultBgColor; 
        }, 300);
    };

    // 2. Iterasi dan tambahkan event listener ke setiap item menu
    menuItems.forEach(item => {
        item.addEventListener('click', handleItemClick);
    });

    console.log("Script.js untuk Menu Tomyam berhasil dimuat dan siap berinteraksi.");
});
// script.js (Toast Notification untuk Menu Tomyam)

document.addEventListener('DOMContentLoaded', () => {
    
    const menuItems = document.querySelectorAll('.menu-item');
    const defaultBgColor = '#FFFFFF'; 

    /**
     * Menampilkan notifikasi pop-up kustom (Toast)
     * @param {string} message - Pesan yang akan ditampilkan.
     */
    function showToast(message) {
        // Buat elemen div untuk notifikasi
        const toast = document.createElement('div');
        toast.classList.add('tomyam-toast');
        toast.textContent = message;

        // Tambahkan ke body
        document.body.appendChild(toast);

        // Paksa reflow dan tampilkan notifikasi
        void toast.offsetWidth; 
        toast.classList.add('show');

        // Hilangkan notifikasi setelah 3 detik
        setTimeout(() => {
            toast.classList.remove('show');
            // Hapus elemen setelah animasi selesai
            setTimeout(() => {
                toast.remove();
            }, 500); 
        }, 3000); 
    }


    // Fungsi handler untuk menangani klik item
    const handleItemClick = (event) => {
        const item = event.currentTarget; 
        const itemName = item.querySelector('.item-name')?.textContent.trim() || 'Hidangan Thailand';

        // Ganti alert() dengan notifikasi kustom yang keren
        showToast(`🍜 ${itemName} telah ditambahkan ke pesanan!`);
        
        // Umpan balik visual singkat
        item.style.backgroundColor = '#fff0f0'; 
        
        // Kembalikan warna latar setelah 300ms
        setTimeout(() => {
            item.style.backgroundColor = defaultBgColor; 
        }, 300);
    };

    // Tambahkan event listener ke setiap item menu
    menuItems.forEach(item => {
        item.addEventListener('click', handleItemClick);
    });

    console.log("Script.js untuk Menu Tomyam berhasil dimuat dengan Toast Notification.");
});
