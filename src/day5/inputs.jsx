import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Inputs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  useEffect(() => {
    // set loading to true right before fetching data
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        // console.log("err", err)
        setErr(err);
      })
      .finally(() => {
        // after promise settles, set loading to false regardless of success or failure
        setLoading(false);
      });
  }, []);

  // if (loading) return <div>...loading</div>;

  // if (err) {
  //   return <div>{err}</div>;
  // }

  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);
  const catChange = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  const [prename, setPreName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);
  const agePredict = () => {
    Axios.get(`https://api.agify.io/?name=${prename}`).then((res) => {
      setPredictedAge(res.data);
      console.log(res.data);
    }).catch(function(error) {
      console.log(error)})
  };

  //controlled component
  // const [controlInput, setControlInput] = useState("control input");
  const handleClick = () => {
    // console.log("Button Clicked");
    // setControlInput("");
  };
  return (
    <div>
      <div>
        <h2>Posts</h2>
        {/* {loading ? (
        <div>loading...</div>
      ) : ( */}
        <div>
          {posts.map((post) => {
            const { id, title, body } = post;
            return (
              <div key={id}>
                <h3>{title}</h3>
                <div>{body}</div>
              </div>
            );
          })}
        </div>
        {/* )} */}
      </div>
      <input
      // value={controlInput}
      // onChange={(e) => {
      //   setControlInput(e.target.value);
      // }}
      />
      <input type="checkbox" />I have read
      <button onClick={handleClick}>Submit</button>
      <p className="task" style={{ backgroundColor: "green" }}>
        {catFact}
      </p>
      <button onClick={catChange} style={{ border: "5px solid red" }}>
        Change Cat
      </button>
      <hr />
      <input
        placeholder="prename"
        onChange={(event) => 
          {setPreName(event.target.value)}}
      />
      <button onClick={agePredict}>Predict Age</button>
      <h4> Predicted Age : {predictedAge?.age}</h4>
      <h4> Predicted Name : {predictedAge?.name}</h4>
      <h4> Predicted Count : {predictedAge?.count}</h4>
    </div>
  );
}
