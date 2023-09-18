import "./styles.css";
import { Checkbox } from "./Checkbox";

export default function App() {
  return (
    <div className="App">
      <Checkbox
        type="information"
        heading="Check the boxes first!! "
        closable
      ></Checkbox>
      <br></br>
      Please check the boxes THEN hit the button
    </div>
  );
}
