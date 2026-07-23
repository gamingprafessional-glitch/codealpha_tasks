const songs = [

{
title:"Heat Waves",
artist:"Glass ANimals",
src:"music/song1.mp3",
cover:"images/cover1.jpg"
},

{
title:"You're Hot,Calm Down",
artist:"Mr. Muffin",
src:"music/song2.mp3",
cover:"images/cover2.jpg"
},

{
title:"Zulfein",
artist:"Mahul Mahesh",
src:"music/song3.mp3",
cover:"images/cover3.jpg"
}

];

const audio=document.getElementById("audio");

const title=document.getElementById("title");

const artist=document.getElementById("artist");

const cover=document.getElementById("cover");

const playBtn=document.getElementById("play");

const prevBtn=document.getElementById("prev");

const nextBtn=document.getElementById("next");

const progress=document.getElementById("progress");

const volume=document.getElementById("volume");

const playlist=document.getElementById("playlist");

const current=document.getElementById("current");

const duration=document.getElementById("duration");

let index=0;

function loadSong(i){

audio.src=songs[i].src;

title.innerHTML=songs[i].title;

artist.innerHTML=songs[i].artist;

cover.src=songs[i].cover;

document.querySelectorAll("li").forEach(li=>li.classList.remove("active"));

document.querySelectorAll("li")[i].classList.add("active");

}

songs.forEach((song,i)=>{

const li=document.createElement("li");

li.innerHTML=song.title+" - "+song.artist;

li.onclick=()=>{

index=i;

loadSong(index);

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

};

playlist.appendChild(li);

});

loadSong(index);

playBtn.onclick=()=>{

if(audio.paused){

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

}

else{

audio.pause();

playBtn.innerHTML='<i class="fa-solid fa-play"></i>';

}

};

nextBtn.onclick=()=>{

index++;

if(index>=songs.length) index=0;

loadSong(index);

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

};

prevBtn.onclick=()=>{

index--;

if(index<0) index=songs.length-1;

loadSong(index);

audio.play();

playBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

};

audio.addEventListener("loadedmetadata",()=>{

duration.innerHTML=format(audio.duration);

progress.max=audio.duration;

});

audio.addEventListener("timeupdate",()=>{

progress.value=audio.currentTime;

current.innerHTML=format(audio.currentTime);

});

progress.oninput=()=>{

audio.currentTime=progress.value;

};

volume.oninput=()=>{

audio.volume=volume.value;

};

audio.onended=()=>{

nextBtn.click();

};

function format(time){

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10) sec="0"+sec;

return min+":"+sec;

}