class Firework {
    constructor(ctx, radius, colors) {
      this.ctx = ctx;
      this.radius = radius;
      this.color =colors[Math.floor(Math.random() * colors.length)];
      this.opacity = 1
      this.x = Math.random() * ctx.canvas.width;
      this.y = this.ctx.canvas.height + this.radius / 2 ;
      this.gravity = 0.05;
      this.speedY = 6 + Math.random()*1.4;
      this.speedX = Math.random()>.5 ? -Math.random() : Math.random();
    }
    update() {
      this.y -= this.speedY;
      this.speedY -= this.gravity;
      this.x += this.speedX
      if(this.opacity>0.01){
      this.opacity-=0.006}else{
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
  