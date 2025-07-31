# Smart Goal Planner - Setup Instructions

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the JSON Server (Terminal 1)
```bash
npm run server
```
This will start the API server on `http://localhost:3001`

### 3. Start the React App (Terminal 2)
```bash
npm run dev
```
This will start the React app on `http://localhost:5173`

## Features Implemented

✅ **CRUD Operations**
- Create new goals
- Read/fetch all goals
- Update existing goals (edit functionality)
- Delete goals

✅ **Progress Tracking**
- Visual progress bars
- Percentage completion
- Remaining amount calculation
- Target vs saved amount display

✅ **Deposit Management**
- Make deposits to specific goals
- Real-time progress updates
- Goal selection dropdown

✅ **Overview Dashboard**
- Total goals count
- Completed goals count
- Total money saved
- Overall progress percentage
- Deadline warnings and overdue alerts

✅ **Smart Alerts**
- Goals due within 30 days show warning
- Overdue goals are highlighted in red
- Completed goals are highlighted in green

## API Endpoints

- `GET /goals` - Fetch all goals
- `POST /goals` - Create new goal
- `PATCH /goals/:id` - Update specific goal
- `DELETE /goals/:id` - Delete specific goal

## Project Structure

```
src/
├── components/
│   ├── GoalForm.jsx      # Form to add new goals
│   ├── GoalList.jsx      # Container for all goal cards
│   ├── GoalCard.jsx      # Individual goal display with edit/delete
│   ├── Overview.jsx      # Dashboard with statistics and alerts
│   └── DepositForm.jsx   # Form to make deposits
├── App.jsx               # Main application component
├── App.css              # Comprehensive styling
└── main.jsx             # Application entry point
```

## Troubleshooting

### Port Already in Use
If you get "EADDRINUSE" error:
```bash
pkill -f "json-server"
npm run server
```

### API Connection Issues
- Make sure json-server is running on port 3001
- Check that db.json exists in the root directory
- Verify the API_URL in App.jsx points to http://localhost:3001/goals

### React App Issues
- Clear browser cache
- Check console for errors
- Ensure all dependencies are installed

## Testing the Application

1. **Add a Goal**: Use the "Add New Goal" form
2. **Make a Deposit**: Use the "Make Deposit" form
3. **Edit a Goal**: Click "Edit" on any goal card
4. **Delete a Goal**: Click "Delete" on any goal card
5. **View Progress**: Check the progress bars and overview statistics

The application includes sample data with various goal states to demonstrate all features.