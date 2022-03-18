import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" caseSensitive={false} element={<Body />} />
          <Route
            exact
            path="/about"
            caseSensitive={false}
            element={<About />}
          />
          <Route
            exact
            path="/contactus"
            caseSensitive={false}
            element={<ContactUs />}
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
