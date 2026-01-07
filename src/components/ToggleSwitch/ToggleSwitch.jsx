import React, { useState } from 'react'
import "./toggleSwitch.css"

export default function ToggleSwitch({type,setSwitchOn}) {
  const [isOn, setIsOn] = useState(type==='include');

  const handleToggle = (checked) => {
        setIsOn(checked);
        if(checked){
            setSwitchOn('include');
        }
        else{
            setSwitchOn('Exclude');
        }
  }

  return (
    <label class="toggle-switch">
        <input type="checkbox" checked={isOn} onChange={e => handleToggle(e.target.checked)} />
        <span class="slider"></span>
    </label>
  )
}
