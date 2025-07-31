let goals = [
  {
    "id": "1",
    "name": "Travel Fund - Japan",
    "targetAmount": 5000,
    "savedAmount": 3200,
    "category": "Travel",
    "deadline": "2025-12-31",
    "createdAt": "2024-01-15"
  },
  {
    "id": "2",
    "name": "Emergency Fund",
    "targetAmount": 10000,
    "savedAmount": 7500,
    "category": "Emergency",
    "deadline": "2026-06-30",
    "createdAt": "2023-05-01"
  },
  {
    "id": "3",
    "name": "New Laptop",
    "targetAmount": 1500,
    "savedAmount": 1500,
    "category": "Electronics",
    "deadline": "2024-07-20",
    "createdAt": "2024-03-10"
  },
  {
    "id": "4",
    "name": "Down Payment - House",
    "targetAmount": 50000,
    "savedAmount": 12000,
    "category": "Real Estate",
    "deadline": "2027-12-31",
    "createdAt": "2024-02-01"
  },
  {
    "id": "5",
    "name": "Car Maintenance",
    "targetAmount": 800,
    "savedAmount": 600,
    "category": "Vehicle",
    "deadline": "2025-09-15",
    "createdAt": "2024-06-01"
  }
];

export default function handler(req, res) {
  const { method, query } = req;
  const { id } = query;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (method === 'GET') {
    if (id) {
      const goal = goals.find(g => g.id === id);
      return goal ? res.json(goal) : res.status(404).json({ error: 'Goal not found' });
    }
    return res.json(goals);
  }

  if (method === 'POST') {
    const newGoal = { ...req.body, id: Date.now().toString() };
    goals.push(newGoal);
    return res.status(201).json(newGoal);
  }

  if (method === 'PATCH' && id) {
    const goalIndex = goals.findIndex(g => g.id === id);
    if (goalIndex === -1) return res.status(404).json({ error: 'Goal not found' });
    
    goals[goalIndex] = { ...goals[goalIndex], ...req.body };
    return res.json(goals[goalIndex]);
  }

  if (method === 'DELETE' && id) {
    const goalIndex = goals.findIndex(g => g.id === id);
    if (goalIndex === -1) return res.status(404).json({ error: 'Goal not found' });
    
    goals.splice(goalIndex, 1);
    return res.status(204).end();
  }

  res.status(405).json({ error: 'Method not allowed' });
}