import salon from "/src/assets/images/download22.svg";
import star from "/src/assets/images/star.svg";

function NearbySalon() {
  return (
    <>
      <div className="Contents">
        <div className="Specialist">
          <p>Nearby Salon</p>
          <span>view all</span>
        </div>

        <div className="Salon">
          <img
            src={salon}
            alt="near by salon"
            className="SalonImg"
            loading="lazy"
          />
          <div>
            <h4>Yanks Spa and Salon</h4>
            <div className="Tag">Kasoa, Greater Accra</div>
            <div className="Bookings">
              <div className="Star">
                <img src={star} alt="star" />
                <h4>3.0</h4>
              </div>
              <div className="BookNow">Book Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NearbySalon;
