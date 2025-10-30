import React from 'react';
export default function Login(){
  return (
    <div style={{maxWidth:420, margin:'0 auto', background:'#fff', padding:24, borderRadius:12}}>
      <h2>Sign in to Scholi</h2>
      <input placeholder='Email' style={{width:'100%',padding:8,marginBottom:8}} />
      <input placeholder='Password' type='password' style={{width:'100%',padding:8,marginBottom:8}} />
      <button style={{background:'#2563EB', color:'#fff', padding:10, borderRadius:8}}>Sign in</button>
    </div>
  );
}
