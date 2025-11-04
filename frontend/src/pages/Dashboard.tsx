import React from 'react';
import ActivityCard from '../components/ActivityCard';
export default function Dashboard(){
  const activities = [
    {id:'a1', title:'Soccer Practice', description:'North Field', startTs: new Date().toISOString()},
    {id:'a2', title:'Math Homework', description:'Chapter 5', startTs: new Date().toISOString()}
  ];
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 360px', gap:16}}>
      <div>
        <h2>Upcoming</h2>
        <div style={{display:'grid', gap:12}}>
          {activities.map(a=> <ActivityCard key={a.id} activity={a} />)}
        </div>
      </div>
      <aside style={{background:'#fff', padding:12, borderRadius:8}}>
        <h3>Mini calendar</h3>
      </aside>
    </div>
  );
}
