import React from 'react';
export default function ActivityCard({activity}:{activity:any}) {
  return (
    <div style={{padding:12, borderRadius:8, background:'#fff', boxShadow:'0 6px 18px rgba(12,20,40,0.06)'}}>
      <div style={{fontWeight:600}}>{activity.title}</div>
      <div style={{color:'#667085', fontSize:13}}>{activity.description}</div>
      <div style={{marginTop:8, fontSize:13}}>{new Date(activity.startTs||activity.start_ts||Date.now()).toLocaleString()}</div>
    </div>
  );
}
