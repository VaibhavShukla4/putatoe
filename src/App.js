import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import HumburgerMenu from "./components/HumburgerMenu";
import Service from "./components/Service";
import AllServices from "./components/AllServices";
import FooterOption from "./components/FooterOption";

function App() {
  const [humburgeMenuShow, setHumburgeMenuShow] = useState(false);
  return (
    <div className="App">
      <Header
        setHumburgeMenuShow={setHumburgeMenuShow}
        humburgeMenuShow={humburgeMenuShow}
      />
      <Sidebar />
      {humburgeMenuShow ? <HumburgerMenu /> : ""}
      <Main />
      <Service />
      <AllServices />
      <FooterOption />
      <Footer />
    </div>
  );
}

export default App;
