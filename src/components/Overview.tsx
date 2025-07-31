type Goal = {
  id: string
  name: string
  targetAmount: number
  savedAmount: number
  category: string
  deadline: string
  createdAt: string
}

type OverviewProps = {
  goals: Goal[]
}

function Overview({ goals }: OverviewProps) {
  const totalGoals = goals.length
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length
  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0)
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0)
  const overallProgress = totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const warningGoals = goals.filter(goal => {
    const deadline = new Date(goal.deadline + 'T00:00:00')
    const daysLeft = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return daysLeft <= 30 && daysLeft >= 0 && goal.savedAmount < goal.targetAmount
  })
  
  const overdueGoals = goals.filter(goal => {
    const deadline = new Date(goal.deadline + 'T00:00:00')
    const daysLeft = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    return daysLeft < 0 && goal.savedAmount < goal.targetAmount
  })

  return (
    <div className="overview">
      <h2>Overview</h2>
      <div className="stats">
        <div className="stat">
          <h3>{totalGoals}</h3>
          <p>Total Goals</p>
        </div>
        <div className="stat">
          <h3>{completedGoals}</h3>
          <p>Completed</p>
        </div>
        <div className="stat">
          <h3>${totalSaved.toLocaleString()}</h3>
          <p>Total Saved</p>
        </div>
        <div className="stat">
          <h3>${totalTarget.toLocaleString()}</h3>
          <p>Total Target</p>
        </div>
        <div className="stat">
          <h3>{overallProgress.toFixed(1)}%</h3>
          <p>Overall Progress</p>
        </div>
      </div>
      
      {(warningGoals.length > 0 || overdueGoals.length > 0) && (
        <div className="alerts">
          {warningGoals.length > 0 && (
            <div className="alert warning">
              <h4>⚠️ Deadlines Approaching</h4>
              <ul>
                {warningGoals.map(goal => {
                  const deadline = new Date(goal.deadline + 'T00:00:00')
                  const daysLeft = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
                  return (
                    <li key={goal.id}>{goal.name} - {daysLeft} days left</li>
                  )
                })}
              </ul>
            </div>
          )}
          
          {overdueGoals.length > 0 && (
            <div className="alert overdue">
              <h4>🚨 Overdue Goals</h4>
              <ul>
                {overdueGoals.map(goal => (
                  <li key={goal.id}>{goal.name} - Deadline passed</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Overview