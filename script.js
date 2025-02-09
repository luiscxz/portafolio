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
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitulo = document.getElementById("modal-titulo");
    const modalDescripcion = document.getElementById("modal-descripcion");
    const modalHerramientas = document.getElementById("modal-herramientas");
    const modalEnlace = document.getElementById("modal-enlace");
    const cerrarModal = document.querySelector(".cerrar");
    const prevImgBtn = document.getElementById("prev-img");
    const nextImgBtn = document.getElementById("next-img");
    const proyectosElementos = document.querySelectorAll(".proyecto");

    // Verificación de que los elementos existen antes de manipularlos
    if (!modal || !modalImg || !modalTitulo || !modalDescripcion || !modalHerramientas || !modalEnlace || !cerrarModal || !prevImgBtn || !nextImgBtn) {
        console.error("Uno o más elementos del modal no se encontraron.");
        return;
    }

    const proyectos = [
        {
            imagenes: ["img/master/modelos.png",
                "img/master/ventastotales.png",  
                "img/master/distribuciondevariables.png",
                "img/master/depuradosLDVAPV.png",
                "img/master/AtipicosLDVAPV.png",
                "img/master/analisisdeventasporciudad.png"], 
            titulo: "Trabajo de Máster",
            descripcion: `Este estudio se centró en la predicción de ventas semanales de 45 tiendas ubicadas en Estados Unidos, 
            utilizando diversos modelos de aprendizaje automático, como regresión lineal, árboles de decisión, vecinos más 
            cercanos y máquinas de soporte vectorial, implementados en Python. Como resultado, se generó un informe interactivo 
            en Power BI que extrae, transforma y carga datos para mostrar las estadísticas regionales, mensuales, trimestrales y anuales junto con las predicciones obtenidas de los diferentes 
            modelos. Este informe facilita la visualización de los datos y contribuye a la toma de decisiones informadas.`,
            herramientas:"<b>SQL</b>, <b>Python</b>, <b>Power BI</b>, <b>ETL</b>.",
            enlace: "https://github.com/tuusuario/proyecto1"
        },
        {
            imagenes: ["img/PIMECLA/Zonas de riesgo.jpg", 
                "img/PIMECLA/Levantamiento.jpg", 
                "img/PIMECLA/batimetria.jpg",
                "img/PIMECLA/equipos.jpg",
                "img/PIMECLA/serie1.png",
                "img/PIMECLA/serie.jpg",
                ], 
            titulo: "PIMECLA",
            descripcion: `En el <b>Programa Integral para el Monitoreo y Mitigación de la Erosión Costera en el 
            Litoral Antioqueño</b> (PIMECLA), fui contratado para generar conocimiento científico y técnico sobre 
            la erosión costera en la región. Mis funciones incluyeron::
            <br>
                
            • <b>Series de tiempo:</b> Extracción, transformación y carga de datos sobre nivel del mar, vientos y temperatura.<br>
            • <b>Procesamiento de datos:</b> Integración y transformación de información de GPS, 
            sensores remotos, imágenes satelitales y drones, garantizando calidad y consistencia.<br>
            • <b>Análisis e informes:</b> Identificación de tendencias y patrones mediante análisis estadísticos, 
            elaborando informes técnicos para la toma de decisiones.<br>
            • <b>Colaboración interdisciplinaria:</b> Trabajo con equipos multidisciplinarios para interpretar resultados 
            y recomendar estrategias de mitigación.<br>`,
            herramientas:"<b>SQL</b>, <b>Python</b>, <b>ArcGIS</b>, <b>Matlab</b>, <b>Pix4D</b>, <b>Power BI</b>, <b>ETL</b>.",
            enlace: "https://github.com/tuusuario/proyecto2"
        },
        {
            imagenes: ["img/riohobo/Curvas de nivel.jpg", 
                "img/riohobo/area de estudio.jpg",
                "img/riohobo/levantamiento.jpg", 
                "img/riohobo/Curvas de nivel2.jpg",
                "img/riohobo/perfiles.jpg",
                ], 
            titulo: "PIMECLA2",
            descripcion: `En el <b>Programa Integral para el Monitoreo y Mitigación de la Erosión Costera en el 
            Litoral Antioqueño</b> (PIMECLA), fui contratado para generar conocimiento científico y técnico sobre 
            la erosión costera en la región. Mis funciones incluyeron::
            <br>
                
            • <b>Series de tiempo:</b> Extracción, transformación y carga de datos sobre nivel del mar, vientos y temperatura.<br>
            • <b>Procesamiento de datos:</b> Integración y transformación de información de GPS, 
            sensores remotos, imágenes satelitales y drones, garantizando calidad y consistencia.<br>
            • <b>Análisis e informes:</b> Identificación de tendencias y patrones mediante análisis estadísticos, 
            elaborando informes técnicos para la toma de decisiones.<br>
            • <b>Colaboración interdisciplinaria:</b> Trabajo con equipos multidisciplinarios para interpretar resultados 
            y recomendar estrategias de mitigación.<br>`,
            herramientas:"<b>SQL</b>, <b>Python</b>, <b>ArcGIS</b>, <b>Matlab</b>, <b>Pix4D</b>, <b>Power BI</b>, <b>ETL</b>.",
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
        modalDescripcion.innerHTML = proyectos[index].descripcion.trim();;
        modalHerramientas.innerHTML = proyectos[index].herramientas 
            ? `<strong>Herramientas:</strong> ${proyectos[index].herramientas}` 
            : "";
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
