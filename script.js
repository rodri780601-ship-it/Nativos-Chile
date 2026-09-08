// Base de datos de árboles nativos de Chile por región
const arbolesNativos = [
    {
        id: "chanar",
        nombre: "Chañar",
        cientifico: "Geoffroea decorticans",
        regiones: ["xv", "i", "ii", "iii", "iv"],
        habitat: "valle",
        zonaNombre: "Valle Central / Desierto",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Geoffroea_decorticans_01.jpg/800px-Geoffroea_decorticans_01.jpg",
        descripcion: "Árbol caducifolio característico de las zonas áridas del norte de Chile. Produce frutos dulces comestibles con los que se elabora el tradicional arrope de chañar.",
        uso: "Medicinal, alimenticio y sombra en oasis del desierto.",
        estadoConservacion: "Preocupación menor"
    },
    {
        id: "tamarugo",
        nombre: "Tamarugo",
        cientifico: "Prosopis tamarugo",
        regiones: ["i", "ii"],
        habitat: "valle",
        zonaNombre: "Pampa del Tamarugal / Valle",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pampa_del_tamarugo_1.JPG/800px-Pampa_del_tamarugo_1.JPG",
        descripcion: "Especie endémica del norte de Chile perfectamente adaptada a suelos salinos y condiciones extremadamente áridas.",
        uso: "Forraje para ganado, leña y reforestación del desierto.",
        estadoConservacion: "Vulnerable"
    },
    {
        id: "quillay",
        nombre: "Quillay",
        cientifico: "Quillaja saponaria",
        regiones: ["iv", "v", "rm", "vi", "vii", "xvi", "viii"],
        habitat: "valle",
        zonaNombre: "Valle Central / Matorral",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Quillaja_saponaria_02.jpg/800px-Quillaja_saponaria_02.jpg",
        descripcion: "Árbol perennifolio de la zona central. Su corteza contiene un alto contenido de saponina, utilizada históricamente como detergente natural.",
        uso: "Cosmético, industrial, farmacológico y apícola.",
        estadoConservacion: "Preocupación menor"
    },
    {
        id: "peumo",
        nombre: "Peumo",
        cientifico: "Cryptocarya alba",
        regiones: ["v", "rm", "vi", "vii", "xvi", "viii", "ix"],
        habitat: "valle",
        zonaNombre: "Valle Central / Quebradas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cryptocarya_alba_in_Chile.jpg/800px-Cryptocarya_alba_in_Chile.jpg",
        descripcion: "Posee hojas perennes muy aromáticas y frutos rojos muy vistosos. Es un componente fundamental del bosque esclerófilo chileno.",
        uso: "Ornamental, sombra, uso medicinal y conservación de cuencas de agua.",
        estadoConservacion: "Preocupación menor"
    },
    {
        id: "boldo",
        nombre: "Boldo",
        cientifico: "Peumus boldus",
        regiones: ["iv", "v", "rm", "vi", "vii", "xvi", "viii", "ix"],
        habitat: "valle",
        zonaNombre: "Matorral / Valle Central",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Peumus_boldus_1.jpg/800px-Peumus_boldus_1.jpg",
        descripcion: "Árbol endémico de hojas coriáceas de aroma muy característico. Es reconocido popularmente por sus virtudes digestivas.",
        uso: "Medicinal (infusiones de hojas) y gastronómico.",
        estadoConservacion: "Preocupación menor"
    },
    {
        id: "araucaria",
        nombre: "Araucaria / Pehuén",
        cientifico: "Araucaria araucana",
        regiones: ["viii", "ix", "xiv"],
        habitat: "cordillera",
        zonaNombre: "Cordillera de los Andes y Nahuelbuta",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Araucaria_araucana_Conguillio.jpg/800px-Araucaria_araucana_Conguillio.jpg",
        descripcion: "Conífera milenaria y ancestral de muy lento crecimiento. Es sagrada para el pueblo Mapuche-Pehuenche debido al valor nutricional de sus piñones.",
        uso: "Alimenticio (piñón), valor cultural, patrimonial y ecológico.",
        estadoConservacion: "En Peligro"
    },
    {
        id: "alerce",
        nombre: "Alerce / Lahuán",
        cientifico: "Fitzroya cupressoides",
        regiones: ["xiv", "x"],
        habitat: "costa",
        zonaNombre: "Cordillera de la Costa y Zonas Húmedas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alerce_Andino_National_Park_1.jpg/800px-Alerce_Andino_National_Park_1.jpg",
        descripcion: "Una de las especies arbóreas más longevas del planeta, pudiendo vivir más de 3.000 años. Posee una madera de alta durabilidad.",
        uso: "Declarado Monumento Natural; altamente protegido por su valor patrimonial.",
        estadoConservacion: "En Peligro"
    },
    {
        id: "coihue",
        nombre: "Coihue",
        cientifico: "Nothofagus dombeyi",
        regiones: ["vi", "vii", "xvi", "viii", "ix", "xiv", "x", "xi"],
        habitat: "cordillera",
        zonaNombre: "Cordillera / Bosque Templado",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Nothofagus_dombeyi_Conguillio.jpg/800px-Nothofagus_dombeyi_Conguillio.jpg",
        descripcion: "Árbol de gran tamaño que puede alcanzar más de 40 metros de altura. Es una de las especies dominantes del bosque templado sureño.",
        uso: "Madera de calidad, carpintería y restauración de ecosistemas.",
        estadoConservacion: "Preocupación menor"
    },
    {
        id: "calafate",
        nombre: "Calafate",
        cientifico: "Berberis microphylla",
        regiones: ["xi", "xii"],
        habitat: "valle",
        zonaNombre: "Estepa Patagónica / Valle",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Berberis_microphylla_01.jpg/800px-Berberis_microphylla_01.jpg",
        descripcion: "Arbusto o árbol pequeño emblemático de la Patagonia. Produce un fruto oscuro al cual la tradición local le atribuye la famosa leyenda patagónica.",
        uso: "Alimenticio (mermeladas, licores, repostería) y tinte natural.",
        estadoConservacion: "Preocupación menor"
    },
    {
        id: "coihue_magallanes",
        nombre: "Coihue de Magallanes",
        cientifico: "Nothofagus betuloides",
        regiones: ["xi", "xii"],
        habitat: "costa",
        zonaNombre: "Zona Costera / Subantártica",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Nothofagus_betuloides1.jpg/800px-Nothofagus_betuloides1.jpg",
        descripcion: "Árbol siempreverde muy resistente, adaptado a los vientos extremos y bajas temperaturas del canal de Magallanes y de las islas del sur.",
        uso: "Protección de suelos contra la erosión e importancia ecológica subantártica.",
        estadoConservacion: "Preocupación menor"
    }
];

// Elementos del DOM
const regionSelect = document.getElementById('region-select');
const habitatSelect = document.getElementById('habitat-select');
const placeholderMessage = document.getElementById('placeholder-message');
const loadingSpinner = document.getElementById('loading-spinner');
const treesGrid = document.getElementById('trees-grid');
const modal = document.getElementById('tree-modal');
const modalBody = document.getElementById('modal-body');
const closeModalBtn = document.querySelector('.close-modal');

// Eventos
regionSelect.addEventListener('change', procesarSeleccionRegion);
habitatSelect.addEventListener('change', filtrarYMostrarArboles);
closeModalBtn.addEventListener('click', cerrarModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) cerrarModal();
});

// Manejo de cambio en el menú de regiones
function procesarSeleccionRegion() {
    const regionVal = regionSelect.value;
    
    if (!regionVal) {
        habitatSelect.disabled = true;
        habitatSelect.value = 'todos';
        placeholderMessage.classList.remove('hidden');
        treesGrid.classList.add('hidden');
        return;
    }

    habitatSelect.disabled = false;
    placeholderMessage.classList.add('hidden');
    treesGrid.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');

    // Simulación de respuesta a la solicitud de datos
    setTimeout(() => {
        loadingSpinner.classList.add('hidden');
        filtrarYMostrarArboles();
        treesGrid.classList.remove('hidden');
    }, 350);
}

// Filtrar según menú de hábitat y renderizar
function filtrarYMostrarArboles() {
    const regionVal = regionSelect.value;
    const habitatVal = habitatSelect.value;

    if (!regionVal) return;

    const listaFiltrada = arbolesNativos.filter(arbol => {
        const coincideRegion = arbol.regiones.includes(regionVal);
        const coincideHabitat = (habitatVal === 'todos' || arbol.habitat === habitatVal);
        return coincideRegion && coincideHabitat;
    });

    renderizarTarjetas(listaFiltrada);
}

// Generación dinámica del HTML de las tarjetas
function renderizarTarjetas(lista) {
    treesGrid.innerHTML = '';

    if (lista.length === 0) {
        treesGrid.innerHTML = `
            <div class="placeholder-box" style="grid-column: 1 / -1;">
                <p>No se encontraron registros de árboles nativos para el filtro seleccionado en esta región.</p>
            </div>
        `;
        return;
    }

    lista.forEach(arbol => {
        const card = document.createElement('div');
        card.className = 'tree-card';
        card.innerHTML = `
            <img src="${arbol.imagen}" alt="${arbol.nombre}" class="tree-image" loading="lazy">
            <div class="tree-info">
                <h3>${arbol.nombre}</h3>
                <p class="scientific-name">${arbol.cientifico}</p>
                <div class="badges">
                    <span class="badge">${arbol.zonaNombre}</span>
                    <span class="badge badge-blue">${arbol.estadoConservacion}</span>
                </div>
                <p class="tree-summary">${arbol.descripcion}</p>
                <button class="btn-detail" onclick="mostrarModal('${arbol.id}')">Ver Ficha Completa</button>
            </div>
        `;
        treesGrid.appendChild(card);
    });
}

// Mostrar ventana modal con información completa
function mostrarModal(idArbol) {
    const arbol = arbolesNativos.find(a => a.id === idArbol);
    if (!arbol) return;

    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${arbol.imagen}" alt="${arbol.nombre}">
            <h2>${arbol.nombre}</h2>
            <p class="scientific-name" style="font-size: 1.1rem; margin-bottom: 15px;">${arbol.cientifico}</p>
        </div>
        <div class="modal-detail-item">
            <strong>Descripción general:</strong>
            <p>${arbol.descripcion}</p>
        </div>
        <div class="modal-detail-item">
            <strong>Hábitat / Zona de distribución:</strong>
            <p>${arbol.zonaNombre}</p>
        </div>
        <div class="modal-detail-item">
            <strong>Usos principales:</strong>
            <p>${arbol.uso}</p>
        </div>
        <div class="modal-detail-item">
            <strong>Estado de conservación:</strong>
            <p>${arbol.estadoConservacion}</p>
        </div>
    `;

    modal.classList.remove('hidden');
}

function cerrarModal() {
    modal.classList.add('hidden');
}
