// Modal para ampliar imágenes
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");

// Abrir modal al hacer clic en una imagen
document.querySelectorAll(".gallery-image").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImage.src = this.src;
    });
});

// Cerrar modal al hacer clic en la 'X'
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

// Cerrar modal si se hace clic fuera de la imagen
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
