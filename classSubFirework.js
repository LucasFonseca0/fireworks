class SubFirework {
    constructor(ctx, radius, colors,x,y,speedX,speedY) {
      this.ctx = ctx;
      this.radius = radius;
      this.color =colors[Math.floor(Math.random() * colors.length)];
    //   this.letters = '0123456789ABCDEF'
    // for (let i = 0; i < 6; i++) {
    //     this.color += this.letters[Math.floor(Math.random() * 16)];
    // }
      this.opacity = 1
      this.x = x;
      this.y = y ;
      this.gravity = 0.05;
      this.speedY = speedX;
      this.speedX = speedY;
    }
    update() {
      this.y -= this.speedY;
      this.speedY -= this.gravity;
      this.x += this.speedX
      if(this.opacity>0.01){
        this.opacity-=0.008}else{
          this.opacity=0
        }
    }
  
    draw() {
      this.ctx.beginPath();
      this.ctx.globalAlpha = this.opacity
      this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, 0, true);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
    }
  }
  