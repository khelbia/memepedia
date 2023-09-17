var container = document.getElementsByClassName("memes")[0];
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class memesfundo2 {

  constructor(path) {

    this.element = document.createElement("img");
    this.element.src = path;
    this.element.classList.add("fundo");
    container.appendChild(this.element);

    this.x = random(0, innerWidth);
    this.y = random(0, innerWidth);
    this.speed = random(2, 2);
    this.angle = random(0, 360);

    this.element.style.left = this.x + 'px'
    this.element.style.top = this.y + 'px'
    this.lifespam =4000;

  }
  animate(){

    let rad = this.angle * Math.PI / 180

    this.x += Math.cos(rad) * this.speed
    this.y += Math.sin(rad) * this.speed
    this.element.style.left = this.x + 'px'
    this.element.style.top = this.y + 'px'
}
}

var memes = []

  for(let i = 0; i< 9; i ++){

    memes.push(new memesfundo2(`/img/${random(1, 8)}.png`))


  }
  


function animation() {


  requestAnimationFrame(animation);

    for(let i = 0; i < memes.length; i++){
        memes[i].animate()

        if(memes[i].x + 100 < 0 ||
           memes[i].x > innerWidth ||
           memes[i].y + 100 < 0 ||
           memes[i].y > innerHeight){

             memes[i].element.remove()
             memes.splice(i, 1)
             memes.push(new memesfundo2(`/img/${random(1, 8)}.png`))
             
        }


    }
}


animation()