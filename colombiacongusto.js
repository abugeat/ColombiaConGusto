let mobiledevice;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    mobiledevice = true;
} else {
    // false for not mobile device
    mobiledevice = false;
}

var myFullpage = new fullpage('#fullpage', {
    // sectionsColor: ['whitesmoke'],
    licenseKey: 'gplv3-license',
    onLeave: function(origin, destination, direction) {        
        // Start destination video
        let nextvideo = document.querySelector("#section" + (destination.index) + " video"); 
        nextvideo.play();
    },
    afterLoad: function(origin, destination, direction) {
        if (destination.index==0 && origin.index==0) {
            let startvideo = document.querySelector("#section" + (destination.index) + " video"); 
            startvideo.play();
        }
        // End origin video
        let originvideo;
        if (direction) { 
            originvideo = document.querySelector("#section" + (origin.index) + " video");
            originvideo.pause();
            originvideo.currentTime = 0;
        }       
    }
    // onLeave: function(origin, destination, direction) {
    //     let lastvideo;
    //     if (direction) { 
    //         lastvideo = document.querySelector("#section" + (origin.index) + " video");
    //         lastvideo.pause();
    //         lastvideo.currentTime = 0;
    //     }       
    // }
    // onLoad?
});


// Next section when video ended
const videos = document.querySelectorAll('.vid');
for (let i=0; i<videos.length; i++) {
    videos[i].addEventListener('ended', (event) => {
        fullpage_api.moveSectionDown();
    });
}

// Start
const startbtn = document.getElementById("start");
startbtn.addEventListener('click', () =>{
    fullpage_api.moveSectionDown();
    if (mobiledevice==false) {
        videos[1].play();
        for (let i=2; i<videos.length; i++) {
            videos[i].play();
            videos[i].pause();
            videos[i].currentTime = 0;
        }
    }
});




// Add "fullpage_api.moveTo(i)" button for each section
// Add 

// check https://alvarotrigo.com/fullPage/docs/#movetosection-slide

// check:
// https://pagespeedchecklist.com/on-demand-embedded-videos
// https://css-tricks.com/what-does-playsinline-mean-in-web-video/
