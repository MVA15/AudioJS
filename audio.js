var data = {
    title: [
    'Bruno-mars-when-i-was-your',
    "Lewis-capaldi-before-you-go",
    "Shawn Mendes - Stitches" ,
    ],
    song: [
    'music/bruno-mars-when-i-was-your.mp3' ,
    "music/lewis-capaldi-before-you-go.mp3" ,
    "music/Shawn Mendes - Stitches (mp3store.cc).mp3" ,
    ],
    poster: [ 
    "https://i.ytimg.com/vi/vkNEc-eCsHY/maxresdefault.jpg" ,
    "https://i.ytimg.com/vi/QpljgJPFWl8/maxresdefault.jpg" ,
    "https://i.ytimg.com/vi/UYCg6NBiXMI/maxresdefault.jpg" ,
    ]
}

var currentSong = 0
var song = new Audio();



    window.onload = function () {
    playSong()
};


function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById ("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById ("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById ("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}

function playOrPauseSong () {
    let play = document.getElementById ("play")
    //console.log(play);
    
    if (song.paused) {
    song.play();
    play.src = "images/pause.png" //pause
    } else {
    song.pause();
    play.src = "images/play-button-arrowhead.png" //play
    }
}


song.addEventListener("timeupdate", function () {
    // console.log(song.currentTime);
    // console.log(song.duration);
    let fill = document.getElementById("fill")
    // console.log(fill);
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; // fill
    
    convertTime(song.currentTime) // cur. time
    
    if (song.ended) {
    next()
    }
})


function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime")

    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    console.log(seconds);
    console.log(min);
    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
   
};


function totalTime(seconds) {
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)

    
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    if(isNaN(min) || isNaN(sec)){
        return false
    }else{

        currentTime.textContent += "/" + min + ":" + sec
    }


    
};

function next() {
    currentSong++;
    if (currentSong >= data.song.length) {
    currentSong = 0
    }
    playSong ();
    play.src = "images/pause.png"
}

function pre() {
    currentSong--;
    if (currentSong < 0) {
    currentSong = data.song.length - 1;
    }
    playSong ();
    play.src = "images/pause.png"
}

function muted() {
    var mute = document.getElementById ("mute")
    if (song.muted) {
    song.muted = false
    mute.src = "images/volume.png" //mute
    } else {
    song.muted = true
    mute.src = "images/volume-mute.png"
    //unmute
    }
}

function increase() {
    song.volume += 0.2;
}

function decrease() {
    song.volume -= 0.2;
}
