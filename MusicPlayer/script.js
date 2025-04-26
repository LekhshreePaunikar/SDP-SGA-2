console.log("Welcome to Music Player");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

// Populate the Song List
let songs = [
    {songName: "Dont Know What To Do", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dumb Dumb", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Forever Young", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Lovesick Girls", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Pretty Savage", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Play&Pause Button Logic
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = "icons/pause-solid.svg";
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.src = "icons/play-solid.svg";
        gif.style.opacity = 0;
    }
})
// Updating the Progress Bar
audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

// Clicking on the Progress Bar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// Next Song Button Logic
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

})

// Previous Song Button Logic
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
})