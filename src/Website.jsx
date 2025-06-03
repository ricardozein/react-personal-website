import "./assets/css/Website.scss";
import Header from "./components/Header.jsx";
import Home from "./pages/Home-page.jsx";
import About from "./pages/About-page.jsx";
import Contact from "./pages/Contact-page.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import WebFontLoader from "webfontloader";

WebFontLoader.load({
  google: {
    families: ["Raleway:400,500,700:latin-ext"],
  },
});

function Website() {
  return (
    <HelmetProvider>
      <Router>
        <div className="Website">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default Website;