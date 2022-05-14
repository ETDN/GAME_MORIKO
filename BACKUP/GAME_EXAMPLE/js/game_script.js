
var character = document.getElementById("character");
var block = document.getElementById("block");
var game = document.getElementById("game")
var interval;
var both =0;


  // ------------------- MOVING FUNCTIONS -----------------------------------------
  function moveLeft() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
   //so the character doesnt go out the map
    if(left>0) {
      character.style.left = left - 2 + "px";
    }
  };

  function moveRight() {
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    //so the character doesnt go out the map
    if(left<800) {
      character.style.left = left + 2 + "px";
    }
  };

  // ------------------- JUMPING FUNCTIONS -----------------------------------------
  function jump() {

    var drop = 0;

    if (character.classList != "animate") {
      character.classList.add("animate");
    }

    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);
  };
// ------------------- MOVING FUNCTIONS WITH KEYS -----------------------------------------


  document.addEventListener("keydown", event => {
    if (both == 0) {
      both++;
      if (event.key === "ArrowLeft") {
        interval = setInterval(moveLeft, 1);
      }
      if (event.key === "ArrowRight") {
        interval = setInterval(moveRight, 1);
      }
      if (event.key === "Space") {
        interval = setInterval(jump, 1);
      }
    }
  });

  document.addEventListener("keyup", event => {
    clearInterval(interval);
    both = 0;
  });

    // ------------------- DEATH FUNCTIONS -----------------------------------------
    var checkDead = setInterval(function () {
      var characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
      var blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      var blockRight =
        parseInt(window.getComputedStyle(block).getPropertyValue("right"));

      if(blockRight <35 && blockRight>0 && characterTop >=125){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lost, loser")
      }

      if (blockLeft < 35 && blockLeft > 0 && characterTop >= 125) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lost, loser")
      }
    }, 10);

// ------------------- PLATFORMS FUNCTIONS -----------------------------------------

var platform = document.createElement("div");
platform.setAttribute("id", "platform");
parseInt(window.getComputedStyle(platform).getPropertyValue("top"));
parseInt(window.getComputedStyle(platform).getPropertyValue("left"));
parseInt(window.getComputedStyle(platform).getPropertyValue("right"));


game.appendChild(platform)
