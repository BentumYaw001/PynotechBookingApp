import { FiveData } from "./Data";

function FiveStar() {
  return (
    <div className="FiveStar">
      {[...Array(5)].map((_) => (
        <img src={FiveData} alt="stars" />
      ))}
    </div>
  );
}

export default FiveStar;
