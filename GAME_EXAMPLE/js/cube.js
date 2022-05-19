/*import platform from '../img/test_jpeg.jpg'
console.log(platform)*/

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
var monster = document.getElementById('monster');

canvas.width=innerWidth;
canvas.height=innerHeight;


const gravity =0.5;

/*let patternPlayer
let img2=new Image();
img2 = document.getElementById('player')
pattern = c.createPattern(img2,'no-repeat');*/

class Player {
  constructor() {
    this.position = {
      x:100,
      y:100
    };
    this.height=50;
    this.width=50;
    this.velocity = {
      x:0,
      y:0
    };
  }
  draw(){
    c.fillStyle='black';
    c.fillRect(this.position.x,this.position.y,this.width,this.height);
  }
  update(){
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if(this.position.y + this.height + this.velocity.y <= canvas.height)
    this.velocity.y += gravity;
    else this.velocity.y = 0;


  }
}

//----- KEYS MONITORING------
const keys = {
  right: {
    pressed:false
  },
  left: {
    pressed:false
  },
}

let pattern
let img1=new Image();
img1 = document.getElementById('platform')
pattern = c.createPattern(img1,'no-repeat');

  /* ------- PLATFORMS CREATION----------------*/
class Platform{
  constructor({x,y}) {
    this.position = {
      x,
      y
    }
    this.width = 200
    this.height = 55
  }
  draw(){
    c.fillStyle=pattern;
    c.fillRect(this.position.x,this.position.y,this.width,this.height)
  }
}

const platforms = [
  new Platform({
  x:200,
  y:350,
}), new Platform({
  x:500,
  y:300
}),
  new Platform({
    x:900,
    y:380
  }),

  new Platform({
    x:1200,
    y:480
  }),
  new Platform({
    x:1500,
    y:380
  }),
  new Platform({
    x:1800,
    y:480
  }),
  new Platform({
    x:2100,
    y:380
  }),
  new Platform({
    x:2400,
    y:480
  }),
  new Platform({
    x:2700,
    y:380
  })
]

  /* ------- PLAYER CREATION ----------- */
const nezuko = new Player()

  /* ------- ANIMATION METHOD ----------- */
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
  nezuko.update()
  platforms.forEach(platform =>{
    platform.draw()
  })
  let scrollEnd = 0 //Background movement variable

  /*----------------- NEZUKO MOVES --------------------------*/
  if (keys.right.pressed && nezuko.position.x < 400) {
    nezuko.velocity.x = 7
  } else if (keys.left.pressed && nezuko.position.x >100) { /* -----> to move to the left */
    nezuko.velocity.x = -7
  } else {
    nezuko.velocity.x = 0

    if (keys.right.pressed) {
      scrollEnd +=7
      platforms.forEach(platform => {
        platform.position.x -= 5
      })
    } else if (keys.left.pressed) {
      scrollEnd -= 7
      platforms.forEach(platform => {
        platform.position.x += 7
      })
    }
  }

  console.log(scrollEnd)

    platforms.forEach(platform =>{
  // for landing in the platform and falling out of it
  if (nezuko.position.y + nezuko.height <= platform.position.y
    && nezuko.position.y + nezuko.height + nezuko.velocity.y >= platform.position.y
    && nezuko.position.x + nezuko.width >= platform.position.x
    && nezuko.position.x <= platform.position.x + platform.width){
    nezuko.velocity.y = 0
  }
    })

  if (scrollEnd > 6000){
   alert("you win!!")
  }
  }
animate()

/*----------------- MOVEMENT METHODS --------------------------*/
window.addEventListener('keydown', ({key}) =>{
switch (key){
  case 'ArrowLeft':
    console.log('left')
    keys.left.pressed = true
    break;
  case 'ArrowRight':
    console.log('right')
    nezuko.velocity.x = 5
    keys.right.pressed = true
    break;
  case 'ArrowUp':
    console.log('up')
    nezuko.velocity.y = -20
    break;
  case 'ArrowDown':
    console.log('down')
    break;
}
console.log(keys.right.pressed)
  console.log(keys.left.pressed)
})

/* So the move doesnt go infinitely */
window.addEventListener('keyup', ({key}) =>{
  switch (key){
    case 'ArrowLeft':
      keys.left.pressed = false
      break;
    case 'ArrowRight':
      nezuko.velocity.x = 0
      keys.right.pressed = false
      break;
    case 'ArrowUp':
      console.log('up')
      nezuko.velocity.y = -20
      break;
    case 'ArrowDown':
      console.log('down')
      break;
  }
  console.log(keys.right.pressed)
  console.log(keys.left.pressed)
})


