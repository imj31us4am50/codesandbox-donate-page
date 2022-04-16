import "./styles2.css";
import bootstrap from "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Part from "/maindonpage/Part.js";
import IconsDescs from "/maindonpage/IconsDescs.js";

export default function App2() {
  return (
    <div className="container-fluid m-0 p-0">
      <Part />
      <IconsDescs />
    </div>
  );
}
