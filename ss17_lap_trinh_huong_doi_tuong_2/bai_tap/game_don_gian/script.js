/**
 * Created by nhatnk on 4/26/17.
 */

class Hero{
  constructor(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
  }


  getHeroElement(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  moveRight (){
    this.left += 2;
    console.log('ok: ' + this.left);
  }
  moveLeft (){
    this.left =this.left- 2;
    console.log('ok: ' + this.left);
  }
  moveTop(){
    this.top+=2;
  }
  moveDown(){
    this.top=this.top-2;
  }
  moveRandom(){
    this.top=Math.random()*1000;
    this.left=Math.random()*2000;
  }

}

let hero = new Hero('qua_bong.jpg', 20, 30, 200);

function start(){
  if(hero.left < window.innerWidth - hero.size){
    hero.moveRight();
  }else if()
  //hero.moveRandom();
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 200)
}

start();