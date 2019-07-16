import React, { useContext, useState } from "react";
import Store from "../context";

export default function Create_Tweet() {
  const { dispatch } = useContext(Store);

  const [tweet, setTweet] = useState("");

  function tweetInput(e) {
    setTweet(e.target.value);
  }

  function handleTweet() {
    dispatch({ type: "CREATE_TWEET", payload: tweet });
    setTweet("");
  }


  return (
    <div className="row">
      <div className="col-md-12">
          <h1>Mini Tweet App</h1>
        <br />
        <div className="input-group">
          <input value={tweet} placeholder="Tweet" onChange={tweetInput}
            className="form-control"
          />
          <div>
            <button className="btn btn-primary" onClick={handleTweet}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
