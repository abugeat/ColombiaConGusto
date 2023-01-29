let mobiledevice;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    mobiledevice = true;
} else {
    // false for not mobile device
    mobiledevice = false;
}

  

const anchors = {
    SantaMarta: {
        name: "⛵ Santa Marta",
        firstSection: 0,
    },
    Tayrona: {
        name: "🐒 Tayrona",
        firstSection: 3,
    },
    Cartagena: {
        name: "🌈 Cartagena",
        firstSection: 18,
    },
    Providencia: {
        name: "🏝️ Isla de Providencia",
        firstSection: 24,
    },
    SanAndres: {
        name: "🥥 Isla de San Andrés",
        firstSection: 38,
    },
    Medellin: {
        name: "🌆 Medellín",
        firstSection: 42,
    },
    Bogota: {
        name: "☕️ Bogotá",
        firstSection: 52,
    },
};

const moments = [
    // Starting moment is already loaded
    {
        video: 'videos/IMG_1.mov', 
        day: "1",
        location: "Santa Marta",
        description: "Hola Colombia",
        anchor: anchors.SantaMarta,
        map: "https://goo.gl/maps/koQCRWKmKZYVCLR97"
    },
    {
        video: 'videos/IMG_2.mov', 
        day: "1",
        location: "Santa Marta",
        description: "Domingo en Santa Marta",
        anchor: anchors.SantaMarta,
        map: "https://goo.gl/maps/koQCRWKmKZYVCLR97"
    },
    {
        video: 'videos/IMG_3.mov', 
        day: "1",
        location: "Santa Marta",
        description: "De cara a la siguiente etapa: Tayrona",
        anchor: anchors.SantaMarta,
        map: "https://goo.gl/maps/JKyzszMH1QwL3UUd8"
    },
    {
        video: 'videos/IMG_4.mov', 
        day: "2",
        location: "Tayrona",
        description: "Vamos!",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_5.mov', 
        day: "2",
        location: "Tayrona",
        description: "Bien llegados a la jungla",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_6.mov', 
        day: "2",
        location: "Tayrona",
        description: "La hermosa vista desde la habitación",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/QcXG5LtVVhzX4eEg9"
    },
    {
        video: 'videos/IMG_7.mov', 
        day: "2",
        location: "Tayrona",
        description: "Siesta con vecinos ruidosos",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/QcXG5LtVVhzX4eEg9"
    },
    {
        video: 'videos/IMG_8.mov', 
        day: "3",
        location: "Tayrona",
        description: "Desayuno con vistas",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/QcXG5LtVVhzX4eEg9"
    },
    {
        video: 'videos/IMG_9.mov', 
        day: "3",
        location: "Tayrona",
        description: "Salida hacia el centro de la jungla",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_10.mov', 
        day: "3",
        location: "Tayrona",
        description: "Zapatos adecuados",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_11.mov', 
        day: "3",
        location: "Tayrona",
        description: "Sin zapatos",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_12.mov', 
        day: "3",
        location: "Tayrona",
        description: "Playa, jungla y nostros",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_13.mov', 
        day: "3",
        location: "Tayrona",
        description: "Los únicos que trabajan",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_14.mov', 
        day: "3",
        location: "Tayrona",
        description: "Un poco de lluvia tropical en el camino de vuelta",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_15.mov', 
        day: "3",
        location: "Tayrona",
        description: "¿Paulette?",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/iPnynjro4zseMsrt7"
    },
    {
        video: 'videos/IMG_16.mov', 
        day: "4",
        location: "Tayrona",
        description: "Día ajetreado",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/QcXG5LtVVhzX4eEg9"
    },
    {
        video: 'videos/IMG_17.mov', 
        day: "4",
        location: "Tayrona",
        description: "La habitacion",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/QcXG5LtVVhzX4eEg9"
    },
    {
        video: 'videos/IMG_18.mov', 
        day: "5",
        location: "Tayrona",
        description: "Siguiente parada: Cartagena",
        anchor: anchors.Tayrona,
        map: "https://goo.gl/maps/WS6DjyWCXgswiAbc9"
    },
    {
        video: 'videos/IMG_19.mov', 
        day: "5",
        location: "Cartagena",
        description: "Preparación del Día de la Independencia",
        anchor: anchors.Cartagena,
        map: "https://goo.gl/maps/WUGgSefTPMesPSZc7"
    },
    {
        video: 'videos/IMG_20.mov', 
        day: "5",
        location: "Cartagena",
        description: "El hotel colonial",
        anchor: anchors.Cartagena,
        map: "https://goo.gl/maps/M7bkV5L6bBoUyTG49"
    },
    {
        video: 'videos/IMG_21.mov', 
        day: "6",
        location: "Cartagena",
        description: "Paseo por Cartagena",
        anchor: anchors.Cartagena,
        map: "https://goo.gl/maps/LkNfxapwtme4RWGSA"
    },
    {
        video: 'videos/IMG_22.mov', 
        day: "6",
        location: "Cartagena",
        description: "Shooting photo en Cartagena",
        anchor: anchors.Cartagena,
        map: "https://goo.gl/maps/LkNfxapwtme4RWGSA"
    },
    {
        video: 'videos/IMG_23.mov', 
        day: "6",
        location: "Cartagena",
        description: "Paseo tan bien",
        anchor: anchors.Cartagena,
        map: "https://goo.gl/maps/LkNfxapwtme4RWGSA"
    },
    {
        video: 'videos/IMG_24.mov', 
        day: "7",
        location: "Cartagena",
        description: "Dirección del aeropuerto para llegar a las islas",
        anchor: anchors.Cartagena,
        map: "https://goo.gl/maps/XXgWb3nAPb3rvDz68"
    },
    {
        video: 'videos/IMG_25.mov', 
        day: "8",
        location: "Isla de Providencia",
        description: "¡Tierra a la vista!",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/919dyk337kSZHUzGA"
    },
    {
        video: 'videos/IMG_26.mov', 
        day: "8",
        location: "Isla de Providencia",
        description: "Aeropuerto chiquito",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/919dyk337kSZHUzGA"
    },
    {
        video: 'videos/IMG_27.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/LFurMjuExjLDPHA26"
    },
    {
        video: 'videos/IMG_28.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/LFurMjuExjLDPHA26"
    },
    {
        video: 'videos/IMG_29.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "¡Cuidado con los habitantes!",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/LFurMjuExjLDPHA26"
    },
    {
        video: 'videos/IMG_30.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/159C7wpqqYoqpHA98"
    },
    {
        video: 'videos/IMG_31.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/159C7wpqqYoqpHA98"
    },
    {
        video: 'videos/IMG_32.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Cuando llueve: come langosta",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/MdP5f7dcjLUX6jFu7"
    },
    {
        video: 'videos/IMG_33.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/MdP5f7dcjLUX6jFu7"
    },
    {
        video: 'videos/IMG_34.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/MdP5f7dcjLUX6jFu7"
    },
    {
        video: 'videos/IMG_35.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_36.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "¡Cuidado con los habitantes! Parte 2",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/LFurMjuExjLDPHA26"
    },
    {
        video: 'videos/IMG_37.mov', 
        day: "11",
        location: "Isla de Providencia",
        description: "Hora de abandonar el paraíso",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/LFurMjuExjLDPHA26"
    },
    {
        video: 'videos/IMG_38.mov', 
        day: "11",
        location: "Isla de Providencia",
        description: "Hasta la vista",
        anchor: anchors.Providencia,
        map: "https://goo.gl/maps/LFurMjuExjLDPHA26"
    },
    {
        video: 'videos/IMG_39.mov', 
        day: "11",
        location: "Isla de San Andrés",
        description: "Beauty check en la secunda isla",
        anchor: anchors.SanAndres,
        map: "https://goo.gl/maps/D2hYpVwZYB4P1TnK6"
    },
    {
        video: 'videos/IMG_40.mov', 
        day: "11",
        location: "Isla de San Andrés",
        description: "El menú está en el techo",
        anchor: anchors.SanAndres,
        map: "https://goo.gl/maps/RoaBQVK7tS1fpMTYA"
    },
    {
        video: 'videos/IMG_41.mov', 
        day: "11",
        location: "Isla de San Andrés",
        description: "😍",
        anchor: anchors.SanAndres,
        map: "https://goo.gl/maps/RoaBQVK7tS1fpMTYA"
    },
    {
        video: 'videos/IMG_42.mov', 
        day: "11",
        location: "Isla de San Andrés",
        description: "Terminando el camino en San Andrés antes de ir a Medellín",
        anchor: anchors.SanAndres,
        map: "https://goo.gl/maps/4WkmRC8CN452G9dP6"
    },
    {
        video: 'videos/IMG_43.mov', 
        day: "12",
        location: "Medellín",
        description: "Medellín, el monstro",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/7ZtVeSnwWRRBx7Nc6"
    },
    {
        video: 'videos/IMG_44.mov', 
        day: "12",
        location: "Medellín",
        description: "Degustación de productos locales",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/Ragv98Zg7eYteTzV7"
    },
    {
        video: 'videos/IMG_45.mov', 
        day: "12",
        location: "Medellín",
        description: "Los chicos de la comuna 13",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/Ragv98Zg7eYteTzV7"
    },
    {
        video: 'videos/IMG_46.mov', 
        day: "12",
        location: "Medellín",
        description: "Panorámica",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/Ragv98Zg7eYteTzV7"
    },
    {
        video: 'videos/IMG_47.mov', 
        day: "12",
        location: "Medellín",
        description: "Panorámica 2",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/Ragv98Zg7eYteTzV7"
    },
    {
        video: 'videos/IMG_48.mov', 
        day: "13",
        location: "Medellín",
        description: "Cascada en el camino a Guatapé",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/G1fM5UBqoQF13SLJA"
    },
    {
        video: 'videos/IMG_49.mov', 
        day: "13",
        location: "Medellín",
        description: "Guatapé",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/Sro4UZxLpU4TmxLW6"
    },
    {
        video: 'videos/IMG_50.mov', 
        day: "14",
        location: "Medellín",
        description: "Ahora, el matrimonio",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/m9XDSFZWQtranvUL7"
    },
    {
        video: 'videos/IMG_51.mov', 
        day: "14",
        location: "Medellín",
        description: "Yoli y Rémi",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/m9XDSFZWQtranvUL7"
    },
    {
        video: 'videos/IMG_52.mov', 
        day: "14",
        location: "Medellín",
        description: "let's dance!",
        anchor: anchors.Medellin,
        map: "https://goo.gl/maps/m9XDSFZWQtranvUL7"
    },
    {
        video: 'videos/IMG_53.mov', 
        day: "15",
        location: "Bogotá",
        description: "Holá Bogota",
        anchor: anchors.Bogota,
        map: "https://goo.gl/maps/U5FEDpvPuoWt1t6e7"
    },
    {
        video: 'videos/IMG_54.mov', 
        day: "15",
        location: "Bogotá",
        description: "Los gorditos de Botero para el ultimo dia en Colombia",
        anchor: anchors.Bogota,
        map: "https://goo.gl/maps/JhKd12yGLoJ9nFVL8"
    },
    {
        video: 'videos/IMG_55.mov', 
        day: "15",
        location: "Bogotá",
        description: "Adios Colombia... 😢",
        anchor: anchors.Bogota,
        map: "https://goo.gl/maps/U5FEDpvPuoWt1t6e7"
    },

];


// INIT
// create div for each moment (starting moment is already loaded)
for (let i = 1; i<moments.length; i++) {
    let momentdiv = document.createElement("div");
    momentdiv.className="section";
    momentdiv.id="section"+i;
    let wrapperdiv = document.createElement("div");
    wrapperdiv.className = "wrapper";
    momentdiv.appendChild(wrapperdiv);
    let fullpagediv = document.getElementById("fullpage");
    fullpagediv.appendChild(momentdiv);
}

// init fullpage
var myFullpage = new fullpage('#fullpage', {
    // sectionsColor: ['whitesmoke'],
    licenseKey: 'gplv3-license',
    dragAndMove: true,
    scrollingSpeed: 1200,
    onLeave: function(origin, destination, direction) {        
        // Start destination video
        let nextvideo = document.querySelector("#section" + (destination.index) + " video"); 
        nextvideo.play();
        // load near videos
        loadNearVideos(destination.index);
        // Change moment description
        updateMomentDescription(destination.index);
        // Change current button if new anchor
        if (moments[origin.index].anchor != moments[destination.index].anchor) {
            let previousbutton = document.getElementById(moments[origin.index].anchor.name);
            previousbutton.removeAttribute("current");
            let nextbutton = document.getElementById(moments[destination.index].anchor.name);
            nextbutton.setAttribute("current",true);
        }
    },
    afterLoad: function(origin, destination, direction) {
        if (destination.index==0 && origin.index==0) {
            let startvideo = document.querySelector("#section" + (destination.index) + " video"); 
            startvideo.pause();
        }
        // End origin video
        let originvideo;
        if (direction) { 
            originvideo = document.querySelector("#section" + (origin.index) + " video");
            originvideo.pause();
            originvideo.currentTime = 0;
        }       
    }
});

// create anchor buttons
let stepsdiv = document.getElementById("steps");
for (let anchor in anchors) {
    let anchorButton = document.createElement("button");
    anchorButton.className = "step";
    anchorButton.type = "button";
    anchorButton.id = anchors[anchor].name;
    anchorButton.innerHTML = anchors[anchor].name;
    anchorButton.addEventListener('click', (event) => {
        fullpage_api.silentMoveTo(anchors[anchor].firstSection+1);
    });
    // set current button
    if (anchors[anchor].firstSection == 0) {
        anchorButton.setAttribute("current", true);
    }
    stepsdiv.appendChild(anchorButton);
}
    
    
// create a function that open the link in a new window
// when map button is clicked. The current video is paused
// and the map is opened in a new window

function openMap() {
    // get current video
    let currentvideo = document.querySelector("#"+fullpage_api.getActiveSection().item.id + " .vid");
    currentvideo.pause();
    // get map link
    let map = document.getElementById("map");
    window.open(map.dataset.url,"_blank");
}
// get map button class map
const mapbtn = document.getElementById("map");
mapbtn.addEventListener('click', openMap);



// Start button
const startbtn = document.getElementById("start");
const homediv = document.getElementById("home-container");
startbtn.addEventListener('click', () =>{
    homediv.remove();
    // start the starting video
    let startvideo = document.querySelector("#section0 video");
    startvideo.play();
    applyVideoSettings(startvideo);
    // load all next videos
    loadVideos();
});

function hideSpinner(i) {
    return function() {
        let spinner = document.querySelector("#spinner"+i);
        spinner.style.display = "none";
    };
}
 
function loadVideos() {
    for (let i=1; i<moments.length; i++) {
        
        // create video
        let video = document.createElement('video');
        // video.src = moments[i].video;
        applyVideoSettings(video);

        // append video and spinner to wrapper
        let wrappersection = document.querySelector("#section"+i+" .wrapper");
        wrappersection.appendChild(video);
    }
    // load near videos sources
    loadNearVideos(0);
    // load buttons videos
    loadAnchorsVideos();
}


function loadNearVideos(currentVidIndex) {
    // near videos
    let nearVids = [currentVidIndex, currentVidIndex+1,currentVidIndex-1,currentVidIndex+2,currentVidIndex-2];
    // load near videos if possible
    for (let vidIndex of nearVids) {
        let vid = document.querySelector("#section"+ (vidIndex) +" .wrapper"+ " .vid");
        if (vid != null) {
            if (vid.src == "" && vidIndex < moments.length && vidIndex>=0) {
                vid.src = moments[vidIndex].video;
                // console.log("load " +vidIndex);
            }
        }
    }

    // unload far videos
    let buttonsVids = [];
    for (let i in anchors) {
        buttonsVids.push(anchors[i].firstSection);
    }
    for (let i=0; i<moments.length; i++) {
        if (!buttonsVids.includes(i) && !nearVids.includes(i) && i!=currentVidIndex) {
            let vid = document.querySelector("#section"+ (i) +" .wrapper"+ " .vid");
            if (vid != null) {
                if (vid.src != "") {
                    vid.removeAttribute('src');
                    vid.load();
                    // console.log("unload " +i);
                }
            }
        }
    }

}

function loadAnchorsVideos() {
    // buttons videos
    let buttonsVids = [];
    for (let i in anchors) {
        buttonsVids.push(anchors[i].firstSection);
    }
    // load buttons videos
    for (let vidIndex of buttonsVids) {
        let vid = document.querySelector("#section"+ (vidIndex) +" .wrapper"+ " .vid");
        if (vid != null) {
            if (vid.src == "" && vidIndex < moments.length && vidIndex>=0) {
                vid.src = moments[vidIndex].video;
            }
        }
    }
}


function updateMomentDescription(i) {
    // change day
    let day = document.querySelector(".moment .dia");
    day.innerHTML = "Día " + moments[i].day;
    // change location
    let location = document.querySelector(".location");
    location.innerHTML = moments[i].location;
    // change map link
    let map = document.getElementById("map");
    map.dataset.url = moments[i].map;
    // change description
    let description = document.querySelector(".description");
    description.innerHTML = moments[i].description;
}

function applyVideoSettings(video) {
    
    video.playsInline = true;
    video.className = "vid";

    // pause the video when touched or clicked
    video.addEventListener("mousedown", function() {video.pause();});
    video.addEventListener("mouseup", function() {video.play();});


    // mobile
    let swiped = false;
    let touchStartY;
    let touchMoveY;
    video.addEventListener("touchstart", function(e) {
        video.pause();
        // e.preventDefault();
        touchStartY = e.touches[0].clientY;
    });
    video.addEventListener("touchmove", function(e) {
        touchMoveY = e.touches[0].clientY;
        if (touchStartY - touchMoveY > 50) {
            swiped = true;
        }
    });
    video.addEventListener("touchend", function() {
        if (!(swiped)) {video.play()};
    });
    video.addEventListener("touchcancel", function() {
        if (!(swiped)) {video.play()};
    });

    // ended video event (go to next video)
    video.addEventListener('ended', (event) => {
        fullpage_api.moveSectionDown();
    });

}


// DESKTOP layout
function applyLayout() {
    // if ratio window width/height is bigger than 1,
    // remove the "width" attributes of the .vid css class.
    // This is to avoid the video to be stretched
    
    // Getting the stylesheet
    const stylesheet = document.styleSheets[2];
    let elementRules;

    // looping through all its rules and getting your rule
    for(let i = 0; i < stylesheet.cssRules.length; i++) {
        if(stylesheet.cssRules[i].selectorText === '.vid') {
            elementRules = stylesheet.cssRules[i];
        }
    }

    if (mobiledevice==false) {
        if (window.innerWidth/window.innerHeight > 1) {
            // modifying the rule in the stylesheet
            elementRules.style.removeProperty('width');

        } else {
            // modifying the rule in the stylesheet
            elementRules.style.setProperty('width', '100%');
        }
    }
    if (window.innerWidth/window.innerHeight < (1080/1920)) {
        // modifying the rule in the stylesheet
        elementRules.style.removeProperty('width');
    } else {
        if (mobiledevice==true) {
            // modifying the rule in the stylesheet
            elementRules.style.setProperty('width', '100%');

        }
    }
}
applyLayout();
window.onresize = applyLayout;