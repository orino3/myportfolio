const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const projectsDir = path.join(publicDir, 'projects');

// Create directories if they don't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir);
}

// Generate SVG placeholder
function generatePlaceholder(width, height, text) {
  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#2C74B3"/>
      <text
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle"
        fill="#ffffff"
        font-family="system-ui, sans-serif"
        font-size="24"
      >
        ${text}
      </text>
    </svg>
  `;
}

// Project images to generate
const images = [
  { name: 'hero-image.jpg', width: 1920, height: 1080, text: 'Hero Image' },
  { name: 'profile.jpg', width: 800, height: 800, text: 'Profile Photo' },
  { name: 'analytics-hero.jpg', width: 1920, height: 1080, text: 'Analytics Dashboard' },
  { name: 'analytics-1.jpg', width: 800, height: 450, text: 'Analytics Screenshot 1' },
  { name: 'analytics-2.jpg', width: 800, height: 450, text: 'Analytics Screenshot 2' },
  { name: 'analytics-3.jpg', width: 800, height: 450, text: 'Analytics Screenshot 3' },
  { name: 'analytics-4.jpg', width: 800, height: 450, text: 'Analytics Screenshot 4' },
  { name: 'ecommerce.jpg', width: 800, height: 450, text: 'E-commerce Platform' },
  { name: 'mobile.jpg', width: 800, height: 450, text: 'Mobile App Design' },
  { name: 'dashboard.jpg', width: 800, height: 450, text: 'Smart Home Dashboard' },
  { name: 'chat.jpg', width: 800, height: 450, text: 'AI Chat Interface' },
  { name: 'design.jpg', width: 800, height: 450, text: 'Design System' },
];

// Generate and save images
images.forEach((image) => {
  const svg = generatePlaceholder(image.width, image.height, image.text);
  const filePath = path.join(projectsDir, image.name);
  fs.writeFileSync(filePath, svg);
  console.log(`Generated ${image.name}`);
}); 