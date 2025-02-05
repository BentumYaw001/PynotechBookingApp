import { FooterData } from "./Data";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer>
        {FooterData.map((item, index) => {
          return (
            <>
              <div className="FooterMenu">
                <img
                  src={item.img}
                  alt={item.name}
                  onClick={() => {
                    {
                      {
                        index === 4 ? navigate("/profile-screen") : "";
                      }
                    }
                  }}
                />
                <p>{item.name}</p>
              </div>
            </>
          );
        })}
      </footer>
    </>
  );
}

export default Footer;
