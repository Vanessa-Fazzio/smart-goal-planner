import { useState } from 'react'

const categories = ['Travel', 'Emergency', 'Electronics', 'Real Estate', 'Vehicle', 'Education', 'Shopping', 'Retirement', 'Home', 'Other']

function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: '',
    targetAmount: '',
    category: 'Other',
    deadline: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.targetAmount && formData.deadline) {
      onAddGoal({
        ...formData,
        targetAmount: parseFloat(formData.targetAmount)
      })
      setFormData({ name: '', targetAmount: '', category: 'Other', deadline: '' })
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="goal-form">
      <h2>Add New Goal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Goal name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="targetAmount"
          placeholder="Target amount"
          value={formData.targetAmount}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
        />
        <select name="category" value={formData.category} onChange={handleChange}>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  )
}

export default GoalForm