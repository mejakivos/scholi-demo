import React from 'react';
export default function CalendarGrid() {
  const days = Array.from({length:30}).map((_,i)=>i+1);
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:8}}>
      {days.map(d=>(
        <div key={d} style={{minHeight:80, background:'#fff', borderRadius:8, padding:8}}>
          <div style={{fontSize:12, color:'#6B7280'}}>{d}</div>
        </div>
      ))}
    </div>
  );
}
