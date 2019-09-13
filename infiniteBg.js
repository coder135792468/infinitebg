
/// Name : Infinite Background
/// Author : Arb 
/// All rights reserved ©
/// Date of publication : 13 - 09 - 2019

/// Requires p5.js to work properly
/// To use, make a new instance of the InitInfiniteBg class!
/// Then access the init() method in your setup function and access the update() method in your draw function! Awesome! Enjoy!

/// Demo
/// new InitInfiniteBg(your _mage, background_speed, bg_direction(left or right), bg_active(true or false))

/// Good Luck and Enjoy - Arb 😜


class InfiniteScrollingBackground{
    constructor(x, y, w, h, img, speed, dir, active){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.img = img;
        this.speed = speed;
        this.dir = dir;
        this.active = active;
    }
    
    draw(){
        image(this.img, this.x, this.y, this.w, this.h);
    }
    
    update(){
    
        this.draw();
    
        if (this.active == true){
    
        
        if (this.dir == 'right'){
            if (this.x < innerWidth * 2){
                this.x += this.speed;
            }
            else
            {
                this.x = -innerWidth * 2;
            }
        }
        
        if (this.dir == 'left'){
            if (this.x > -innerWidth * 2){
                this.x -= this.speed;
            }
            else
            {
                this.x = innerWidth * 2;
            }
        }
        
        
        }
        
    }
    
}


class InitInfiniteBG{
    
    constructor(img, speed, dir, active){
        this.img = img;
        this.speed = speed;
        this.dir = dir;
        this.active = active;
    }
    
    init(){
        
        this.bg1 = new InfiniteScrollingBackground(-innerWidth, 0, innerWidth * 2, innerHeight, this.img, this.speed, this.dir, this.active);
        
        this.bg2 = new InfiniteScrollingBackground(innerWidth, 0, (innerWidth * 2) + 5, innerHeight, this.img, this.speed, this.dir, this.active);
        
    }
    
    update(){
        this.bg1.draw();
        this.bg1.update();
        this.bg2.draw();
        this.bg2.update();
    }
    
    
}