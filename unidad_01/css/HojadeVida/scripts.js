document.addEventListener("DOMContentLoaded", function() {
    // Elementos
    const toggleEstudiosButton = document.getElementById("toggle-estudios");
    const estudiosInfo = document.getElementById("estudios-info");

    const toggleCursosButton = document.getElementById("toggle-cursos");
    const cursosInfo = document.getElementById("cursos-info");

    const toggleExperienciasButton = document.getElementById("toggle-experiencias");
    const experienciasInfo = document.getElementById("experiencias-info");

    // Funciones para mostrar/ocultar
    toggleEstudiosButton.addEventListener("click", function() {
        if (estudiosInfo.style.display === "none") {
            estudiosInfo.style.display = "block";
            toggleEstudiosButton.textContent = "Ocultar Estudios";
        } else {
            estudiosInfo.style.display = "none";
            toggleEstudiosButton.textContent = "Mostrar Estudios";
        }
    });

    toggleCursosButton.addEventListener("click", function() {
        if (cursosInfo.style.display === "none") {
            cursosInfo.style.display = "block";
            toggleCursosButton.textContent = "Ocultar Cursos";
        } else {
            cursosInfo.style.display = "none";
            toggleCursosButton.textContent = "Mostrar Cursos";
        }
    });

    toggleExperienciasButton.addEventListener("click", function() {
        if (experienciasInfo.style.display === "none") {
            experienciasInfo.style.display = "block";
            toggleExperienciasButton.textContent = "Ocultar Experiencias";
        } else {
            experienciasInfo.style.display = "none";
            toggleExperienciasButton.textContent = "Mostrar Experiencias";
        }
    });
});
