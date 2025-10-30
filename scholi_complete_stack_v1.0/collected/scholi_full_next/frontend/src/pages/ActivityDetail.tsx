import React from 'react';
import { useParams } from 'react-router-dom';
export default function ActivityDetail(){
  const { id } = useParams();
  return (
    <div style={{maxWidth:720, background:'#fff', padding:20, borderRadius:12}}>
      <h2>Activity {id}</h2>
      <p>Details about this activity...</p>
    </div>
  );
}
