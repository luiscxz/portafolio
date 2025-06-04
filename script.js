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
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("sql");
        habilidades[2].classList.add("MachineLearning");
        habilidades[3].classList.add("DataProcessingAnalysis");
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
        // Trabajo de máster (modal 0)
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
            herramientas:"<b>SQL</b>, <b>Python</b>, <b>Power BI</b>, <b>ETL</b>, <b>Machine Learnign</b>.",
            enlace: "https://github.com/luiscxz/TFM-app/tree/main"
        },
        // Jena Climate (modal 1)
        {
            imagenes: ["img/temp/Temperatura.png",  
                "img/temp/decomposition.png",
                "img/temp/zoom_decomposition.png",
                "img/temp/fourier.png",
                "img/temp/prediction_all.png",
                "img/temp/zoom_prediction.png"
            ], 
            titulo: "Jena Climate",
            descripcion: `El conjunto de datos <b>Jena Climate</b> comprende 14 <b>series temporales meteorológicas</b>, que incluyen 
            variables como la temperatura del aire, presión atmosférica, humedad relativa, dirección del viento, 
            entre otras. Estas observaciones fueron registradas con una <b>frecuencia de 10 minutos</b> y abarcan el 
            periodo comprendido entre el <b>1 de enero de 2009</b> y el <b>31 de diciembre de 2016</b>. <br>
            
            El presente estudio se enfocó en la <b>predicción de la temperatura (en °C)</b> mediante el uso de una 
            arquitectura de red neuronal <b>Long Short-Term Memory</b> (LSTM). Previo al entrenamiento del modelo, se 
            llevó a cabo un <b>análisis exploratorio de los datos</b>, en el cual se identificó que la serie 
            objetivo tenia <b>propiedades de estacionariedad</b>, es decir, coservaba sus propiedades estadísticas en el tiempo 
            <b>(media y varianza constante)</b>. <br>
            Asimismo, la aplicación de la <b>Transformada de Fourier</b> reveló la presencia de <b>patrones estacionales 
            significativos</b>: uno de largo plazo, con una <b>periodicidad anual</b>, y otro de corto plazo, con una <b>periodicidad 
            diaria de 24 horas</b>. <br>
            En cuanto al desempeño del modelo, la red LSTM obtuvo un </b>coeficiente de determinación</b> (R²) de <b>0.99</b>
            y un <b>error cuadrático medio</b> (RMSE) de <b>0.75 °C</b>, lo cual indica una alta capacidad predictiva, 
            con una desviación promedio de tan solo 0.75 grados respecto a los valores reales en datos no observados.`,
            herramientas:"<b>Python</b>, <b>Tensorflow</b>, <b>Keras</b>, <b>Jupyter notebook</b>.",
            enlace: "https://github.com/luiscxz/To_linkedIn/blob/main/Temperatura_Jena_Climate.ipynb"
        },
        // Comercio electrónico brasileño modal(2)
        {
            imagenes: ["img/Comercio_elect_Br/0.png",  
                "img/Comercio_elect_Br/1.png",
                "img/Comercio_elect_Br/2.png",
                "img/Comercio_elect_Br/3.png",
                "img/Comercio_elect_Br/4.png",
                "img/Comercio_elect_Br/5.png",
                "img/Comercio_elect_Br/6.png",
                "img/Comercio_elect_Br/7.png",
                "img/Comercio_elect_Br/8.png",
                "img/Comercio_elect_Br/9.png",
                "img/Comercio_elect_Br/10.png",
                "img/Comercio_elect_Br/11.png"
            ], 
            titulo: "Comercio Electrónico Brasileño",
            descripcion: `Este caso de estudio analiza un <b>conjunto de datos público de Olist</b>, 
            una plataforma brasileña de comercio electrónico que conecta pequeñas empresas con clientes. 
            El <b>dataset abarca 100,000 pedidos</b> realizados entre 2016 y 2018, incluyendo información 
            sobre <b>transacciones</b>, <b>envíos</b>, <b>ubicación de clientes</b> y <b>vendedores</b>, <b>reseñas de clientes</b> y más.<br>

            <b>Objetivos Principales</b>:<br>
            • <b>Análisis Exploratorio (EDA)</b>: Identificar patrones de compra, comportamiento del cliente y eficiencia logística.<br>
            • <b>Predicción de Ventas</b>: Utilizar modelos de machine learning (Random Forest, XGBoost) para predecir ventas futuras basadas en datos históricos.<br>
            • <b>Procesamiento de Lenguaje Natural (NLP)</b>: Analizar las reseñas de clientes para extraer insights sobre satisfacción y tendencias.<br>

            <b>Metodología y Resultados Clave</b>:<br>
            • <b>Integración de Datos</b>: Se unificaron 9 datasets mediante técnicas de merge en Pandas.<br>
            • <b>Limpieza de Datos</b>: Se eliminaron duplicados (17.3% de registros) y outliers detectados con <b>Medcouple</b>.<br>
            • <b>Modelado Predictivo</b>: Se entrenaron modelos como XGBRegressor, logrando un <b>R² de 0.90</b> en predicciones mensuales.<br>
            • <b>NLP</b>: Análisis de sentimiento y topic modeling en reseñas para evaluar la experiencia del cliente.<br>`,
            herramientas:"<b>Python</b>, <b>leia</b>,<b>Sklearn</b>, <b>XGBoost</b>, <b>Jupyter notebook</b>.",
            enlace: "https://github.com/luiscxz/To_linkedIn/blob/main/Olist_caso_estudio.ipynb"
        },
        // PIMECLA modal(3)
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
        // rio hobo (modal 4)
        {
            imagenes: ["img/riohobo/Curvas de nivel.jpg", 
                "img/riohobo/area de estudio.jpg",
                "img/riohobo/levantamiento.jpg", 
                "img/riohobo/Curvas de nivel2.jpg",
                "img/riohobo/perfiles.jpg",
                ], 
            titulo: "Levantamiento topográfico",
            descripcion: `Realicé levantamiento topográfico utilizando tecnología de GPS diferencial y un dron. 
            El procesamiento de los datos se llevó a cabo de la siguiente manera:
            <br>
                
            • <b>Fotogrametría:</b> Se procesaron las imágenes capturadas con el dron para generar un Modelo Digital 
            de Elevación (DEM) del terreno, el cual fue ortorectificado y georreferenciado con precisión.<br>
            • <b>Procesamiento de datos:</b> A partir de los datos obtenidos con el GPS diferencial, se generaron 
            las curvas de nivel del terreno y se elaboraron perfiles transversales del talud, lo que permitió identificar 
            los ángulos óptimos para su perfilado.<br>
            • <b>Análisis e informes:</b> Se realizaron análisis estadísticos y topográficos, culminando en un informe técnico
             que detalló los criterios para el perfilado del talud y el volumen de material a remover.<br>
            • <b>Colaboración interdisciplinaria:</b> Trabajé en conjunto con equipos multidisciplinarios para interpretar los resultados
             y recomendar estrategias efectivas para el perfilado del talud..<br>`,
            herramientas:"<b>SQL</b>, <b>Python</b>, <b>ArcGIS</b>, <b>Pix4D</b>, <b>ETL</b>.",
            enlace: "https://github.com/tuusuario/proyecto2"
        },
        // erfen (modal 5)
        {
            imagenes: ["img/erfen/masas de agua.png",
                "img/erfen/profundidades_elegidas.png", 
                "img/erfen/Presion media nivel del mar.png",
                "img/erfen/vientos.png", 
                "img/erfen/TSM.png",
                "img/erfen/SerieTempSal.png",
                ], 
            titulo: "Científico de datos (ciencias de la tierra)",
            descripcion: `En este proyecto fui contratado para aplicar ciencia de datos a variables oceanográficas y atmosféricas 
            en DIMAR. Mis prinicpales actividades y logros  fueron los siguientes:<br>
                
            • <b>Configuración de sensores:</b> Configuré los sensores que usaron para registrar las variables
             estudias en el Fenómeno EL NIÑO, optimizando en 50% la toma de datos.<br>
            • <b>ETL:</b> Mediante python automaticé la extracción, tranformación y carga de los datos provenientes de sensores 
            remotos. Reduciendo el tiempo de procesamiento, errores humanos y se garantizó la precisión y consistencia de los datos, 
            optimizando significativamente la calidad y eficiencia del procesamiento.<br>
            • <b>Análisis e informes:</b> Realicé el análisis de los datos recolectados en el Estudio Regional del Fenómeno del Niño (ERFEN) del año 2023, 
            describiendo la influencia del fenómeno en la cuenca del Pacífico Colombiano.<br>
            • <b>Machine Learning:</b> Implementé algoritmos de clusterización, logrando identificar 
            grupos de masas de aguas presentes durante los cruceros.<br>`,
            herramientas:"<b>SQL</b>, <b>Python</b>, <b>ArcGIS</b>, <b>Matlab</b>, <b>ETL</b>.",
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
// enviar correo electrónico
document.addEventListener("DOMContentLoaded", () => {
    const formButton = document.querySelector(".contacto button");

    if (formButton) {
        formButton.addEventListener("click", (event) => {
            event.preventDefault(); // Evita que el botón recargue la página

            const nombre = document.querySelector('.contacto input[placeholder="Tú Nombre"]').value.trim();
            const telefono = document.querySelector('.contacto input[placeholder="Número telefónico"]').value.trim();
            const correo = document.querySelector('.contacto input[placeholder="Dirección de correo"]').value.trim();
            const tema = document.querySelector('.contacto input[placeholder="Tema"]').value.trim();
            const mensaje = document.querySelector('.contacto textarea').value.trim();

            if (!nombre || !telefono || !correo || !tema || !mensaje) {
                alert("Por favor, completa todos los campos.");
                return;
            }

            if (!/^\S+@\S+\.\S+$/.test(correo)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return;
            }

            const mailtoLink = `mailto:luisgarcia.oq95@gmail.com?subject=${encodeURIComponent(tema)}&body=${encodeURIComponent(
                `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`
            )}`;

            window.location.href = mailtoLink;
        });
    }
});
