import React from "react";
import "./styles.css";

const CONTENT = [1, 2, 3, 4];

const page = () => {
  return (
    <section className="w-screen min-h-screen px-12 pt-12 flex items-center justify-center">
      <ul className="container">
        {CONTENT.map((elem) => (
          <li
            className="card"
            id={"card" + elem}
            key={elem}
            style={{ "--index": elem } as React.CSSProperties}
          >
            <div className="card-body">
              <h2>Card {elem}</h2>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default page;
