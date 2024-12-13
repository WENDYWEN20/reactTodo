import React, { useState } from "react";
import '../App.css'
export default function SelectForm() {
  const data = [
    { id: 1, name: "banana", checked: false },
    { id: 2, name: "apple", checked: false },
    { id: 3, name: "celery", checked: false },
    { id: 4, name: "orange", checked: false },
  ];

  const [items, setItems] = useState(data);
  const handleCheck = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) 
        {
          return {...item, checked: !item.checked}
        } else {
          return item;
        }
      })
    );
  };
    const allChecked=items.every((item)=>item.checked)
  const everyCheck=()=>{
    setItems(
        items.map((item) => {
              return {...item, checked: !allChecked}
          })
        
        

  )}

  return (
    <div>
      <h1>Selected: </h1>
      <span>
        {items?.map((item) => {
          return item.checked ? (item.name + " "): " ";
        })}
      </span>
      <div>
        <input type="checkbox" onChange={everyCheck} checked={allChecked}/>
        <label>Select All</label>
      </div>
      {items.map((item) => {
        return (
          <div key={item.id}>
             <input type="checkbox" onChange={() => handleCheck(item.id)} checked={item.checked} />
            <label>{item.name}</label>
          </div>
        );
      })}
    </div>
  );
}
