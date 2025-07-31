import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🎯 Starting Smart Goal Planner...\n');

// Start JSON Server
console.log('📊 Starting JSON Server...');
const server = spawn('npm', ['run', 'server'], {
  cwd: __dirname,
  stdio: 'pipe'
});

server.stdout.on('data', (data) => {
  console.log(`[SERVER] ${data.toString().trim()}`);
});

server.stderr.on('data', (data) => {
  console.log(`[SERVER ERROR] ${data.toString().trim()}`);
});

// Wait a bit then start React app
setTimeout(() => {
  console.log('\n⚛️  Starting React App...');
  const dev = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: 'pipe'
  });

  dev.stdout.on('data', (data) => {
    const output = data.toString().trim();
    console.log(`[REACT] ${output}`);
    
    // Look for the local URL
    if (output.includes('Local:')) {
      console.log('\n🚀 Smart Goal Planner is ready!');
      console.log('📊 JSON Server: http://localhost:3001');
      console.log('⚛️  React App: Check the URL above');
    }
  });

  dev.stderr.on('data', (data) => {
    console.log(`[REACT ERROR] ${data.toString().trim()}`);
  });

  // Handle cleanup
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping servers...');
    server.kill();
    dev.kill();
    process.exit(0);
  });

}, 3000);

// Handle server errors
server.on('error', (err) => {
  console.error('Failed to start server:', err);
});

server.on('close', (code) => {
  if (code !== 0) {
    console.log(`Server process exited with code ${code}`);
  }
});