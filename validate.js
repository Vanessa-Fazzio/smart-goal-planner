import fs from 'fs';
import path from 'path';

console.log('🔍 Validating Smart Goal Planner Project...\n');

// Check required files
const requiredFiles = [
  'src/App.jsx',
  'src/App.css',
  'src/components/GoalForm.jsx',
  'src/components/GoalList.jsx',
  'src/components/GoalCard.jsx',
  'src/components/Overview.jsx',
  'src/components/DepositForm.jsx',
  'db.json',
  'package.json'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check package.json scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredScripts = ['dev', 'server', 'build'];

console.log('\n📋 Checking package.json scripts:');
requiredScripts.forEach(script => {
  if (packageJson.scripts[script]) {
    console.log(`✅ ${script}: ${packageJson.scripts[script]}`);
  } else {
    console.log(`❌ ${script} - MISSING`);
    allFilesExist = false;
  }
});

// Check db.json structure
console.log('\n📊 Checking db.json structure:');
try {
  const dbData = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  if (dbData.goals && Array.isArray(dbData.goals)) {
    console.log(`✅ db.json has goals array with ${dbData.goals.length} items`);
    
    // Check first goal structure
    if (dbData.goals.length > 0) {
      const firstGoal = dbData.goals[0];
      const requiredFields = ['id', 'name', 'targetAmount', 'savedAmount', 'category', 'deadline', 'createdAt'];
      
      requiredFields.forEach(field => {
        if (firstGoal.hasOwnProperty(field)) {
          console.log(`✅ Goal has ${field} field`);
        } else {
          console.log(`❌ Goal missing ${field} field`);
          allFilesExist = false;
        }
      });
    }
  } else {
    console.log('❌ db.json missing goals array');
    allFilesExist = false;
  }
} catch (error) {
  console.log('❌ Error reading db.json:', error.message);
  allFilesExist = false;
}

console.log('\n' + '='.repeat(50));
if (allFilesExist) {
  console.log('🎉 PROJECT VALIDATION PASSED!');
  console.log('\n📝 To start the application:');
  console.log('1. Terminal 1: npm run server');
  console.log('2. Terminal 2: npm run dev');
  console.log('3. Open http://localhost:5173');
} else {
  console.log('❌ PROJECT VALIDATION FAILED!');
  console.log('Please fix the missing files/configurations above.');
}
console.log('='.repeat(50));