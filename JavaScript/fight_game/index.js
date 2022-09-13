const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.6;

const keys = {
    a: {
        isPressed: false
    },
    d: {
        isPressed: false
    },
    w:{
        isPressed: false
    },
    ArrowRight:{
        isPressed: false
    },
    ArrowLeft:{
        isPressed: false
    },
    ArrowUp:{
        isPressed: false
    }
}

// Calls timer and end conditions
decreaseTimer()

// Gives motions to rectangles
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);

    background.update();
    shop.update();
    c.fillStyle = 'rgba(255, 255, 255, 0.1)'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update();
    enemy.update();

    // Velocity initialization
    player.velocity.x = 0;
    enemy.velocity.x = 0;

    // Player movement    
    if (keys.a.isPressed && player.lastKey === 'a'){
        player.velocity.x = -5;
        player.switchSprite('run');
    } else if(keys.d.isPressed && player.lastKey === 'd'){
        player.velocity.x= 5;
        player.switchSprite('run');
    }else{
        player.switchSprite('idle');
    }

    // Jumping
    if (player.velocity.y < 0){
        player.switchSprite('jump');
    } else if(player.velocity.y > 0){
        player.switchSprite('fall');
    }
    // if(keys.w.isPressed && player.lastKey === 'w'){
    //     player.velocity.y = 20;
    // }

    // Enemy movement
    if (keys.ArrowLeft.isPressed && enemy.lastKey == 'ArrowLeft'){
        enemy.velocity.x = -5;
        enemy.switchSprite('run');
    } else if(keys.ArrowRight.isPressed && enemy.lastKey == 'ArrowRight'){
        enemy.velocity.x = 5;
        enemy.switchSprite('run');
    }else{
        enemy.switchSprite('idle');
    }

    // Jumping
    if (enemy.velocity.y < 0){
        enemy.switchSprite('jump');
    } else if(enemy.velocity.y > 0){
        enemy.switchSprite('fall');
    }

    // Detects player collision and enemy gets hit
    if (
        rectangularCollision({ rectangle1: player, rectangle2: enemy}) &&
        player.isAttacking && player.frameCurrent === 4
    )   {
        enemy.takeHit();
        player.isAttacking = false;
        
        // document.querySelector('#enemyHealth').style.width = enemy.health + '%';
        gsap.to('#enemyHealth', {
            width: enemy.health + '%'
        })
    }
    // If miss
    if(player.frameCurrent === 4 && player.isAttacking){
        player.isAttacking = false;
    }

    // Detects enemy collision and pplayer gets hit
    if (
        rectangularCollision({ rectangle1: enemy, rectangle2: player}) &&
        enemy.isAttacking && enemy.frameCurrent === 2
    )   {
        player.takeHit();
        enemy.isAttacking = false;
        // document.querySelector('#playerHealth').style.width = player.health + '%';
        gsap.to('#playerHealth', {
            width: player.health + '%'
        })
    }
    // If miss
    if(enemy.frameCurrent === 2 && enemy.isAttacking){
        enemy.isAttacking = false;
    }

    // End game based on health
    if (enemy.health <= 0 || player.health <= 0){
        determineWinner({player, enemy, timerId});
    } return;
}

window.addEventListener('keydown', (e)=>{
    if(!player.dead){
        switch(e.key){
            case 'd':
                keys.d.isPressed = true;
                player.lastKey = 'd';
                break;
            case 'a':
                keys.a.isPressed = true;
                player.lastKey = 'a';
                break;
            case 'w':
                keys.w.isPressed = true;
                player.lastKey = 'w'
                player.velocity.y = -20;
                break;
            case ' ':
                player.attack();
                break;
        }

    }
    
    // Enemy keys
    if(!enemy.dead){
        switch(e.key){    
            case 'ArrowRight':
                keys.ArrowRight.isPressed = true;
                enemy.lastKey = 'ArrowRight';
                break;
            case 'ArrowLeft':
                keys.ArrowLeft.isPressed = true;
                enemy.lastKey = 'ArrowLeft';
                break;
            case 'ArrowUp':
                enemy.velocity.y = -20;
                break;
            case 'ArrowDown':
                enemy.attack();
                break;    
        }
    }   

})

window.addEventListener('keyup', (e)=>{
    switch(e.key){
        case 'd':
            keys.d.isPressed = false;
            break;
        case 'a':
            keys.a.isPressed = false
            break;
    }
    
    // Enemy keys
    switch(e.key){
        case 'ArrowRight':
            keys.ArrowRight.isPressed = false;
            enemy.lastKey = 'ArrowRight';
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.isPressed = false;
            enemy.lastKey = 'ArrowRight';
            break;
    }

})

const background = new Sprite({
    position:{
        x: 0,
        y: 0
    },
    imageSrc: './img/background.png'
})

// Shop sprite
const shop = new Sprite({
    position:{
        x: 600,
        y: 160
    },
    imageSrc: './img/shop.png',
    scale: 2.5,
    framesMax: 6
})

const player = new Fighter({
    position:{
        x: 0,
        y: 0    
    },
    velocity:{
        x: 0,
        y: 0,
    },
    offset:{
        x: 0,
        y: 0,
    },
    imageSrc: './img/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2,
    offset: {
        x: 175,
        y: 97
    },
    sprites:{
        idle: {
            imageSrc: './img/samuraiMack/Idle.png',
            framesMax: 8,
            image: new Image()
        },
        run: {
            imageSrc: './img/samuraiMack/Run.png',
            framesMax: 8,
            image: new Image()
        },
        jump: {
            imageSrc: './img/samuraiMack/Jump.png',
            framesMax: 2,
            image: new Image()
        },
        fall: {
            imageSrc: './img/samuraiMack/Fall.png',
            framesMax: 2,
            image: new Image()
        },
        attack1: {
            imageSrc: './img/samuraiMack/Attack1.png',
            framesMax: 6,
            image: new Image()
        },
        takeHit: {
            imageSrc: './img/samuraiMack/Take hit - white silhouette.png',
            framesMax: 4,
            image: new Image()
        },
        death: {
            imageSrc: './img/samuraiMack/Death.png',
            framesMax: 6,
            image: new Image()
        },
    },
    attackBox:{
        offset:{
            x: 50,
            y: 50
        },
        width: 152,
        height: 50,
    }
})

const enemy = new Fighter({
    position:{
        x: 400,
        y: 100    
    },
    velocity:{
        x: 0,
        y: 0,
    },
    offset:{
        x: -50,
        y: 0
    },
    imageSrc: './img/kenji/Idle.png',
    framesMax: 4,
    scale: 2,
    offset: {
        x: 175,
        y: 106
    },
    sprites:{
        idle: {
            imageSrc: './img/kenji/Idle.png',
            framesMax: 4,
            image: new Image()
        },
        run: {
            imageSrc: './img/kenji/Run.png',
            framesMax: 8,
            image: new Image()
        },
        jump: {
            imageSrc: './img/kenji/Jump.png',
            framesMax: 2,
            image: new Image()
        },
        fall: {
            imageSrc: './img/kenji/Fall.png',
            framesMax: 2,
            image: new Image()
        },
        attack1: {
            imageSrc: './img/kenji/Attack1.png',
            framesMax: 4,
            image: new Image()
        },
        takeHit: {
            imageSrc: './img/kenji/Take hit.png',
            framesMax: 3,
            image: new Image()
        },
        death: {
            imageSrc: './img/kenji/Death.png',
            framesMax: 7,
            image: new Image()
        },

    },
    attackBox:{
        offset:{
            x: -140,
            y: 50
        },
        width: 140,
        height: 50,
    }
})

animate();