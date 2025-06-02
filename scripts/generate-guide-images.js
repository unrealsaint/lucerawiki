const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Ensure the guides directory exists
const guidesDir = path.join(__dirname, '../public/images/guides');
if (!fs.existsSync(guidesDir)) {
  fs.mkdirSync(guidesDir, { recursive: true });
}

// Generate a placeholder image
function generatePlaceholderImage(filename, text, color) {
  const width = 800;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(guidesDir, filename), buffer);
}

// Generate default guide image
generatePlaceholderImage('default-guide.jpg', 'Guide Image', '#1a365d');

// Generate guide-specific images
const guides = [
  { id: 'server-setup', text: 'Server Setup', color: '#2d3748' },
  { id: 'dat-editor', text: 'DAT Editor', color: '#2c5282' },
  { id: 'admin-rights', text: 'Admin Rights', color: '#2a4365' },
  { id: 'html-reload', text: 'HTML Reload', color: '#2b6cb0' },
  { id: 'gm-commands', text: 'GM Commands', color: '#2c5282' },
  { id: 'starting-items', text: 'Starting Items', color: '#2d3748' },
  { id: 'dialogues-translations', text: 'Dialogues', color: '#2a4365' },
  { id: 'multisells', text: 'Multisells', color: '#2b6cb0' },
  { id: 'teleports', text: 'Teleports', color: '#2c5282' },
  { id: 'unstuck-coordinates', text: 'Coordinates', color: '#2d3748' },
  { id: 'community-board', text: 'Community Board', color: '#2a4365' },
  { id: 'newbie-buffer', text: 'Newbie Buffer', color: '#2b6cb0' },
  { id: 'buffer-system', text: 'Buffer System', color: '#2c5282' },
  { id: 'give-items', text: 'Give Items', color: '#2d3748' },
  { id: 'chat-filter', text: 'Chat Filter', color: '#2a4365' },
  { id: 'quick-drop', text: 'Quick Drop', color: '#2b6cb0' },
  { id: 'dynamic-rates', text: 'Dynamic Rates', color: '#2c5282' },
  { id: 'premium-account', text: 'Premium Account', color: '#2d3748' },
];

guides.forEach(guide => {
  generatePlaceholderImage(`${guide.id}.jpg`, guide.text, guide.color);
});

console.log('Generated all guide images successfully!'); 