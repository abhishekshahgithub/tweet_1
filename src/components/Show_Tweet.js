import React, { useContext } from "react";
import Store from "../context";

export default function Show_Tweet() {
  const { state, dispatch } = useContext(Store);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-12">
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {state.tweets.map(tweet => (
                <li key={tweet} className="list-group-item">
                  {tweet}
                  <button
                    className="float-right btn btn-primary btn-sm"
                    onClick={() => dispatch({ type: "DELETE", payload: tweet })}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
