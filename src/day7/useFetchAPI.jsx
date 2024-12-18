const LOCAL_API = "http://localhost:3000/events";

const postAPI = async (newEvent) => {
  try {
    const response = await fetch(LOCAL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

const handleUpdate = (id, updatedEvent) => {
  fetch(`${LOCAL_API}/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedEvent),
  }).then((res) => res.json());
  setIsEdit(false)
};
