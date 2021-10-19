import { useState } from "react";
import "./counterstyle.css";
import Showcount from "./Showcount";
function Counter(props) {
  let [count, setcount] = useState(0);
  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <>
      <Showcount increment={increment} decrement={decrement} count={count} />
    </>
  );
}
export default Counter;
