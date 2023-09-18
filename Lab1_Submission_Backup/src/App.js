import "./styles.css";
import { Alert } from "./Alert";

export default function App() {
  return (
    <div className="App">
      <Alert
        type="Information"
        heading="   Good job!   "
        closable
        onClose={() => console.log("Thumbs Down")}
      >
        <br></br>
        Select button when completed!
      </Alert>
    </div>
  );
}
