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
        firstSection: 1,
    },
    Cartagena: {
        name: "Cartagena",
        firstSection: 3,
    }
};

const moments = [
    // Starting moment is already loaded
    {
        video: 'videos/santamartamango.mov', 
        day: "1",
        location: "Santa Marta",
        description: "Primer dia",
        anchor: anchors.SantaMarta,
    },
    {
        video: 'videos/hammock.mov', 
        day: "2",
        location: "Tayrona",
        description: "Siesta en Amazonia",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/santamartamango.mov', 
        day: "3",
        location: "Pseudo Santa Marta",
        description: "Back to Santa Marta",
        anchor: anchors.Tayrona,
    },
    {
        video: 'videos/hammock.mov', 
        day: "4",
        location: "Tayrona",
        description: "Siesta en Amazonia",
        anchor: anchors.Cartagena,
    },
    {
        video: 'videos/santamartamango.mov', 
        day: "5",
        location: "Pseudo Santa Marta",
        description: "Back to Santa Marta",
        anchor: anchors.Cartagena,
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
    day.innerHTML = "Dia " + moments[i].day;
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
