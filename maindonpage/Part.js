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
      <div className="some-container-on-part mt-5 mb-5">
        <div className="empty p-2"></div>
        <div className="part-content text-white p-5">
          <div className="row h3 text-center">
            Împreună cu noi și cu alte persoane din această comunitate poți
            contribui la protejarea animalelor sălbatice în pericol, și nu
            numai.
          </div>
          <div className="row h4 text-center">
            <img
              src="https://raw.githubusercontent.com/AvramAlexandruV/project/main/logo.png"
              className="logo-on-donate mx-auto mt-5"
            />
          </div>
          <div className="row h4 text-center">
            <button className="btn donation-button mx-auto mt-2">
              DONEAZĂ ACUM
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
