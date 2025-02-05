import yb from "/src/assets/images/yb.png";

function SplashScreen() {
  return (
    <>
      <div className="Splash">
        <img src={yb} alt="" loading="lazy" />
        <h1>EasyBook</h1>
      </div>
    </>
  );
}

export default SplashScreen;
