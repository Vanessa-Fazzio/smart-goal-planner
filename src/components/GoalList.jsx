import GoalCard from './GoalCard'

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <div className="goal-list">
      <h2>Your Goals</h2>
      <div className="goals-grid">
        {goals.map(goal => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onUpdateGoal={onUpdateGoal}
            onDeleteGoal={onDeleteGoal}
          />
        ))}
      </div>
    </div>
  )
}

export default GoalList