import { useEffect, useState } from 'react';

type Goal = {
  id: string;
  name: string;
  targetAmount: number;
  savedAmount: number;
  category: string;
  deadline: string;
  createdAt: string;
};

function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/goals')
      .then((res) => res.json())
      .then((data) => setGoals(data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎯 SMART Goal Planner</h1>
      {goals.map((goal) => (
        <div key={goal.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h2>{goal.name}</h2>
          <p>Category: {goal.category}</p>
          <p>Target: KES {goal.targetAmount}</p>
          <p>Saved: KES {goal.savedAmount}</p>
          <p>Deadline: {goal.deadline}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
