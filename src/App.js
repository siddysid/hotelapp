import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/Dashboard/index"
import { MessageProvider } from './MessageContext/index'

function App() {
  return (
    <MessageProvider>
      <Dashboard />
    </MessageProvider>
  )
}

export default App;
