const gradientLayer = document.createElement("div");
gradientLayer.style.position = "fixed";
gradientLayer.style.top = 0;
gradientLayer.style.left = 0;
gradientLayer.style.width = "100vw";
gradientLayer.style.height = "100vh";
gradientLayer.style.zIndex = "-9999";
gradientLayer.style.pointerEvents = "none";
gradientLayer.style.overflow = "hidden";
document.body.appendChild(gradientLayer);

const gradient = document.createElement("div");
gradient.style.position = "absolute";
gradient.style.width = "600px"; // larger for softer edges
gradient.style.height = "600px";
gradient.style.background = "radial-gradient(circle, #9B5DE5 0%, transparent 80%)";
gradient.style.borderRadius = "50%";
gradient.style.opacity = "0.4";
gradient.style.filter = "blur(80px)";
gradient.style.transform = "translate(-50%, -50%)";
gradientLayer.appendChild(gradient);

// Mouse position tracking
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

// Animate
function animate() {
  // Easing toward target
  const ease = 0.1;
  currentX += (targetX - currentX) * ease;
  currentY += (targetY - currentY) * ease;

  gradient.style.left = `${currentX}px`;
  gradient.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}
animate();
