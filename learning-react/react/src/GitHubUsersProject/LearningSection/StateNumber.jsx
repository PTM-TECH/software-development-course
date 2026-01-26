import { useState } from "react";
function StateNum() {
  const [n, setN] = useState(0);

  const increment = () => {
    // console.log("Increment btn pressed");
    let newV = n + 1;
    setN(newV);
  };
  const decrement = () => {
    // console.log("Decrement btn pressed");
    let newV = n - 1;
    setN(newV);
  };
  return (
    <div className="p-4">
      <Button txt={"-"} color="red" actionFunc={decrement} />
      <span>{n}</span>
      <Button txt={"+"} color="blue" actionFunc={increment} />
    </div>
  );
}
function Button(props) {
  const { txt, color, actionFunc } = props;
  return (
    <button
      className="m-2 rounded-md shadow-md text-white font-bold active:opacity-50 cursor-pointer"
      style={{ width: "20px", height: "20px", backgroundColor: color }}
      onClick={actionFunc}
    >
      {txt}
    </button>
  );
}
export default StateNum;
