#!/bin/bash

echo "🎯 Starting Smart Goal Planner..."

# Kill any existing processes
pkill -f "json-server" 2>/dev/null || true
pkill -f "vite" 2>/dev/null || true

sleep 2

echo "📊 Starting JSON Server on port 3001..."
npm run server &
SERVER_PID=$!

sleep 3

echo "⚛️  Starting React App on port 5173..."
npm run dev &
DEV_PID=$!

echo ""
echo "🚀 Smart Goal Planner is starting up!"
echo "📊 JSON Server: http://localhost:3001"
echo "⚛️  React App: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
trap "echo 'Stopping servers...'; kill $SERVER_PID $DEV_PID 2>/dev/null; exit" INT

wait