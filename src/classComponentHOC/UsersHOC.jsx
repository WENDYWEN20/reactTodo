import React, { Component } from "react";
import withFetch from "./withFetch.jsx";
import withBorder from "./withBorder.jsx";
import Opener from "./Opener.jsx";
import withDisclosure from "./withDisclosure.jsx";
class ClassUsers extends Component {
  render() {
    const { data: users, loading, error, title, opened, handlers } = this.props;
    console.log(this.props);
    if (loading) {
      return <div> Loading ..... </div>;
    }
    if (error) {
      return <div>error: {error}</div>;
    }
    return (
      <div>
        <Opener title="Users" handlers={handlers} />
        <div>
          {opened &&
            users?.map((user) => {
              const { id, name } = user;
              return (
                <div key={id}>
                  <div>User Id: {id}</div>
                  <div>User Name: {name}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withBorder(
  withDisclosure(
    withFetch(ClassUsers, "https://jsonplaceholder.typicode.com/users"),
    false,
    {
      onOpen: () => {
        console.log("Users Open");
      },
      onClose: () => {
        console.log("Users Close");
      },
    }
  ),
  "red"
);
