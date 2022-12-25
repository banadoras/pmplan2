import { useState } from "react";
import Accordion from "./accordion";
import Nav from "./nav";
import Plan from "./plan";
import "./styles.css";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <h3 className="title">Pain Medicine Plan</h3>
      <div className={loggedIn ? "main" : "main blur"}>
        <Accordion />
        <Plan />
      </div>
      {!loggedIn ? (
        <div className="alert-modal">
          <input
            type="password"
            placeholder="Enter Code"
            onInput={(e) => {
              if (e.target.value === "1234") {
                setLoggedIn(true);
              }
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
