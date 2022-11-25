/**
 * Created by nhatnk on 4/26/17.
 */

class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;

        }
    setImage(image) {
        this.image = image;

    }


    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveRight() {
        this.left += 26;

    }

    moveLeft() {
        this.left = this.left - 26;

    }

    moveTop() {
        this.top -= 26;
    }

    moveDown() {
        this.top = this.top + 26;
    }

    moveRandom() {
        this.top = Math.random() * 1000;
        this.left = Math.random() * 2000;
    }

}

let hero = new Hero('qua_bong_1.jpg', 0, 0, 200);

function start() {

    if (hero.left < window.innerWidth - hero.size && hero.top === 0) {
        hero.moveRight();
    } else if (hero.left > 0 && hero.top >= window.innerHeight - hero.size) {
        hero.moveLeft();
    } else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    } else if (hero.left === 0 && hero.top > 0) {
        hero.moveTop();
    }
    //hero.moveRandom();
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 1000)
}

start();
