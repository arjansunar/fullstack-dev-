import React from "react";

function Tweet({ text, userName }) {
  return (
    <div>
      <h3>
        {userName}: {text}
      </h3>
    </div>
  );
}

export default Tweet;
