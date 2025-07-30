function GoalCard({ goal, onUpdateGoal, onDeleteGoal }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100
  const isCompleted = progress >= 100

  return (
    <div className={`goal-card ${isCompleted ? 'completed' : ''}`}>
      <h3>{goal.name}</h3>
      <div className="goal-info">
        <p><strong>Category:</strong> {goal.category}</p>
        <p><strong>Target:</strong> ${goal.targetAmount}</p>
        <p><strong>Saved:</strong> ${goal.savedAmount}</p>
        <p><strong>Deadline:</strong> {goal.deadline}</p>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
      <p className="progress-text">{progress.toFixed(1)}% complete</p>
      <button 
        className="delete-btn" 
        onClick={() => onDeleteGoal(goal.id)}
      >
        Delete
      </button>
    </div>
  )
}

export default GoalCard