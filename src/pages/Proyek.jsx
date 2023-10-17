import React, { useState } from "react";
import Footer from "../layouts/Footer";
import { ButtonMinus, ButtonPlus, ResetButton } from "../components/Buttons";
import toast from "react-hot-toast";

const Proyek = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast.error("Count already 0");
    }
  };
  const reset = () => {
    if (count > 0) {
      setCount(0);
    } else {
      toast.error("Count already 0");
    }
  };

  return (
    <div className="container col">
      <main
        className="col"
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="content col">
          <h2>State Component</h2>
          <div
            className="container col"
            style={{
              gap: 30,
              width: 600,
              marginTop: 30,
            }}
          >
            <div className="container row language-container">
              <ButtonPlus name={"Increment"} actions={increment} />
              <ButtonMinus name={"Decrement"} actions={decrement} />
            </div>
            <div className="count-container">
              <h3>{count}</h3>
            </div>
            <ResetButton name={"Reset"} actions={reset} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proyek;
