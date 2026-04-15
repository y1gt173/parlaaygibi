let current = 0;
const slider = document.getElementById("slider");
const total = document.querySelectorAll(".section").length;

function go(i){
  current = i;
  slider.style.transform = `translateX(-${i * 100}vw)`;
  updateSidebar();
}

function updateSidebar(){
  document.querySelectorAll(".sidebar button").forEach((b,i)=>{
    b.classList.toggle("active", i===current);
  });
}

/* 🔁 MUSIC */
function toggleMusic(){
  let song = document.getElementById("song");
  song.paused ? song.play() : song.pause();
}
