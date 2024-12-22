const genId = (() => {
    let id = 0;
    return () => id++;
  })();
  
  const eventsList = [
    {
      id: genId(),
      eventName: "Music Festival",
      startDate: "2023-01-20",
      endDate: "2023-01-21",
    },
    {
      id: genId(),
      eventName: "Food Festival",
      startDate: "2023-02-01",
      endDate: "2023-02-02",
    },
    {
      id: genId(),
      eventName: "Holiday Party",
      startDate: "2023-01-20",
      endDate: "2023-01-21",
    },
  ];
  
  async function getEvents() {
    return [...eventsList];
  }
  async function addEvent(event) {
    const newEvent = {
      id: genId(),
      ...event,
    };
    eventsList.push(newEvent);
    return newEvent
  }
  export default { getEvents, addEvent };