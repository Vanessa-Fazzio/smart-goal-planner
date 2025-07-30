# 🎯 Smart Goal Planner

A modern, intuitive React-based financial goal tracking application that helps users set, monitor, and achieve their savings goals with smart insights and progress tracking.

![Smart Goal Planner](https://img.shields.io/badge/React-19.1.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.0.4-green.svg)
![JSON Server](https://img.shields.io/badge/JSON%20Server-1.0.0--beta.3-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🌟 Features

### 📊 Goal Management
- **Create Goals**: Set up savings goals with target amounts, categories, and deadlines
- **Track Progress**: Visual progress indicators showing completion percentage
- **Category Organization**: Organize goals by categories (Travel, Emergency, Electronics, Real Estate, Vehicle, Education, Shopping, Retirement, Home, Other)
- **Smart Insights**: Get intelligent recommendations based on your saving patterns

### 💰 Financial Tracking
- **Deposit Management**: Make deposits to specific goals with real-time updates
- **Progress Visualization**: Interactive progress bars and completion percentages
- **Goal Overview**: Dashboard showing total savings, active goals, and completion statistics
- **Deadline Monitoring**: Track time remaining for each goal with visual indicators

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Updates**: Instant feedback on all actions with optimistic UI updates
- **Intuitive Interface**: Clean, modern design with easy navigation
- **Data Persistence**: All data is stored and synchronized with JSON Server backend

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vanessa-Fazzio/smart-goal-planner.git
   cd smart-goal-planner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   npm run server
   ```
   This starts the JSON Server on `http://localhost:3001`

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
smart-goal-planner/
├── public/
│   └── vite.svg                 # Vite favicon
├── src/
│   ├── assets/
│   │   └── react.svg           # React logo asset
│   ├── components/
│   │   ├── GoalForm.jsx        # Form for creating new goals
│   │   ├── GoalList.jsx        # List container for all goals
│   │   ├── GoalCard.jsx        # Individual goal display card
│   │   ├── Overview.jsx        # Dashboard overview component
│   │   └── DepositForm.jsx     # Form for making deposits
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── index.css               # Global styles
│   └── main.jsx                # Application entry point
├── db.json                     # JSON Server database
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # Project documentation
```

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0**: Modern React with hooks and functional components
- **Vite 7.0.4**: Fast build tool and development server
- **CSS3**: Custom styling with modern CSS features
- **JavaScript ES6+**: Modern JavaScript features and syntax

### Backend
- **JSON Server 1.0.0-beta.3**: RESTful API mock server
- **REST API**: Standard HTTP methods for CRUD operations

### Development Tools
- **ESLint**: Code linting and formatting
- **Vite Plugin React**: React support for Vite
- **Hot Module Replacement**: Instant updates during development

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run server` | Start JSON Server backend on port 3001 |
| `npm run lint` | Run ESLint for code quality checks |

## 🎯 Usage Guide

### Creating a New Goal

1. Navigate to the "Add New Goal" section
2. Fill in the required information:
   - **Goal Name**: Descriptive name for your goal
   - **Target Amount**: The amount you want to save
   - **Category**: Select from predefined categories
   - **Deadline**: Target completion date
3. Click "Add Goal" to create your goal

### Making Deposits

1. Use the "Make Deposit" form
2. Select the goal you want to contribute to
3. Enter the deposit amount
4. Click "Make Deposit" to update your progress

### Tracking Progress

- View your goals in the main dashboard
- Monitor progress bars showing completion percentage
- Check remaining amounts and time to deadline
- Use the overview section for summary statistics

## 🔧 API Endpoints

The application uses JSON Server to provide a RESTful API:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/goals` | Retrieve all goals |
| POST | `/goals` | Create a new goal |
| GET | `/goals/:id` | Get specific goal by ID |
| PATCH | `/goals/:id` | Update specific goal |
| DELETE | `/goals/:id` | Delete specific goal |

### Goal Data Structure

```json
{
  "id": "string",
  "name": "string",
  "targetAmount": "number",
  "savedAmount": "number",
  "category": "string",
  "deadline": "YYYY-MM-DD",
  "createdAt": "YYYY-MM-DD"
}
```

## 🎨 Customization

### Adding New Categories

Edit the `categories` array in `src/components/GoalForm.jsx`:

```javascript
const categories = [
  'Travel', 'Emergency', 'Electronics', 'Real Estate', 
  'Vehicle', 'Education', 'Shopping', 'Retirement', 
  'Home', 'Other', 'Your New Category'
]
```

### Styling Customization

- **Global Styles**: Edit `src/index.css`
- **Component Styles**: Edit `src/App.css`
- **Custom Themes**: Add CSS variables for easy theme switching

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deployment Options

1. **Netlify**: Connect your GitHub repository for automatic deployments
2. **Vercel**: Deploy with zero configuration
3. **GitHub Pages**: Use GitHub Actions for automated deployment
4. **Traditional Hosting**: Upload the `dist` folder to any web server

### Environment Variables

For production deployment, update the API URL in `src/App.jsx`:

```javascript
const API_URL = process.env.VITE_API_URL || 'http://localhost:3001/goals'
```

## 🧪 Testing

### Manual Testing Checklist

- [ ] Create new goals with all required fields
- [ ] Make deposits to existing goals
- [ ] Update goal progress and verify calculations
- [ ] Delete goals and confirm removal
- [ ] Test responsive design on different screen sizes
- [ ] Verify data persistence after page refresh

### Future Testing Enhancements

- Unit tests with Jest and React Testing Library
- Integration tests for API interactions
- End-to-end tests with Cypress or Playwright

## 🔮 Future Enhancements

### Planned Features

- [ ] **User Authentication**: Multi-user support with secure login
- [ ] **Goal Categories Management**: Custom category creation
- [ ] **Advanced Analytics**: Detailed savings insights and trends
- [ ] **Goal Sharing**: Share goals with family or friends
- [ ] **Mobile App**: React Native version for iOS and Android
- [ ] **Export/Import**: Backup and restore goal data
- [ ] **Notifications**: Deadline reminders and milestone alerts
- [ ] **Currency Support**: Multi-currency goal tracking
- [ ] **Goal Templates**: Pre-defined goal templates for common savings targets

### Technical Improvements

- [ ] **Database Migration**: Move from JSON Server to PostgreSQL/MongoDB
- [ ] **State Management**: Implement Redux or Zustand for complex state
- [ ] **PWA Features**: Offline support and installable app
- [ ] **Performance Optimization**: Code splitting and lazy loading
- [ ] **Accessibility**: WCAG 2.1 compliance improvements
- [ ] **Internationalization**: Multi-language support

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [Vanessa-Fazzio](https://github.com/Vanessa-Fazzio)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- JSON Server for the simple mock API solution
- The open-source community for inspiration and resources

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Vanessa-Fazzio/smart-goal-planner/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers directly

## 📊 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/Vanessa-Fazzio/smart-goal-planner)
![GitHub issues](https://img.shields.io/github/issues/Vanessa-Fazzio/smart-goal-planner)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Vanessa-Fazzio/smart-goal-planner)

---

**Happy Goal Planning! 🎯💰**
