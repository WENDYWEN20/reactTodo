import React, { useState } from "react";
import "./CtrlComp.css";
export function CtrlComp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);
  const [id, setId]=useState(0)

  const addUser = (e) => {
    e.preventDefault();
    const newId=id+1
    setId(newId)
    console.log("add user clicked");
    let newUser = { id: newId, firstName, lastName, phone };
    setUsers([...users, newUser]);
    console.log(users);
  };

  return (
    <div className="App">
      <div className="form-box">
        <form onSubmit={addUser}>
          <label>First Name :</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label>Last Name :</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <label>Phone :</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <button type="submit" className='App-Button'>Add User</button>
        </form>
      </div>

      <div className="Table">
        <table className="Table-Head">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => {
              const { id, firstName, lastName, phone } = user;
              return (
                <tr key={id}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
