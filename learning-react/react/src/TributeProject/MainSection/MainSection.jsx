import InfoSection from "./InfoSection/InfoSection.jsx";
import ImageSection from "./ImageSection.jsx";

function MainSection() {
  return (
    <div className="flex gap-x-4">
      <ImageSection />
      <InfoSection />
    </div>
  );
}
export default MainSection;
