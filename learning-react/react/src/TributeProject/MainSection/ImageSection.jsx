import profile from "../assets/nelson.jpeg";
function ImageSection() {
  return (
    <div className="self-center">
      <img style={{ width: "800px" }} src={profile} alt="profile" />
    </div>
  );
}
export default ImageSection;
