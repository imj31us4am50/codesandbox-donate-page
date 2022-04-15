import PartCSS from "/maindonpage/Part.css";
import Title from "/maindonpage/Title.js";

export default function Part() {
  return (
    <div className="container-fluid m-0 p-1 part-container" style={PartCSS}>
      {/* <img
        src="imj31us4am50.github.io/imgs/cool-lion-bw.jpg"
        className="w-100"
      /> */}
      <Title />
    </div>
  );
}
