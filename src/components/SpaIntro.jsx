import StoreImage from "/src/assets/images/specialist/modern-beauty-salon-interior.png";
import LoveImage from "/src/assets/images/Love.svg";
import ShareImage from "/src/assets/images/share.svg";
import BackImage from "/src/assets/images/arrowleft.svg";
import star from "/src/assets/images/star.svg";
import { SpaAddress } from "./Data";
function SpaIntro() {
  return (
    <>
      <div className="SpaIntro">
        <div className="SpaRating">
          <img src={BackImage} alt="" />
          <img src={StoreImage} alt="" />
          <img src={ShareImage} alt="" />
          <img src={LoveImage} alt="" />
          <img src={star} alt="" />
          <p>3.0(1k+ Review)</p>
        </div>
        <h2>Yanks Spa and Salon</h2>
        <p>Haircuts, Makeup, Massage, Shaving</p>
        <div className="SpaLocation">
          <div>
            <img src="" alt="" />
            <p>2222 Kasoa Rd. Mingleton, Accra 56086</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>20 min : 1.0km : Mon Sun | 10am - 10pm</p>
          </div>
          {SpaAddress.map((item) => {
            return (
              <>
                <div>
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SpaIntro;
