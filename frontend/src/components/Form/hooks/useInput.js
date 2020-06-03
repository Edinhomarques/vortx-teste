import { useState } from 'react';


export function useInput(valueInitial){
  const [value, setValue] = useState(valueInitial)

  function handleChange(event){
    console.log(event.target.value)
    setValue(event.target.value)
  }

  return [value, handleChange];
}