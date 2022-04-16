import IconsDescsCSS from "/maindonpage/IconsDescs.css";

export default function IconsDescs() {
  return (
    <div className="container-fluid d-flex container-for-iconsdescs mt-5">
      <div className="container-1 conta p-2 mx-auto">
        <div className="icon1 mx-auto">
          <img
            src="https://imj31us4am50.github.io/imgs/bird-bw.jpg"
            className="iconimg"
          />
        </div>
      </div>
      <div className="container-2 conta p-2 mx-auto">
        <div className="icon2 mx-auto">
          <img
            src="https://imj31us4am50.github.io/imgs/feline-bw.jpeg"
            className="iconimg"
          />
        </div>
      </div>
      <div className="container-3 conta p-2 mx-auto">
        <div className="icon3 mx-auto">
          <img
            src="https://imj31us4am50.github.io/imgs/dog-bw.png"
            className="iconimg"
          />
        </div>
      </div>
    </div>
  );
}
