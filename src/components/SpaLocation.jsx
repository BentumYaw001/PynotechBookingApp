import { SpaAddress } from "./Data";

function SpaLocation() {
  return (
    <>
      <div className="SpaLocation">
        <div>
          <img src="" alt="" />
          <p>2222 Kasoa Rd. Mingleton, Accra 56086</p>
        </div>
        <div>
          <img src="" alt="" />
          <p>20 min | 1.0km | Mon Sun | 10am - 10pm</p>
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
    </>
  );
}

export default SpaLocation;
