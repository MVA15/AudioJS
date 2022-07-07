var data = {
    title: [
        
    ],
    song: [
        
    ],
    poster: [
        
    ]
    }
    
    
    var song = new Audio ()
    
    // console.log(song);
    
    window.onload = function () {
    playSong()
    }
    
    
    
    var currentSong = 0
    
    function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    
    
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
    }
    
    
    function playOrPauseSong() {
    let play = document.getElementById("play")
    //console.log(play);
    
    if (song.paused) {
    song.play();
    play.src = "images/pause.png" //pause
    } else {
    song.pause();
    play.src = "images/play-button-arrowhead.png"
    }
    }
