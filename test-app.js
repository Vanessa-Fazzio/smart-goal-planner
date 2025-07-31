// Simple test to verify the API endpoints work
const API_URL = 'http://localhost:3001/goals';

async function testAPI() {
  try {
    console.log('Testing API connection...');
    
    // Test GET request
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const goals = await response.json();
    console.log(`✅ Successfully fetched ${goals.length} goals`);
    
    // Test POST request
    const newGoal = {
      name: "Test Goal",
      targetAmount: 1000,
      savedAmount: 0,
      category: "Other",
      deadline: "2025-12-31",
      createdAt: new Date().toISOString().split('T')[0],
      id: Date.now().toString()
    };
    
    const postResponse = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGoal)
    });
    
    if (postResponse.ok) {
      console.log('✅ POST request successful');
      
      // Clean up - delete the test goal
      await fetch(`${API_URL}/${newGoal.id}`, { method: 'DELETE' });
      console.log('✅ DELETE request successful');
    }
    
    console.log('🎉 All API tests passed!');
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
    console.log('Make sure to run: npm run server');
  }
}

// Only run if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testAPI();
}