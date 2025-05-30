const canvas = document.getElementById("lavaLampCanvas");
const ctx = canvas.getContext("2d");

let width, height;

// Resize canvas to full screen
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Pastel colors
const colors = ['#C3B8F7', '#E9F78F', '#F7A3B3'];

// Create blobs
const blobs = [];
const blobCount = 12;

for (let i = 0; i < blobCount; i++) {
  blobs.push({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 220 + Math.random() * 180,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6,
    color: colors[i % colors.length]
  });
}

// Converts hex color to rgba string
function hexWithAlpha(hex, alpha) {
  const c = hex.replace("#", "");
  const bigint = parseInt(c, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

// Draw all blobs
function drawBlobs() {
  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = "screen"; // Soft light blending

  blobs.forEach(blob => {
    const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.r);
    gradient.addColorStop(0, hexWithAlpha(blob.color, 0.8));   // stronger center alpha
    gradient.addColorStop(0.5, hexWithAlpha(blob.color, 0.45)); // stronger middle alpha
    gradient.addColorStop(1, hexWithAlpha(blob.color, 0));     // edges

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(blob.x, blob.y, blob.r, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.globalCompositeOperation = "source-over"; // Reset mode
}

// Update positions of blobs (no mouse effect)
function updateBlobs() {
  blobs.forEach(blob => {
    blob.x += blob.dx;
    blob.y += blob.dy;

    // Bounce off edges with some damping
    if (blob.x < -blob.r) {
      blob.x = -blob.r;
      blob.dx *= -0.8;
    }
    if (blob.x > width + blob.r) {
      blob.x = width + blob.r;
      blob.dx *= -0.8;
    }
    if (blob.y < -blob.r) {
      blob.y = -blob.r;
      blob.dy *= -0.8;
    }
    if (blob.y > height + blob.r) {
      blob.y = height + blob.r;
      blob.dy *= -0.8;
    }
  });
}

// Animation loop
function animate() {
  updateBlobs();
  drawBlobs();
  requestAnimationFrame(animate);
}

animate();

const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
  });
});
