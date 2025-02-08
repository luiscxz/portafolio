let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("matlab");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("sql");
        habilidades[3].classList.add("arcgis");
        habilidades[4].classList.add("hadoop");
        habilidades[5].classList.add("hive");
        habilidades[6].classList.add("spark");

        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("responsabilidad");
        habilidades[11].classList.add("informes");
        habilidades[12].classList.add("dedicacion");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
// Esperar a que el DOM esté completamente cargado antes de acceder a los elementos
// Esperar a que el DOM esté completamente cargado antes de acceder a los elementos
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const modalEnlace = document.getElementById("modal-enlace");
    const cerrarModal = document.querySelector(".cerrar");
    const prevImgBtn = document.getElementById("prev-img");
    const nextImgBtn = document.getElementById("next-img");
    const proyectosElementos = document.querySelectorAll(".proyecto");

    // Verificación de que los elementos existen antes de manipularlos
    if (!modal || !modalImg || !modalTitulo || !modalDescripcion || !modalEnlace || !cerrarModal || !prevImgBtn || !nextImgBtn) {
        console.error("Uno o más elementos del modal no se encontraron.");
        return;
    }

    const proyectos = [
        {
            imagenes: ["D:/imagenes/para_portafolio/PIMECLA/Zonas de riesgo.jpg", "img/p1-2.jpg", "img/p1-3.jpg"], 
            titulo: "Diseño Creativo 1",
            descripcion: "Proyecto de fotografía con un diseño moderno y minimalista.",
            enlace: "https://github.com/tuusuario/proyecto1"
        },
        {
            imagenes: ["img/p2-1.jpg", "img/p2-2.jpg", "img/p2-3.jpg"], 
            titulo: "Diseño Creativo 2",
            descripcion: "Exploración de colores y texturas en la fotografía urbana.",
            enlace: "https://github.com/tuusuario/proyecto2"
        }
    ];

    let imagenActual = 0;
    let proyectoActual = 0;

    function actualizarImagen() {
        modalImg.src = proyectos[proyectoActual].imagenes[imagenActual];
    }

    function abrirModal(index) {
        if (!modal || !proyectos[index]) return;

        proyectoActual = index;
        imagenActual = 0; // Resetear imagen al abrir el modal
        modal.classList.add("show");

        modalTitulo.textContent = proyectos[index].titulo;
        modalDescripcion.textContent = proyectos[index].descripcion;
        modalEnlace.href = proyectos[index].enlace;
        
        actualizarImagen(); // Mostrar la primera imagen
    }

    function cerrarModalFuncion() {
        modal.classList.remove("show");
    }

    cerrarModal.addEventListener("click", cerrarModalFuncion);

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            cerrarModalFuncion();
        }
    });

    prevImgBtn.addEventListener("click", () => {
        if (imagenActual > 0) {
            imagenActual--;
            actualizarImagen();
        }
    });

    nextImgBtn.addEventListener("click", () => {
        if (imagenActual < proyectos[proyectoActual].imagenes.length - 1) {
            imagenActual++;
            actualizarImagen();
        }
    });

    proyectosElementos.forEach((proyecto, index) => {
        proyecto.addEventListener("click", () => abrirModal(index));
    });

    // Asegurar que la modal esté oculta al cargar la página
    window.onload = () => {
        modal.classList.remove("show");
    };
});
