import React, { useState } from 'react';
import Input from './Input';
import cities from './cities.json'
function App() {
   
   const [citi,setciti]=useState('');
   
 const handleChange =(e)=>{
   const target = e.target.value
   if (target==''){
      setciti('')
   }else{setciti(cities.find((v)=>v.includes(target)))}
 }
   return (<div>
      <Input handleChange={handleChange} hint={citi}/>
   </div>)
}

export default App;
