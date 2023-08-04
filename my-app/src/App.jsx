import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function AppMobile() {
  return (
    <div className="App">
      <div className="App__wrapeer">
        <Header />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default AppMobile;
