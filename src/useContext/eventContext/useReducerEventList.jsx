import React from 'react'
import {useReducer, useContext} from 'react'
import {EventContext} from './ContentEvent'
const context=useContext(EventList)
export default function useReducerEventList() {
    //reducer function
const eventReducer=(state, action)=>{
    const {type, payload}=action //object destructure
    switch(type){
    case 'addEvent':
        return [...state,payload ]
    case 'deleteEvent':
        return state.filter((event)=>event.id!==id)
    case 'editEvent':
        return state.map(()=>{})
    }
}

  return (
    <div>
      <h1>useContext useReduce</h1>
    </div>
  )
}
