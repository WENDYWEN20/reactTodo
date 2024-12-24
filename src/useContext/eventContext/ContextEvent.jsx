import React from "react";
import { createContext, useState, useContext } from "react";

export const EventContext = createContext(null);
export default function EventsProvider({ children }) {
  const [events, setEvents]=useState([])
  function addEvent(inputText) {
    //add an event
    const newEvent = { id: Date.now(), inputText, completed: false };
    setEvents((prev) => [...prev, newEvent]);
  }
  function deleteEvent(id) {
    //remove an event
    setEvents((prev) => prev?.filter((event) => event.id !== id));
  }
  function finishEvent(id) {
    setEvents((prev) =>
      prev?.map((event) => (event.id === id ? { ...event, completed: !event.completed } : event))
    );
    //if the event id matches the id we want to edit, return the new event
    //otherwise, return the original event
  }

  return (
    <EventContext.Provider value={{ events, addEvent, deleteEvent, finishEvent }}>
      {children}
    </EventContext.Provider>
  );
}

//Global State management createContext can pass any kind of value, objects, numbers
export function Events() {
  return useContext(EventContext);
}
