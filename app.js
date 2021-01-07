var mainOne = document.querySelector(".main1");
var mainTwo = document.querySelector(".main2");
var mainThree = document.querySelector(".main3");
var mainFour = document.querySelector(".main4");
var mainFive = document.querySelector(".main5");
var mainSix = document.querySelector(".main6");
var mainSeven = document.querySelector(".main7");
var mainEight = document.querySelector(".main8");
var bottom = document.querySelector(".bottom-part");
var audi = document.querySelector(".audi");
var mainNine = document.querySelector(".main9");
var mainTen = document.querySelector(".main10");
var arr = [mainOne,mainTwo,mainThree,mainFour,mainFive,mainSix,mainSeven,mainEight,mainNine,mainTen]; 
var invinsible = document.querySelector(".invinsible");
var major = document.querySelector(".music-container");
var main = document.querySelector(".main");
var image = document.querySelector(".image");
var artiste_name = document.querySelector(".artiste_name");
var song_name = document.querySelector(".song_name");
var goBack = document.getElementById("left-arrow");
var backward = document.querySelector(".fa-backward");
var forward = document.querySelector(".fa-forward");

var task = [
  {
    name : [
      "audios/justin",
      "audios/Omah_Lay_-_Godly",
      "audios/migos",
      "audios/davesong",
      "audios/kehlani",
      "audios/Chanel",
      "audios/travis",
      "audios/pato_Abule",
      "audios/aladeogo",
      "audios/buju"


    ]
  },
  {
    artiste: [
       "Justin ft Quavo",
       "omahlay",
       "Migos",
       "Davido",
       "fate of the furious",
       "Rae Sremmurd",
       "Travis Scott",
       "Pato Ranking",
       "Phemmy",
       "Buju ft Burnaboy"

    ]
  },
  {
    song: [
       "Intentions",
       "Godly",
       "Motor Sport",
       "The Best",
       "Day One",
       "Chanel",
       "HIGHEST IN THE ROOM",
       "Abule",
       "Aladeogo",
       "Lenu"
    ]
  },
  {
    img: [
       "img/justin",
       "img/omahlay",
       "img/migos-cover-motorsport",
       "img/davido-the-best",
       "img/fate-ofthe-furious",
       "img/rae-sremmurd",
       "img/travis-scott-highest-in-the-room",
       "img/abule-cover",
       "img/aladeogo" ,
       "img/buju"          
    
    ]
  }
  

];

//iterate over all the divs and put the innerHTML of clicked div in the buttom div
for(var i = 0; i<arr.length; i++){

  arr[i].addEventListener("click", function() {
  
    var val = this.innerHTML;
  
    bottom.innerHTML = val;
    var saver = bottom.innerHTML;
    
    //since id of each element is like an increasing number from 0-9, let the value of clicked elementid(this.id) be used to find the index from task that will allow its audio relate with clicked element
    audi.src = task[0].name[this.id] +".mp3";

    audi.play();

    var find = this.id;
    //since my images sources dont all end with .jpg,use if,else statements
    if(find === "1" || find === "3" || find === "9") {
      main.style.backgroundImage = 'url('+ task[3].img[find] +'.jpeg)';
    } else {
       main.style.backgroundImage = 'url('+ task[3].img[find] +'.jpg)';
    }
    //when bottom is clicked, remove main div and display invinsible div
    bottom.onclick = function() {
      major.style.display = "none";
      invinsible.style.display = "flex";
      bottom.style.display = "none";
      //not all images sources ends with .jpg
      if(find === "1" || find === "3" || find === "9") {
        image.src = task[3].img[find] +".jpeg";
      } else{
        image.src = task[3].img[find] +".jpg";
      }
      artiste_name.textContent = task[1].artiste[find];
      song_name.textContent = task[2].song[find];     
    }
    //when arrow is clicked,let invinsible div disappear and let main div be displayed
    goBack.onclick = function() {
        invinsible.style.display = "none";
        major.style.display = "block";
        bottom.style.display = "flex";      
    }
    //since find is a string, lets remove the strings from it so we can use as pure number
    var groove = JSON.parse(find);
    var newFind = groove;
     //because task.name array index are arranged in sequence corresponding to the id.value of each .main"" elements i.e(they both go from 0-9), lets use it as reference, note, could use any object in the task array because their index also go from 0-8, but lets go with name
      //if i clicked on next element with id="2" task[0].name[2] will give me the audio src name for id"2" dom which is migos motorsport, so also task[3].img[2] will give me img of migos
      //so if there is any update to id.value task[0].name/song/artiste/img[id.value] will also get updated to correspond to id.value 
      
    forward.onclick = function() {
      if(newFind < task[0].name.length) {
        //if the id.value != or < the last div(.main9), lets display img,artiste and play song of div elements that come after the,i.e if the img and audio currently being displayed are for second div, then on click event third div img and audio should load up

        newFind += 1;

        if(newFind === 1 || newFind === 3 || newFind === 9) {
          image.src = task[3].img[newFind] +".jpeg";
        } else {
          image.src = task[3].img[newFind] +".jpg";

        }
        //grab the innerhtml of the new element and pass it to buttom to be displayed in the buttom-part so that when we go back,we see d new element in bottom div

        var grab = arr[newFind].innerHTML;
        bottom.innerHTML = grab;
        //update image background to new element
        if(newFind === 1 || newFind === 3 || newFind === 9) {
            main.style.backgroundImage = 'url('+ task[3].img[newFind] +'.jpeg)';
        } else {
            main.style.backgroundImage = 'url('+ task[3].img[newFind] +'.jpg)';
        }
        //let the artiste and song name correspond with changes 
        artiste_name.textContent = task[1].artiste[newFind];
        song_name.textContent = task[2].song[newFind];
        //update audio to new 
        audi.src = task[0].name[newFind] +".mp3";
        audi.play();
        //we need to ensure that the bottom-part of main is clickable and functional again, 
        bottom.onclick = function() {
          major.style.display = "none";
          invinsible.style.display = "flex";
          bottom.style.display = "none";
          if(newFind === 1 || newFind === 3 || newFind === 9) {
            image.src = task[3].img[newFind] +".jpeg";
          } else {
            image.src = task[3].img[newFind] +".jpg";
          }
          artiste_name.textContent = task[1].artiste[newFind];
          song_name.textContent = task[2].song[newFind];
          bottom.style.zIndex = "100";
          goBack.onclick = function() {
            invinsible.style.display = "none";
            major.style.display = "block";
            bottom.style.display = "flex";
          }
        }


      } else {
        //if the id.value == last div, lets display  img,artiste and play song of first div element .main1
        newFind = 0;
        if(newFind === 1 || newFind === 3 || newFind === 9) {
          image.src = task[3].img[newFind] +".jpeg";
        } else {
          image.src = task[3].img[newFind] +".jpg";

        }
        //grab the innerhtml of the new element and pass it to buttom to be displayed in the buttom-part so that when we go back,we see d new element in bottom div
        var grabbed = arr[newFind].innerHTML;
        bottom.innerHTML = grabbed;
        //for image background to update to new song 
        if(newFind === 1 || newFind === 3 || newFind === 9) {
            main.style.backgroundImage = 'url('+ task[3].img[newFind] +'.jpeg)';
        } else {
            main.style.backgroundImage = 'url('+ task[3].img[newFind] +'.jpg)';
        }
        artiste_name.textContent = task[1].artiste[newFind];
        song_name.textContent = task[2].song[newFind];
        //update audio to new
        audi.src = task[0].name[newFind] +".mp3";
        audi.play();
        //we need to ensure that the bottom-part of main is clickable and functional again, 
        bottom.onclick = function() {
          major.style.display = "none";
          invinsible.style.display = "flex";
          bottom.style.display = "none";
          if(newFind === 1 || newFind === 3 || newFind === 9) {
            image.src = task[3].img[newFind] +".jpeg";
          } else {
            image.src = task[3].img[newFind] +".jpg";
          }
          artiste_name.textContent = task[1].artiste[newFind];
          song_name.textContent = task[2].song[newFind];
          bottom.style.zIndex = "100";
          goBack.onclick = function() {
            invinsible.style.display = "none";
            major.style.display = "block";
            bottom.style.display = "flex";
          }
        }

      }
    }
    backward.onclick = function() {
      if(newFind > 0) {
        //if the id.value != the first div id i.e id=2-8, decrease its id.value by 1, so that if it were one or two be4 its decreases to previuos which is 0 or one respectively and then didplay the div elements of id="0" and "1"
       
        newFind -= 1;
        if(newFind === 1 || newFind === 3 || newFind === 9) {
          image.src = task[3].img[newFind] +".jpeg";
        } else { 
          image.src = task[3].img[newFind] +".jpg";

        }
        //grab the innerhtml of the new element and pass it to buttom to be displayed in the buttom-part so that when we go back,we see d new element in bottom div

        var graB = arr[newFind].innerHTML;
        bottom.innerHTML = graB;
        //update image background to new song
        if(newFind === 1 || newFind === 3 || newFind === 9) {
            main.style.backgroundImage = 'url('+ task[3].img[newFind] +'.jpeg)';
        } else {
            main.style.backgroundImage = 'url('+ task[3].img[newFind] +'.jpg)';
        }
        artiste_name.textContent = task[1].artiste[newFind];
        song_name.textContent = task[2].song[newFind];
        //update audio to new
        audi.src = task[0].name[newFind] +".mp3";
        audi.play();
        //we need to ensure that the bottom-part of main is clickable and functional again, 
        bottom.onclick = function() {
          major.style.display = "none";
          invinsible.style.display = "flex";
          bottom.style.display = "none";
          if(newFind === 1 || newFind === 3 || newFind === 9) {
            image.src = task[3].img[newFind] +".jpeg";
          } else {
            image.src = task[3].img[newFind] +".jpg";
          }
          artiste_name.textContent = task[1].artiste[newFind];
          song_name.textContent = task[2].song[newFind];
          bottom.style.zIndex = "100";
          goBack.onclick = function() {
            invinsible.style.display = "none";
            major.style.display = "block";
            bottom.style.display = "flex";
          }
        }


      } else {
        
          //but if id.value === first div id i.e id="0", move straight to last div id i.e id"9"
        newFind = task[0].name.length;
        if(newFind === 1 || newFind === 3 || newFind === 9) {
          image.src = task[3].img[newFind] +".jpeg";
        } else {
          image.src = task[3].img[newFind] +".jpg";

        }
        //grab the innerhtml of the new element and pass it to buttom to be displayed in the buttom-part so that when we go back,we see d new element in bottom div

        var graBB = arr[newFind].innerHTML;
        bottom.innerHTML = graBB;
        //update image background to new song
        if(newFind === 1 || newFind === 3 || newFind === 9) {
            main.style.backgroundImage = 'url('+ task[3].img[newFind] +'.jpeg)';
        } else {
            main.style.backgroundImage = 'url('+ task[3].img[newFind] +'.jpg)';
        }
        artiste_name.textContent = task[1].artiste[newFind];
        song_name.textContent = task[2].song[newFind];
        //update audio to new
        audi.src = task[0].name[newFind] +".mp3";
        audi.play();
        //we need to ensure that the bottom-part of main is clickable and functional again, 
        bottom.onclick = function() {
          major.style.display = "none";
          invinsible.style.display = "flex";
          bottom.style.display = "none";
          if(newFind === 1 || newFind === 3 || newFind === 9) {
            image.src = task[3].img[newFind] +".jpeg";
          } else {
            image.src = task[3].img[newFind] +".jpg";
          }
          artiste_name.textContent = task[1].artiste[newFind];
          song_name.textContent = task[2].song[newFind];
          bottom.style.zIndex = "100";
          goBack.onclick = function() {
            invinsible.style.display = "none";
            major.style.display = "block";
            bottom.style.display = "flex";
          }
        }

      }
    }
 
  });
  


  

}

