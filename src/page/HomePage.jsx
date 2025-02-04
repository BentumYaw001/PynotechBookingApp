function HomePage() {
  return (
    <>
      <div className="HomePage">
        {/* Nav section */}
        <div className="NavSecttion">
          <div className="location">
            <p>location</p>
            <div>
              <img src="" alt="location" />
              <h5>Kumasi,Ghana</h5>
            </div>
            <img src="" alt="notification" />
          </div>
          <div className="Greatings">
            <h4>Good Afternoon, Bentum</h4>
          </div>
          <div className="Search">
            <img src="" alt="search" />
            <input type="search" name="" id="" />
            <img src="" alt="filter" />
          </div>
        </div>
        {/* Mainbody section */}
        <div className="MainBody">
          <div className="Offers">
            <img src="" alt="offers" />
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
        {/* footer section */}
        <footer>
          <img src="" alt="footer image" />
        </footer>
      </div>
    </>
  );
}

export default HomePage;
