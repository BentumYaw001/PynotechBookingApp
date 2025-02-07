import ProfilePic from "/src/assets/images/specialist/profilepicture.png";
import { useNavigate } from "react-router-dom";

function ProfileEdit() {
  const navigate = useNavigate();
  return (
    <>
      <div className="EditSection">
        <div>Profile</div>

        <img src={ProfilePic} alt="" />
        <h4>Bentum Yaw Richmond</h4>
        <p>@BigBen</p>
        <p></p>
        <div
          className="BookNow"
          onClick={() => navigate("/editProfile-screen")}
        >
          Edit Profile
        </div>
      </div>
    </>
  );
}

export default ProfileEdit;
