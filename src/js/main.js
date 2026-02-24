import * as bootstrap from 'bootstrap';
import '/src/scss/style.scss';

document.addEventListener("DOMContentLoaded", () => {

    // Cargar navbar
    fetch("/navbar.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;

            const currentPage = window.location.pathname.split("/").pop();

            document.querySelectorAll("#navbar a").forEach(link => {
                const linkPage = link.getAttribute("href");
                if (linkPage === currentPage) {
                    link.classList.add("active");
                }
            });
        });

    // Cargar footer
    fetch("/footer.html")
        .then(res => res.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

    // Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));

    // Popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].forEach(el => new bootstrap.Popover(el));

    // Carousel (solo si existe)
    const myCarousel = document.querySelector('#carouselExample');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 3000,
            ride: 'carousel'
        });
    }

    // Modal (solo si existe)
    const modal = document.getElementById('guiaUso');
    if (modal) {
        let btnAbierto = null;

        modal.addEventListener('show.bs.modal', function (e) {
            btnAbierto = e.relatedTarget.id;
            const btn = document.getElementById(btnAbierto);

            btn.classList.remove('btn-outline-success');
            btn.classList.add('btn-primary');
            btn.disabled = true;
        });

        modal.addEventListener('hidden.bs.modal', function () {
            const btn = document.getElementById(btnAbierto);
            btn.classList.remove('btn-primary');
            btn.classList.add('btn-outline-success');
            btn.disabled = false;
        });
    }

});