import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FooterBar from "./Components/FooterBar";
import MainArea from "./Components/MainArea";
import Navibar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navibar />
      <MainArea />
      <FooterBar />
    </>
  );
}

export default App;
