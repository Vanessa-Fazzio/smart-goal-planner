import { useState } from 'react'

function GoalCard({ goal, onUpdateGoal, onDeleteGoal }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({
    name: goal.name,
    targetAmount: goal.targetAmount,
    category: goal.category,
    deadline: goal.deadline
  })

  const progress = (goal.savedAmount / goal.targetAmount) * 100
  const isCompleted = progress >= 100
  const remaining = goal.targetAmount - goal.savedAmount
  
  const today = new Date()
  const deadline = new Date(goal.deadline)
  const daysLeft = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24))
  const isOverdue = daysLeft < 0 && !isCompleted
  const isWarning = daysLeft <= 30 && daysLeft >= 0 && !isCompleted

  const handleEdit = () => {
    onUpdateGoal(goal.id, {
      ...editData,
      targetAmount: parseFloat(editData.targetAmount)
    })
    setIsEditing(false)
  }

  const categories = ['Travel', 'Emergency', 'Electronics', 'Real Estate', 'Vehicle', 'Education', 'Shopping', 'Retirement', 'Home', 'Other']

  if (isEditing) {
    return (
      <div className="goal-card editing">
        <input
          type="text"
          value={editData.name}
          onChange={(e) => setEditData({...editData, name: e.target.value})}
        />
        <input
          type="number"
          value={editData.targetAmount}
          onChange={(e) => setEditData({...editData, targetAmount: e.target.value})}
          min="0"
          step="0.01"
        />
        <select
          value={editData.category}
          onChange={(e) => setEditData({...editData, category: e.target.value})}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="date"
          value={editData.deadline}
          onChange={(e) => setEditData({...editData, deadline: e.target.value})}
        />
        <div className="edit-buttons">
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </div>
    )
  }

  return (
    <div className={`goal-card ${isCompleted ? 'completed' : ''} ${isOverdue ? 'overdue' : ''} ${isWarning ? 'warning' : ''}`}>
      <h3>{goal.name}</h3>
      <div className="goal-info">
        <p><strong>Category:</strong> {goal.category}</p>
        <p><strong>Target:</strong> ${goal.targetAmount.toLocaleString()}</p>
        <p><strong>Saved:</strong> ${goal.savedAmount.toLocaleString()}</p>
        <p><strong>Remaining:</strong> ${remaining.toLocaleString()}</p>
        <p><strong>Deadline:</strong> {goal.deadline}</p>
        {isOverdue && <p className="status overdue-text">OVERDUE</p>}
        {isWarning && <p className="status warning-text">Due in {daysLeft} days</p>}
        {isCompleted && <p className="status completed-text">COMPLETED</p>}
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
      <p className="progress-text">{progress.toFixed(1)}% complete</p>
      <div className="card-buttons">
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button className="delete-btn" onClick={() => onDeleteGoal(goal.id)}>Delete</button>
      </div>
    </div>
  )
}

export default GoalCard