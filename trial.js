var pause = document.querySelector(".fa-pause");
var fill = document.querySelector(".slider_container");
var volume_slide = document.querySelector(".seek_volume");
var seek_slider = document.querySelector(".seek_slider"); 
var curr_time = document.querySelector(".current-time");
var total_duration = document.querySelector(".total-duration");
var forward = document.querySelector(".fa-forward");    

checker();
//call move function here, cus we want the function to run as soon as is played
move();

//call function every second to update the audio current time text in DOM
setInterval(function() {
    seekUpdate();
}, 1000)
//on clicktoggle play and pause icons with respect to audio i.e if play or paused     
function checker() {
  pause.onclick = function() {
    player();
  }
  function player() {
    if(pause.style.opacity === "0.85") {
      audi.play();
          
      pause.classList.remove("fa-play");
      pause.classList.add("fa-pause");
      pause.style.color = "white";
      pause.style.opacity = "1";
    } else {
      audi.pause();
      pause.classList.remove("fa-pause");
      pause.classList.add("fa-play");
      pause.style.opacity = "0.85";
    }
  }
        
}
//when a user move the input slider,let the new position of the slider determine the audio current time
function seekTo() {
  seekto = audi.duration * (seek_slider.value / 100);
  audi.currentTime = seekto;
  //call the function below here,cus we want fuction to run only when we change the slider position
  colorSlider();
}
//as audio starts playing, let background color begin to display, with respect to audio current time
function move() {
  audi.addEventListener("timeupdate", function() {
      var position = audi.currentTime / audi.duration;
      var val = position * 100;
      seek_slider.value = val;
      setTimeout(() => {
        
      
        seek_slider.style.background = 'linear-gradient(to right, #fff 0%, #fff ' + val + '%, rgb(156, 152, 152) ' + val + '%, rgb(156, 152, 152) 100%)';
      }, 700);
  });
}
//on change of slider position, let background color fill the distance between beginning of slider position and the new slider position
function colorSlider() {
  seek_slider.oninput = function() {

      var value = (this.value-this.min)/(this.max-this.min)*100;
      this.style.background = 'linear-gradient(to right, #fff 0%, #fff ' + value + '%, rgb(156, 152, 152) ' + value + '%, rgb(156, 152, 152) 100%)';
  };
        
        
}
//update audio current time text with new every second
function seekUpdate() {
  if(!isNaN(audi.duration)) {
          
        
    let seekPosition = 0;
    seekPosition = audi.currentTime / audi.duration * 100;
    seek_slider.value = seekPosition;
    let currentMinutes = Math.floor(audi.currentTime / 60);
    let currentSeconds = Math.floor(audi.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audi.duration / 60);
    let durationSeconds = Math.floor(audi.duration - durationMinutes * 60)
    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; } 

    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; } 

    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; } 

    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; } 
    curr_time.textContent = currentMinutes + ":" + currentSeconds; 

    total_duration.textContent = durationMinutes + ":" + durationSeconds;
     
  } 

}
//let slider value determine audio volume
function seekVolume() {
  volume = volume_slide.value / 100;
  audi.volume = volume;
  //let new position of slider determine background color length
  volume_slide.oninput = function() {

    var valu = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #fff 0%, #fff ' + valu + '%, rgb(156, 152, 152) ' + valu + '%, rgb(156, 152, 152) 100%)';
  };
       
        
}