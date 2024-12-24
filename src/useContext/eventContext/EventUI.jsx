import React, { useContext } from "react";
import { EventContext } from "./ContextEvent";
export default function EventUI() {
  const {events, deleteEvent, finishEvent } = useContext(EventContext);

  return (
    <div> 
        <h1> Event List</h1>
        {/* <p>{events[0].inputText}</p> */}
    <ul>{events?.map((event) => {
        return <li key={event.id} style={event.completed? {color:'green'}:{color:'red'}}>
          <span >{event.inputText}</span>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
          <button onClick={() => finishEvent(event.id)}>Finish</button>
        </li>
      })}
    </ul>
    </div>
  );
}
