import offers from "/src/assets/images/offers.svg";

function Mainbody() {
  return (
    <>
      <div className="MainBody">
        <div className="Offers">
          <img src={offers} alt="offers" />
        </div>
        <div className="ServicesMenu">
          <img src="" alt="services" />
        </div>
        <div className="Content">
          <div className="TopSpecialist">
            <img src="" alt="top specialist" />
          </div>
          <div className="NearBySalon">
            <img src="" alt="near by salon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainbody;
