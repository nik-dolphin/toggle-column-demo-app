import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Toggle from "./component/toggle";
import Toggle2 from "./component/toggle2";

function App() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const [firstColVisible, setFirstColVisible] = useState("0");

  const ToggleSidebar = (): void => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const handleColLeft = (): void => {
    setFirstColVisible("1");
  };

  const handleMenu2 = () => {
    setFirstColVisible("2");
  };

  return (
    <>
      <Navbar ToggleSidebar={ToggleSidebar} isOpen={isOpen} />
      <Sidebar
        isOpen={isOpen}
        ToggleSidebar={ToggleSidebar}
        handleColLeft={handleColLeft}
        handleMenu2={handleMenu2}
      />
      <div
        className="container-fluid"
        style={{
          width: "100%",
          paddingLeft: `${isOpen === true ? "17.5em" : ""}`,
          transition: "all 0.5s ease-in-out",
        }}
      >
        <Toggle2 firstColVisible={firstColVisible} />
        <Toggle isOpen={isOpen} firstColVisible={firstColVisible} />
      </div>
    </>
  );
}

export default App;
