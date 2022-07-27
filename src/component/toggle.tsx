import React, { FC, useState } from "react";
import ToggleItem from "./togelItem";

const Toggle: FC<{ isOpen: any; firstColVisible: any }> = ({
  isOpen,
  firstColVisible,
}) => {
  const [lastColVisible, setLastColVisible] = useState(false);
  const [lastColItems, setLastColItems] = useState("0");

  const handleColRight1 = (): void => {
    setLastColVisible(true);
    setLastColItems("1");
  };
  const handleColRight2 = (): void => {
    setLastColVisible(true);
    setLastColItems("2");
  };
  const handleColRight3 = (): void => {
    setLastColVisible(true);
    setLastColItems("3");
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-around"
        style={{
          width: "100%",
          transition: "all 0.5s ease-in-out",
          display: "none",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100vh",
            overflow: "auto",
            margin: "10px",
          }}
        >
          <div
            className={`p-2 ${firstColVisible === "1" ? "active" : "d-none"}`}
          >
            <h1>Left Column</h1>
            <button
              className="sd-link btn btn-primary m-2"
              onClick={handleColRight1}
            >
              Right Item 1
            </button>
            <button
              className="sd-link btn btn-primary m-2"
              onClick={handleColRight2}
            >
              Right Item 2
            </button>
            <button
              className="sd-link btn btn-primary m-2"
              onClick={handleColRight3}
            >
              Right Item 3
            </button>
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit at ab mollitia quidem obcaecati, ratione laboriosam
            dolor nobis, non veritatis cupiditate earum perspiciatis, fugiat
            debitis quae. Suscipit cumque ullam nesciunt?
          </div>
        </div>
        <div
          className={`p-2 ${firstColVisible === "1" ? "active" : "d-none"}`}
          style={{
            width: "50%",
            height: "100vh",
            overflow: "auto",
            margin: "10px",
          }}
        >
          <div
            className={`p-2 ${lastColVisible === true ? "active" : "d-none"}`}
          >
            <ToggleItem lastColItems={lastColItems} />
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
