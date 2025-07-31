import GoalCard from './GoalCard'

type Goal = {
  id: string
  name: string
  targetAmount: number
  savedAmount: number
  category: string
  deadline: string
  createdAt: string
}

type GoalListProps = {
  goals: Goal[]
  onUpdateGoal: (id: string, updates: Partial<Goal>) => void
  onDeleteGoal: (id: string) => void
}

function GoalList({ goals, onUpdateGoal, onDeleteGoal }: GoalListProps) {
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