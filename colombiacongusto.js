let mobiledevice;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    mobiledevice = true;
} else {
    // false for not mobile device
    mobiledevice = false;
}

const videosList = [
    // Starting vid is already loaded during init
    'videos/santamartamango.mov',
    'videos/hammock.mov',
    'videos/santamartamango.mov',
];

const moments = [
    // Starting moment is already loaded
    {
        day: "1",
        location: "Santa Marta",
        description: "Primer dia",
    },
    {
        day: "2",
        location: "Tayrona",
        description: "Siesta en Amazonia",
    },
    {
        day: "3",
        location: "Pseudo Santa Marta",
        description: "Back to Santa Marta",
    }
];


// Next section when video ended
function endedVidEvent() {
    let videos = document.querySelectorAll('.vid');
    for (let i=0; i<videos.length; i++) {
        videos[i].addEventListener('ended', (event) => {
            fullpage_api.moveSectionDown();
        });
    }    
}

var myFullpage = new fullpage('#fullpage', {
    // sectionsColor: ['whitesmoke'],
    licenseKey: 'gplv3-license',
    onLeave: function(origin, destination, direction) {        
        // Start destination video
        let nextvideo = document.querySelector("#section" + (destination.index) + " video"); 
        nextvideo.play();
        // Change moment description
        updateMomentDescription(destination.index);
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

// let startvideo = document.querySelector("#section0 video");
// startvideo.addEventListener('playing', (event) => {
//     if (mobiledevice) {  
//         // for (let i=1; i<videos.length; i++) {
//         //     videos[i].play();
//         //     videos[i].pause();
//         //     videos[i].currentTime = 0;
//         // }
//         fullpage_api.moveSectionDown();
//     }
// });


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
if (mobiledevice==false) {startbtn.click();}

function loadVideos() {
    for (let i=1; i<3; i++) {
        let video = document.createElement('video');
        video.src = videosList[i];
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

//


// Add "fullpage_api.moveTo(i)" button for each section
// Add 

// check https://alvarotrigo.com/fullPage/docs/#movetosection-slide

// check:
// https://pagespeedchecklist.com/on-demand-embedded-videos
// https://css-tricks.com/what-does-playsinline-mean-in-web-video/
