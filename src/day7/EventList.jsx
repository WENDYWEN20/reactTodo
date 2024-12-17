import React from "react";
import { useState, useEffect } from "react";
import eventsAPI from "./EventListAPI";
import "./style.css";


export default function EventList() {
  //useEffect(()=>{fetch(LOCAL_API).then((res)=>res.json()).then((data)=>setEvents(data)).catch((error)=>console.log(error))}, [])
  //useEffect(()=>{fetch(eventsAPI.getEvents()).then((res)=>{console.log(res), setEvents(res)})},[])
  //const res= fetch(eventsAPI.getEvents()).then((res)=>console.log(res)).then(data=>console.log(data))
  useEffect(() => {
    async function API() {
      const res = await eventsAPI.getEvents();
      setEvents(res);
      console.log(res);
    }

    API();
  }, []);

  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(true);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const addEvent = async (event) => {
    const newEvent = await eventsAPI.addEvent(event);
    setEvents((prev) => [...prev, newEvent]);
  };

  const deleteEvent = (id) => {
    setEvents((prev) => prev.filter((event) => event.id !== id));
  };

  const editEvent = (id, newEvent) => {
    setEvents((prev) =>
      prev.map((event) => {
        //if the event id matches the id we want to edit, return the new event
        //otherwise, return the original event
        return event.id === id ? { id, ...newEvent } : event;
      })
    );
  };

  return (
    <div className="App">
      <button className="Add" onClick={openForm}>
        Add new EventList
      </button>
      {showForm && (
            <NewEventForm closeForm={closeForm} addEvent={addEvent} />)}
      <table className="Table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Start</th>
            <th>End</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event) => {
            return (
              <EventRow
                key={event.id}
                event={event}
                deleteEvent={deleteEvent}
                editEvent={editEvent}
              />
            );
          })}
        </tbody>
        
      </table>

    </div>
  );
}
//add new event need to things, open the form, add event then close the form
function NewEventForm({ closeForm, addEvent }) {
  const [formState, setFormState] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const { eventName, startDate, endDate } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(formState);
    closeForm();
  };
  return (    <form onSubmit={handleSubmit}>
                    <input
                required
                value={eventName}
                name="eventName"
                onChange={handleChange} />

              <input
                required
                value={startDate}
                type="date"
                name="startDate"
                onChange={handleChange}
              />
              <input
                required
                value={endDate}
                type="date"
                name="endDate"
                onChange={handleChange}
              />
              <button>Add</button>
              <button onClick={closeForm}>Cancel</button>
      
              </form>
  );
}

function EventRow({ event, deleteEvent, editEvent }) {
  const { id, eventName, startDate, endDate } = event;
  const [isEditing, setIsEditing] = useState(false);
  //check whether need to open up editing input
  const [formState, setFormState] = useState({
    eventName,
    startDate,
    endDate,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };
  const handleSave = () => {
    editEvent(id, formState);
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            required
            value={formState.eventName}
            name="eventName"
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            required
            type="date"
            value={formState.startDate}
            name="startDate"
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            required
            type="date"
            value={formState.endDate}
            name="endDate"
            onChange={handleChange}
          />
        </td>

        <td>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{eventName}</td>
      <td>{startDate}</td>
      <td>{endDate}</td>

      <td>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => deleteEvent(id)}>Delete</button>
      </td>
    </tr>
  );
}
