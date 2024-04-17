import React from 'react'

export default function Alert(props) {
  
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

  
    return (
   //This syntax props.alert is written to say that do next section if alert is not set .
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong> {capitalize(props.alert.type)}</strong> : {props.alert.msg} 
        
    </div>
  )
}
