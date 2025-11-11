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
