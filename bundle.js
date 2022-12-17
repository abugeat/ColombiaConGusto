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
        name: "Santa Marta",
        firstSection: 0,
    },
    Tayrona: {
        name: "Tayrona",
        firstSection: 3,
    },
    Cartagena: {
        name: "Cartagena",
        firstSection: 18,
    },
    Providencia: {
        name: "Isla de Providencia",
        firstSection: 24,
    },
    SanAndrés: {
        name: "Isla de San Andrés",
        firstSection: 38,
    },
    Medellin: {
        name: "Medellín",
        firstSection: 42,
    },
    Bogota: {
        name: "Bogotá",
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
    },
    {
        video: 'videos/IMG_2.mov', 
        day: "1",
        location: "Santa Marta",
        description: "Domingo en Santa Marta",
        anchor: anchors.SantaMarta,
    },
    {
        video: 'videos/IMG_3.mov', 
        day: "1",
        location: "Santa Marta",
        description: "De cara a la siguiente etapa: Tayrona",
        anchor: anchors.SantaMarta,
    },
    {
        video: 'videos/IMG_4.mov', 
        day: "2",
        location: "Tayrona",
        description: "Vamos!",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_5.mov', 
        day: "2",
        location: "Tayrona",
        description: "Bien llegados a la jungla",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_6.mov', 
        day: "2",
        location: "Tayrona",
        description: "La hermosa vista desde la habitación",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_7.mov', 
        day: "2",
        location: "Tayrona",
        description: "Siesta con vecinos ruidosos",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_8.mov', 
        day: "3",
        location: "Tayrona",
        description: "Desayuno con vistas",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_9.mov', 
        day: "3",
        location: "Tayrona",
        description: "Salida hacia el centro de la jungla",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_10.mov', 
        day: "3",
        location: "Tayrona",
        description: "Zapatos adecuados",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_11.mov', 
        day: "3",
        location: "Tayrona",
        description: "Sin zapatos",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_12.mov', 
        day: "3",
        location: "Tayrona",
        description: "Playa, jungla y nostros",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_13.mov', 
        day: "3",
        location: "Tayrona",
        description: "Los únicos que trabajan",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_14.mov', 
        day: "3",
        location: "Tayrona",
        description: "Un poco de lluvia tropical en el camino de vuelta",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_15.mov', 
        day: "3",
        location: "Tayrona",
        description: "Paulette?",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_16.mov', 
        day: "4",
        location: "Tayrona",
        description: "Día ajetreado",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_17.mov', 
        day: "4",
        location: "Tayrona",
        description: "El habitacion",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_18.mov', 
        day: "5",
        location: "Tayrona",
        description: "Siguiente parada: Cartagena",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/IMG_19.mov', 
        day: "5",
        location: "Cartagena",
        description: "Preparación del Día de la Independencia",
        anchor: anchors.Cartagena,
    },
    {
        video: 'videos/IMG_20.mov', 
        day: "5",
        location: "Cartagena",
        description: "El hotel colonial",
        anchor: anchors.Cartagena,
    },
    {
        video: 'videos/IMG_21.mov', 
        day: "6",
        location: "Cartagena",
        description: "Paseo por Cartagena",
        anchor: anchors.Cartagena,
    },
    {
        video: 'videos/IMG_22.mov', 
        day: "6",
        location: "Cartagena",
        description: "Shooting photo en Cartagena",
        anchor: anchors.Cartagena,
    },
    {
        video: 'videos/IMG_23.mov', 
        day: "6",
        location: "Cartagena",
        description: "Paseo tan bien",
        anchor: anchors.Cartagena,
    },
    {
        video: 'videos/IMG_24.mov', 
        day: "7",
        location: "Cartagena",
        description: "Dirección del aeropuerto para llegar a las islas",
        anchor: anchors.Cartagena,
    },
    {
        video: 'videos/IMG_25.mov', 
        day: "8",
        location: "Isla de Providencia",
        description: "¡Tierra a la vista!",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_26.mov', 
        day: "8",
        location: "Isla de Providencia",
        description: "Aeropuerto chiquito",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_27.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_28.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_29.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "¡Cuidado con los habitantes!",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_30.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_31.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_32.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Cuando llueve: come langosta",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_33.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_34.mov', 
        day: "8, 9 y 10",
        location: "Isla de Providencia",
        description: "Daily life en Providencia",
        anchor: anchors.Providencia,
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
        description: "¡Cuidado con los habitantes! 2",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_37.mov', 
        day: "11",
        location: "Isla de Providencia",
        description: "Hora de abandonar el paraíso",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_38.mov', 
        day: "11",
        location: "Isla de Providencia",
        description: "Hasta la vista",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_39.mov', 
        day: "11",
        location: "Isla de San Andrés",
        description: "Beauty check en la secunda isla",
        anchor: anchors.SanAndrés,
    },
    {
        video: 'videos/IMG_40.mov', 
        day: "11",
        location: "Isla de San Andrés",
        description: "El menú está en el techo",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_41.mov', 
        day: "11",
        location: "Isla de San Andrés",
        description: "😍",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_42.mov', 
        day: "11",
        location: "Isla de San Andrés",
        description: "Terminando el camino en San Andrés antes de ir a Medellín",
        anchor: anchors.Providencia,
    },
    {
        video: 'videos/IMG_43.mov', 
        day: "12",
        location: "Medellín",
        description: "Medellín, el monstro",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_44.mov', 
        day: "12",
        location: "Medellín",
        description: "Degustación de productos locales",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_45.mov', 
        day: "12",
        location: "Medellín",
        description: "Los chicos de la comuna 13",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_46.mov', 
        day: "12",
        location: "Medellín",
        description: "Panorámica",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_47.mov', 
        day: "12",
        location: "Medellín",
        description: "Panorámica 2",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_48.mov', 
        day: "13",
        location: "Medellín",
        description: "Cascada en el camino a Guatapé",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_49.mov', 
        day: "13",
        location: "Medellín",
        description: "Guatapé",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_50.mov', 
        day: "14",
        location: "Medellín",
        description: "Ahora, el matrimonio",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_51.mov', 
        day: "14",
        location: "Medellín",
        description: "Yoli y Rémi",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_52.mov', 
        day: "14",
        location: "Medellín",
        description: "let's dance!",
        anchor: anchors.Medellin,
    },
    {
        video: 'videos/IMG_53.mov', 
        day: "15",
        location: "Bogotá",
        description: "Los gorditos de Bodero para el ultimo dia en Colombia",
        anchor: anchors.Bogota,
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
new fullpage('#fullpage', {
    // sectionsColor: ['whitesmoke'],
    licenseKey: 'gplv3-license',
    onLeave: function(origin, destination, direction) {        
        // Start destination video
        let nextvideo = document.querySelector("#section" + (destination.index) + " video"); 
        nextvideo.play();
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
        fullpage_api.moveTo(anchors[anchor].firstSection+1);
    });
    // set current button
    if (anchors[anchor].firstSection == 0) {
        anchorButton.setAttribute("current", true);
    }
    stepsdiv.appendChild(anchorButton);
}
    
    



// Start button
const startbtn = document.getElementById("start"); 
startbtn.addEventListener('click', () =>{
    startbtn.remove();
    // start the starting video
    let startvideo = document.querySelector("#section0 video");
    startvideo.play();
    startvideo.addEventListener('ended', (event) => {
        fullpage_api.moveSectionDown();
    });
    // load all next videos
    loadVideos();
});
// start trip auto with non mobile device
if (mobiledevice==false) {
    startbtn.click();
} else {
    // start trip auto if first video play!
    let startvideo = document.querySelector("#section0 video");
    startvideo.addEventListener('playing', (event) => {
        let startbtnexist = document.getElementById("start");
        if (startbtnexist) {
            startbtn.click();
        }
    });    
}


 
function loadVideos() {
    for (let i=1; i<moments.length; i++) {
        let video = document.createElement('video');
        video.src = moments[i].video;
        video.playsInline = true;
        video.className = "vid";
        // ended video event (go to next video)
        video.addEventListener('ended', (event) => {
            fullpage_api.moveSectionDown();
        });
        // append video
        let wrappersection = document.querySelector("#section"+i+" .wrapper");
        wrappersection.appendChild(video);
        
    }
}


function updateMomentDescription(i) {
    // change day
    let day = document.querySelector(".moment .dia");
    day.innerHTML = "Día " + moments[i].day;
    // change location
    let location = document.querySelector(".location");
    location.innerHTML = moments[i].location;
    // change description
    let description = document.querySelector(".description");
    description.innerHTML = moments[i].description;
}




// check:
// https://alvarotrigo.com/fullPage/docs/#movetosection-slide
// https://pagespeedchecklist.com/on-demand-embedded-videos
// https://css-tricks.com/what-does-playsinline-mean-in-web-video/
