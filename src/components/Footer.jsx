import { FooterData } from "./Data";

function Footer() {
  return (
    <>
      <footer>
        {FooterData.map((item) => {
          return (
            <>
              <div className="FooterMenu">
                <img src={item.img} alt={item.name} />
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
