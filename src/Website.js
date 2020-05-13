import React from "react";
import "./assets/css/Website.scss";
import Header from "./components/Header";
import Home from "./pages/Home-page";
import About from "./pages/About-page";
import Contact from "./pages/Contact-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebFontLoader from "webfontloader";

WebFontLoader.load({
  google: {
    families: ["Raleway:400,500,700:latin-ext"],
  },
});

function Website() {
  return (
    <Router>
      <div className="Website">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          est ab nulla veniam vel sapiente accusantium soluta, magnam nam dicta
          cumque quisquam officiis quo aspernatur cupiditate necessitatibus
          molestiae dolorem earum?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate est ab nulla veniam vel sapiente
          accusantium soluta, magnam nam dicta cumque quisquam officiis quo
          aspernatur cupiditate necessitatibus molestiae dolorem earum?Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est ab
          nulla veniam vel sapiente accusantium soluta, magnam nam dicta cumque
          quisquam officiis quo aspernatur cupiditate necessitatibus molestiae
          dolorem earum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          est ab nulla veniam vel sapiente accusantium soluta, magnam nam dicta
          cumque quisquam officiis quo aspernatur cupiditate necessitatibus
          molestiae dolorem earum?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate est ab nulla veniam vel sapiente
          accusantium soluta, magnam nam dicta cumque quisquam officiis quo
          aspernatur cupiditate necessitatibus molestiae dolorem earum?Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est ab
          nulla veniam vel sapiente accusantium soluta, magnam nam dicta cumque
          quisquam officiis quo aspernatur cupiditate necessitatibus molestiae
          dolorem earum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          est ab nulla veniam vel sapiente accusantium soluta, magnam nam dicta
          cumque quisquam officiis quo aspernatur cupiditate necessitatibus
          molestiae dolorem earum?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate est ab nulla veniam vel sapiente
          accusantium soluta, magnam nam dicta cumque quisquam officiis quo
          aspernatur cupiditate necessitatibus molestiae dolorem earum?Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est ab
          nulla veniam vel sapiente accusantium soluta, magnam nam dicta cumque
          quisquam officiis quo aspernatur cupiditate necessitatibus molestiae
          dolorem earum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          est ab nulla veniam vel sapiente accusantium soluta, magnam nam dicta
          cumque quisquam officiis quo aspernatur cupiditate necessitatibus
          molestiae dolorem earum?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate est ab nulla veniam vel sapiente
          accusantium soluta, magnam nam dicta cumque quisquam officiis quo
          aspernatur cupiditate necessitatibus molestiae dolorem earum?Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est ab
          nulla veniam vel sapiente accusantium soluta, magnam nam dicta cumque
          quisquam officiis quo aspernatur cupiditate necessitatibus molestiae
          dolorem earum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          est ab nulla veniam vel sapiente accusantium soluta, magnam nam dicta
          cumque quisquam officiis quo aspernatur cupiditate necessitatibus
          molestiae dolorem earum?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate est ab nulla veniam vel sapiente
          accusantium soluta, magnam nam dicta cumque quisquam officiis quo
          aspernatur cupiditate necessitatibus molestiae dolorem earum?Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est ab
          nulla veniam vel sapiente accusantium soluta, magnam nam dicta cumque
          quisquam officiis quo aspernatur cupiditate necessitatibus molestiae
          dolorem earum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          est ab nulla veniam vel sapiente accusantium soluta, magnam nam dicta
          cumque quisquam officiis quo aspernatur cupiditate necessitatibus
          molestiae dolorem earum?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate est ab nulla veniam vel sapiente
          accusantium soluta, magnam nam dicta cumque quisquam officiis quo
          aspernatur cupiditate necessitatibus molestiae dolorem earum?Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est ab
          nulla veniam vel sapiente accusantium soluta, magnam nam dicta cumque
          quisquam officiis quo aspernatur cupiditate necessitatibus molestiae
          dolorem earum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          est ab nulla veniam vel sapiente accusantium soluta, magnam nam dicta
          cumque quisquam officiis quo aspernatur cupiditate necessitatibus
          molestiae dolorem earum?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate est ab nulla veniam vel sapiente
          accusantium soluta, magnam nam dicta cumque quisquam officiis quo
          aspernatur cupiditate necessitatibus molestiae dolorem earum?Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est ab
          nulla veniam vel sapiente accusantium soluta, magnam nam dicta cumque
          quisquam officiis quo aspernatur cupiditate necessitatibus molestiae
          dolorem earum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          est ab nulla veniam vel sapiente accusantium soluta, magnam nam dicta
          cumque quisquam officiis quo aspernatur cupiditate necessitatibus
          molestiae dolorem earum?Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Voluptate est ab nulla veniam vel sapiente
          accusantium soluta, magnam nam dicta cumque quisquam officiis quo
          aspernatur cupiditate necessitatibus molestiae dolorem earum?Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Voluptate est ab
          nulla veniam vel sapiente accusantium soluta, magnam nam dicta cumque
          quisquam officiis quo aspernatur cupiditate necessitatibus molestiae
          dolorem earum?
        </p>
      </div>
    </Router>
  );
}

export default Website;
