import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Messages from "./components/Messages";

function App() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  return (
    <div className="App">
      <h1>Tweeterr</h1>
      <form className="app__form">
        <input
          onChange={(Event) => {
            const nameVal = Event.target.value;
            setName(nameVal);
          }}
          className="app__input"
          placeholder="Enter your name..."
          required
        ></input>
        <textarea
          onChange={(Event) => {
            const textVal = Event.target.value;
            setText(textVal);
          }}
          className="app__textarea"
          placeholder="Enter your message..."
          required
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            Axios({
              method: "post",
              url: "https://arjan-tweets-api.herokuapp.com/api/post",
              data: {
                name: name,
                message: text,
              },
            })
              .then(function (response) {
                console.log(response);
                window.location.reload();
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
          className="app__button"
          type="submit"
        >
          Submit
        </button>
      </form>
      <Messages></Messages>
    </div>
  );
}

export default App;
