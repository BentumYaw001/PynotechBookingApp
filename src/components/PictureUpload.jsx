import { UseProfileStore } from "../page/Store";
import Camera from "/src/assets/images/camera.svg";

function PictureUpload() {
  const { ProfileImage } = UseProfileStore();

  return (
    <>
      <div className="PictureUpload">
        <p>Edit Profile</p>
        <div className="Upload">
          <div className="ProfilePicture">
            <img src={ProfileImage} alt="" />
          </div>
          <img src={Camera} alt="" className="ProfileCamera" />
        </div>
      </div>
    </>
  );
}

export default PictureUpload;
