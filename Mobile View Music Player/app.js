///// carrousels ///////////

// On selectionne les images de notre carousel
const carousel = [...document.querySelectorAll('.carousel img')];

// Initialisation d'un compteur
let carouselImageIndex = 0;

// Changement d'image du carrousel
const changeCarousel = () => {
    // Met la classe active a la premiere image
    carousel[carouselImageIndex].classList.toggle('active');
    // Si mon image est la derniere a s'afficher on remet la premiere image au compteur sinon on passe à l'image suivante
    if (carouselImageIndex >= carousel.length - 1) {
        carouselImageIndex = 0;
    } else {
        carouselImageIndex++;
    }
    // Et on désactive la classe active
    carousel[carouselImageIndex].classList.toggle('active');
}
// On effectue le changement d'image toutes les 3 secondes
setInterval(() => {
    changeCarousel();
}, 3000);

//////////////// Navigation ////////////////

//////toggling music player //////

// On selectionne la nav du bas
const musicPlayerSection = document.querySelector('.music-player-section');

// On innitialiseun compteur de click
let clickCount = 1;

// Au click sur la nav du bas 
musicPlayerSection.addEventListener('click', () => {
    if (clickCount >= 2) {
        musicPlayerSection.classList.add('active');
        // Une fois afficher on reset le compteur
        clickCount = 1;
        return;
    }
    //Sinon clickCount = 2
    clickCount++;
    // Et se reset toutes les 250 milliseconde
    setTimeout(() => {
        clickCount = 1;
    }, 250);
    //  il faut donc cliquer vite pour que clickCount soit égale à 2
});

//////// back from music player

// On selectionne la fleche de retour
const backToHomeBtn = document.querySelector('.music-player-section .back-btn');

// Au click elle nous ramene à l'accueil
backToHomeBtn.addEventListener('click', () => {
    musicPlayerSection.classList.remove('active');
});

////////// Access playlist

// On selectionne la section playlist
const playslistSection = document.querySelector('.playlist');
// Et le button qui va mener au playlist
const navBtn = document.querySelector('.music-player-section .nav-btn');

// Au clic ajoute la classe active au button pour afficher la playlist
navBtn.addEventListener('click', () => {
    playslistSection.classList.add('active');
})

///////// back from playlist to music player

const backToMusicPlayer = document.querySelector('.playlist .back-btn');

backToMusicPlayer.addEventListener('click', () => {
    playslistSection.classList.remove('active');
});

///////// navigation done ////////////

//////// music

let currentMusic = 0;

const music = document.querySelector('#audio-source');

const seekBar = document.querySelector('.music-seek-bar');
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.artist-name');
const coverImage = document.querySelector('.cover');
const currentMusicTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.duration');

// select all button here

const forwardBtn = document.querySelector('i.fa-forward');
const backWardBtn = document.querySelector('i.fa-backward');
const playBtn = document.querySelector('i.fa-play');
const pauseBtn = document.querySelector('i.fa-pause');
const repeatBtn = document.querySelector('span.fa-redo');
const volumeBtn = document.querySelector('span.fa-volume-up');
const volumeSlider = document.querySelector('.volume-slider');

//  playBtn click event

playBtn.addEventListener('click', () => {
    playBtn.classList.remove('active');
    pauseBtn.classList.add('active');
});


//  pauseBtn click event

pauseBtn.addEventListener('click', () => {
    pauseBtn.classList.remove('active');
    playBtn.classList.add('active');
});

// function for setting up music

const setMusic = (i) => {
    seekBar.value = 0;
    // On déclare song qui est égale au son actuel prit parmis l'object de data.js
    let song = songs[i];
    
    currentMusic = i;

    // On insere dynamiquement les informations d'une chanson dnas l'HTML
    // Balise audio HTML = à la source d'une music de l'objet dans data.js
    music.src = song.path;
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    coverImage.src = song.cover;

    // Afin de mettre à jour la barre de lusic et ses donées (durée et temps acutel de ou en est la chanson)
    setInterval(() => {
        // Le maximum de la barre de music est la durée de la chanson
        seekBar.max = music.duration;
        console.log(music.duration);
        // On insere la durée de la music avec le bon format dans le HTML
        musicDuration.innerHTML = formatTime(music.duration);
    }, 300);
    currentMusicTime.innerHTML = '00 : 00';
}

setMusic(0);

//  format duration in 00 : 00 format

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = '0' + min;
    }

    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = '0'+ sec;
    }
    return `${min} : ${sec}`;
}

