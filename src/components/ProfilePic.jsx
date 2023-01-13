import cbell from "../images/chrisProfilePic.jpg";

function ProfilePic() {
  return (
    <div className="relative mx-auto  mt-20  w-80 h-80 flex rounded-full justify-center align-center overflow-hidden md:h-96 md:w-96">
      <img src={cbell} alt="" />
    </div>
  );
}

export default ProfilePic;
