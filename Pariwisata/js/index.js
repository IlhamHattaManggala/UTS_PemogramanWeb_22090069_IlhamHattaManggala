document.addEventListener("DOMContentLoaded", function () {
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    }

    // Fungsi untuk menangani efek deskripsi pada hover
    const tentangRows = document.querySelectorAll('.tentang1-row');

    tentangRows.forEach(row => {
        row.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#6e54fa';
            this.style.color = '#fff';
        });

        row.addEventListener('mouseout', function () {
            this.style.backgroundColor = 'transparent';
            this.style.color = 'var(--text-color)';
        });
    });
});