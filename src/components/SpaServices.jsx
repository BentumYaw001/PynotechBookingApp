import { SpaList } from "./Data";

function SpaServices() {
  return (
    <>
      <div>
        <h3>
          Services <span>(12)</span>
        </h3>
        {SpaList.map((item) => {
          return (
            <>
              <div>
                <p>{item.style}</p>
                <h5>{item.type}</h5>
              </div>
            </>
          );
        })}
      </div>

      <div className="BookNow">Book Appointment</div>
    </>
  );
}

export default SpaServices;
