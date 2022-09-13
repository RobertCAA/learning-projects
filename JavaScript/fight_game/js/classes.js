// Paints game elements
class Sprite{
    constructor({position, imageSrc, scale = 1, framesMax = 1, offset = {x: 0, y: 0}}){
        this.position = position;
        this.width = 50;
        this.height = 150;
        this.image = new Image();
        this.image.src = imageSrc;
        this.scale = scale;
        this.framesMax = framesMax;
        this.frameCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 15;
        this.offset = offset;
    }

    // Draws a rectangle and fills it with color
    draw(){
        c.drawImage(
            this.image,
            this.frameCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height, 
            this.position.x - this.offset.x, 
            this.position.y - this.offset.y, 
            (this.image.width /this.framesMax) * this.scale, 
            this.image.height * this.scale
            );
    }

    // Animate frames
    animateFrames() {
        this.framesElapsed++

        if(this.framesElapsed % this.framesHold === 0){
            if(this.frameCurrent < this.framesMax - 1){
                this.frameCurrent++
            }else{
                this.frameCurrent = 0
            }
        }      
    }

    // Updates the drawnings and keeps them in frame
    update(){
        this.draw();
        this.animateFrames();      
    }
 
}

// Paints game elements
class Fighter extends Sprite{
    constructor({
        position, 
        velocity, 
        color = 'red',
        imageSrc, 
        scale = 1, 
        framesMax = 1,
        offset = {x: 0, y: 0},
        sprites,
        attackBox = {offset: {}, width: undefined, height: undefined}
    }){
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            offset
        });
        this.frameCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 15;
        
        this.velocity = velocity;
        this.width = 50;
        this.height = 150;
        this.lastKey;
        this.attackBox ={
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        }
        this.color = color;
        this.isAttacking;
        this.health = 100;
        this.sprites = sprites;
        this.dead = false;

        for(const sprite in this.sprites){
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        }
    }

    // Updates the drawnings and keeps them in frame
    update(){
        this.draw();
        if(!this.dead){
            this.animateFrames();
        }        


        //Attack Box
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y;
        // Draw atackbox
        // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x

        // Gravity function
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 96){
            this.velocity.y = 0;
            this.position.y = 330;
        }else{
            this.velocity.y += gravity;
        }
    }
    
    // Attack action handler. Set attacking value to true and then false after 100ms
    attack(){
        this.switchSprite('attack1'); 
        this.isAttacking = true;
        // setTimeout(()=>{
        //     this.isAttacking = false;
        // }, 100)
    }

    takeHit(){        
        this.health -= 20;       
        if(this.health <= 0){
            this.switchSprite('death');
        }else{
            this.switchSprite('takeHit'); 
        }
    }

    switchSprite(sprite){
        // Overrides with death
        if(this.image === this.sprites.death.image){
            if(this.frameCurrent === this.sprites.death.framesMax -1){
                this.dead = true;                
            }
            return; 
        }
            

        // Overrides animations with attack/hit animations
        if(
            this.image === this.sprites.attack1.image && 
            this.frameCurrent < this.sprites.attack1.framesMax - 1
        ) 
            return;
        if(
            this.image === this.sprites.takeHit.image &&
            this.frameCurrent < this.sprites.takeHit.framesMax - 1
        )
            return;

        switch (sprite){
            case 'idle':
                if(this.image !== this.sprites.idle.image){
                    this.image = this.sprites.idle.image;
                    this.framesMax = this.sprites.idle.framesMax;
                    this.frameCurrent = 0;
                }                
                break;
            case 'run':
                if(this.image !== this.sprites.run.image){
                    this.image = this.sprites.run.image;
                    this.framesMax = this.sprites.run.framesMax;
                    this.frameCurrent = 0;
                } 
                break;
            case 'jump':
                if(this.image !== this.sprites.jump.image){
                    this.image = this.sprites.jump.image;
                    this.framesMax = this.sprites.jump.framesMax;
                    this.frameCurrent = 0;
                }                
                break;
            case 'fall':
                if(this.image !== this.sprites.fall.image){
                    this.image = this.sprites.fall.image;
                    this.framesMax = this.sprites.fall.framesMax;
                    this.frameCurrent = 0;
                }                
                break;
            case 'attack1':
                if(this.image !== this.sprites.attack1.image){
                    this.image = this.sprites.attack1.image;
                    this.framesMax = this.sprites.attack1.framesMax;
                    this.frameCurrent = 0;
                }                
                break;
            case 'takeHit':
                if(this.image !== this.sprites.takeHit.image){
                    this.image = this.sprites.takeHit.image;
                    this.framesMax = this.sprites.takeHit.framesMax;
                    this.frameCurrent = 0;
                }                
                break;
            case 'death':
            if(this.image !== this.sprites.death.image){
                this.image = this.sprites.death.image;
                this.framesMax = this.sprites.death.framesMax;
                this.frameCurrent = 0;
            }                
            break;               
        }
    }
}

