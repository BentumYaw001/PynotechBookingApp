import ScreenTwoImage from "/src/assets/images/screentwo.png";
function ScreenTwo() {
  return (
    <>
      <div className="ScreenOne">
        <div className="Content">
          <img src={ScreenTwoImage} alt="" />
          <h4>Book Anytime, AnyWhere.</h4>
          <div className="Dots">
            <p>.</p>
            <span>.</span> <p>.</p>
          </div>
          <button>Next</button>
        </div>
      </div>
    </>
  );
}

export default ScreenTwo;
