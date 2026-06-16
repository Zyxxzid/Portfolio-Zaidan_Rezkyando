// Toggle tampilan container music
const musicToggleBtn = document.getElementById('music-toggle-btn');
const musicSection = document.getElementById('music');

if (musicToggleBtn && musicSection) {
    musicToggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        musicSection.classList.toggle('active');
    });

    // Menutup container jika mengklik di luar area music-section dan tombol toggle
    document.addEventListener('click', (e) => {
        if (!musicSection.contains(e.target) && !musicToggleBtn.contains(e.target)) {
            musicSection.classList.remove('active');
        }
    });
}

// Mengambil semua elemen card lagu dan audio
const musicCards = document.querySelectorAll('.music-card');
const allAudios = document.querySelectorAll('audio');

musicCards.forEach(card => {
    const audio = card.querySelector('audio');

    // Menangani klik pada card untuk memutar/menjeda lagu
    card.addEventListener('click', (e) => {
        // Jika yang diklik adalah kontrol bawaan audio, biarkan browser menanganinya
        if (e.target.closest('audio')) {
            return;
        }

        if (audio.paused) {
            // Hentikan semua lagu lain terlebih dahulu
            allAudios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Hentikan lagu lain jika lagu ini diputar melalui kontrol bawaan audio
    audio.addEventListener('play', () => {
        allAudios.forEach(otherAudio => {
            if (otherAudio !== audio) {
                otherAudio.pause();
            }
        });
    });
});