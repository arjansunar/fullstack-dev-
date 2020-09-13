import React, { useEffect, useState } from "react";
import axios from "axios";
import Tweet from "./Tweet";

function Messages() {
  const [Messages, setMessages] = useState([]);
  useEffect(() => {
    async function Api_call() {
      const response = await axios.get(
        "https://arjan-tweets-api.herokuapp.com/tweets"
      );
      const data = response.data;
      setMessages(data);
    }
    Api_call();
  }, []);

  return (
    <div>
      Messages
      {Messages.map((message) => (
        <Tweet
          key={message._id}
          text={message.message}
          userName={message.name}
        />
      ))}
    </div>
  );
}

export default Messages;
