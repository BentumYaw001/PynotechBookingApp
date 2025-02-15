import { SpaList, SpaNavItem } from "./Data";

function SpaServices() {
  return (
    <>
      <div className="SpaServices">
        <div className="SpaNav">
          {SpaNavItem.map((item) => {
            return (
              <>
                <p>{item.name}</p>
              </>
            );
          })}
        </div>
        <div>
          <h4>
            Services <span>(12)</span>
          </h4>
          <div>
            {SpaList.map((item) => {
              return (
                <>
                  <div className="ServicesItem">
                    <p>{item.style}</p>
                    <h5>{item.type}</h5>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="BookNow Appointment">Book Appointment</div>
      </div>
    </>
  );
}

export default SpaServices;
