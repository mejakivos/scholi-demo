import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CalendarPage from './pages/CalendarPage';
import ActivityDetail from './pages/ActivityDetail';
import CreateActivity from './pages/CreateActivity';

export default function App(){
  return (
    <div style={{fontFamily:'Inter, system-ui', minHeight:'100vh', background:'#F7F9FC'}}>
      <nav style={{padding:16, display:'flex', gap:12, alignItems:'center'}}>
        <div style={{fontWeight:700, color:'#2563EB'}}>Scholi</div>
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/create">Create</Link>
        <div style={{marginLeft:'auto'}}><Link to="/login">Login</Link></div>
      </nav>
      <main style={{padding:20}}>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/calendar" element={<CalendarPage/>} />
          <Route path="/activity/:id" element={<ActivityDetail/>} />
          <Route path="/create" element={<CreateActivity/>} />
        </Routes>
      </main>
    </div>
  );
}
