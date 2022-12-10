var myFullpage = new fullpage('#fullpage', {
    // sectionsColor: ['whitesmoke'],
    licenseKey: 'gplv3-license',
    // onLeave: function(origin, destination, direction) {        
    //     // Start destination video
    //     // let video = document.getElementById("video"+destination.index);
    //     let nextvideo = document.querySelector("#section" + (destination.index) + " video"); 
    //     nextvideo.play();
    // },
    afterLoad: function(origin, destination, direction) {
        // End origin video

        let lastvideo;
        if (direction) { 
            lastvideo = document.querySelector("#section" + (origin.index) + " video");
            lastvideo.pause();
            lastvideo.currentTime = 0;
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




// Add "fullpage_api.moveTo(i)" button for each section
// Add 

// check https://alvarotrigo.com/fullPage/docs/#movetosection-slide

// check:
// https://pagespeedchecklist.com/on-demand-embedded-videos
// https://css-tricks.com/what-does-playsinline-mean-in-web-video/
