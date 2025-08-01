import { useState } from 'react'

type Goal = {
  id: string
  name: string
  targetAmount: number
  savedAmount: number
  category: string
  deadline: string
  createdAt: string
}

type DepositFormProps = {
  goals: Goal[]
  onMakeDeposit: (goalId: string, amount: number) => void
}

function DepositForm({ goals, onMakeDeposit }: DepositFormProps) {
  const [selectedGoal, setSelectedGoal] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedGoal && amount && parseFloat(amount) > 0) {
      onMakeDeposit(selectedGoal, parseFloat(amount))
      setAmount('')
    }
  }

  return (
    <div className="deposit-form">
      <h2>Make Deposit</h2>
      <form onSubmit={handleSubmit}>
        <select 
          value={selectedGoal} 
          onChange={(e) => setSelectedGoal(e.target.value)}
          required
        >
          <option value="">Select a goal</option>
          {goals.map(goal => (
            <option key={goal.id} value={goal.id}>
              {goal.name} (${goal.savedAmount}/${goal.targetAmount})
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Deposit amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0.01"
          step="0.01"
          required
        />
        <button type="submit">Make Deposit</button>
      </form>
    </div>
  )
}

export default DepositForm