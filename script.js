let current = 0;
const slider = document.getElementById("slider");
const total = document.querySelectorAll(".section").length;

function go(index){
  current = index;
  slider.style.transform = `translateX(-${index * 100}vw)`;
  updateSidebar();

  // 🌙 özel sayfa (5. index)
  if(index === 5){
    box.innerHTML = "";
    i = 0;
    typeWriter();
  }
}

function updateSidebar(){
  document.querySelectorAll(".sidebar button").forEach((b,i)=>{
    b.classList.toggle("active", i === current);
  });
}

/* MUSIC */
function toggleMusic(){
  let song = document.getElementById("song");
  song.paused ? song.play() : song.pause();
}

/* TYPEWRITER */
const box = document.getElementById("box");
const text = box.dataset.text;
let i = 0;

function typeWriter(){
  if(i < text.length){
    box.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  } else {
    box.classList.remove("cursor");
  }
}

function toggleSurprise(){
  document.getElementById("surprise").classList.toggle("show");
}
