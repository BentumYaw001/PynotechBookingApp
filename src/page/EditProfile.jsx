import PictureUpload from "../components/PictureUpload";
import ProfileDetails from "../components/ProfileDetails";

function EditProfile() {
  return (
    <>
      <div className="ProfileEdit">
        <PictureUpload />
        <ProfileDetails />
      </div>
    </>
  );
}

export default EditProfile;
