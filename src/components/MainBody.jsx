import { ServicesData } from "./Data";
import offers from "/src/assets/images/offers.svg";

function Mainbody() {
  return (
    <>
      <div className="MainBody">
        <div className="Offers">
          <img src={offers} alt="offers" />
        </div>
        <div className="ServicesMenu">
          {ServicesData.map((item) => {
            return (
              <>
                <div className="ServiceCatalogue">
                  <div className="Services">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <p>{item.name}</p>
                </div>
              </>
            );
          })}
        </div>
        <div className="Content">
          <div className="TopSpecialist">
            <img src="" alt="top specialist" />
            <p></p>
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
