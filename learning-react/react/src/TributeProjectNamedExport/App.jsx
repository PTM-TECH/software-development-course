// Hold everything
import Header from "./Header/Header.jsx";
import MainSection from "./MainSection/MainSection.jsx";
import Footer from "./Footer/Footer.jsx";

function App() {
  return (
    <div className="p-4 w-screen h-screen bg-gray-200 overflow-y-auto">
      <Menu />
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}
export default App;
