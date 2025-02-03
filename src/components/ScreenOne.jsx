import ScreenOneImage from "/src/assets/images/screenone.png";
function ScreenOne() {
  return (
    <>
      <div className="ScreenOne">
        <div className="Content">
          <img src={ScreenOneImage} alt="" />
          <h4>Discover Beauty Services Near You!</h4>
          <div className="Dots">
            <span>.</span> <p>.</p>
            <p>.</p>
          </div>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}

export default ScreenOne;
