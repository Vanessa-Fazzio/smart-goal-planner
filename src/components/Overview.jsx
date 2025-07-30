function Overview({ goals }) {
  const totalGoals = goals.length
  const completedGoals = goals.filter(goal => goal.savedAmount >= goal.targetAmount).length
  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0)
  const totalSaved = goals.reduce((sum, goal) => sum + goal.savedAmount, 0)
  const overallProgress = totalTarget > 0 ? (totalSaved / totalTarget) * 100 : 0

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
    </div>
  )
}

export default Overview