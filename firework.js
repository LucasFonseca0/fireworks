const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";

const fireworks = [];
const subFireworks = [];
const colors = ["purple","red","orange","green","blue","pink"];
let maxFireworks = 20;
let numSubFireworks = 200;
let radius = 2;
let timeout = 25;
let count = 0;
let explosionMultiplier = 2.5;

function update() {
    console.log(fireworks);
    const firework = new Firework(ctx, radius, colors);
    if (count == timeout) {
        count = 0;
        if (fireworks.length < maxFireworks) {
            fireworks.push(firework);
        }
    } else {
        count++;
    }

  fireworks.forEach((n, i) => {
      n.update();

      if (n.opacity == 0) {
      let created = 0;
      while (created < numSubFireworks) {
          created++;
          const subFirework = new SubFirework(
              ctx,
          radius,
          colors,
          n.x,
          n.y,
          Math.cos(((Math.PI * 2) / numSubFireworks) * created) *
          Math.random() *
          explosionMultiplier,
          Math.sin(((Math.PI * 2) / numSubFireworks) * created) *
          Math.random() *
          explosionMultiplier
          );
          subFireworks.push(subFirework);
        }
      fireworks.splice(i, 1);
    }
  });
  subFireworks.forEach((n, i) => {
      n.update();
      
      
      if (n.opacity == 0) {
          subFireworks.splice(i, 1);
    }
});
}
function draw() {
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((n) => {
    n.draw();
    
  });
  subFireworks.forEach((n) => {
    n.draw();
    
  });
  ctx.fillStyle="rgba(0,0,0,0.1)"
}

function animate() {
  requestAnimationFrame(animate);
  update();
  draw();
}

animate();
