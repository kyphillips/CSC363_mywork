import "./styles.css";
import { Alert } from "./Alert";

export default function App() {
  return (
    <div className="App">
      <Alert
        type="Information"
        heading="   Both boxes need to be checked to complete the task   "
        closable
        onClose={() => console.log("Action Completed")}
      >
        <br></br>
        Thank you!
      </Alert>
    </div>
  );
}
