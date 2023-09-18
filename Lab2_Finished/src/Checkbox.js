import { useState } from "react";

export function Checkbox() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  function handleCheck1() {
    setCheckbox1(!checkbox1);
  }
  function handleCheck2() {
    setCheckbox2(!checkbox2);
  }

  const ButtonDisabled = !(checkbox1 && checkbox2);

  return (
    <div>
      <label>
        <input type="checkbox" checked={checkbox1} onChange={handleCheck1} />I
        Agree to the Terms and Conditions
      </label>
      <br />
      <label>
        <input type="checkbox" checked={checkbox2} onChange={handleCheck2} />I
        am not a robot
      </label>
      <br></br>
      <button
        disabled={ButtonDisabled}
        onClick={() => console.log("The Button has been clicked!")}
      >
        <span role="img" aria-label="Close">
          {" "}
          ✔️ Continue ✔️{" "}
        </span>
      </button>
    </div>
  );
}
