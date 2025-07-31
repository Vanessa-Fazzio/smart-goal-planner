# 🎯 Smart Goal Planner - Quick Start

## ✅ Your project is ready! Choose one method to start:

### Method 1: Automatic Start (Recommended)
```bash
npm start
```

### Method 2: Manual Start (Two terminals)
**Terminal 1:**
```bash
npm run server
```

**Terminal 2:**
```bash
npm run dev
```

### Method 3: Shell Script
```bash
./start.sh
```

## 🌐 Access Your App
- **React App**: http://localhost:5173 (or the port shown in terminal)
- **API Server**: http://localhost:3001

## 🎉 Features Ready to Use:
- ✅ Add new savings goals
- ✅ Make deposits to goals
- ✅ Edit existing goals
- ✅ Delete goals
- ✅ Track progress with visual bars
- ✅ View overview with statistics
- ✅ Deadline warnings and overdue alerts

## 🔧 Troubleshooting:
If you get port errors, kill existing processes:
```bash
pkill -f "json-server" && pkill -f "vite"
```

Then try starting again with `npm start`