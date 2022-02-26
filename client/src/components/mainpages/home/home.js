import React, { Component } from "react";

import Intro from "../home/section/intro";
// import Svg, { Use, Image } from "react-native-svg";
// import FE_product from "./home/FEproduct";
// import AboutHR from "./home/AboutHR";
// import Purpose from "./home/Purpose";
// import BlogHR from "./home/BlogHR";
// import Footer from "../../footer/Footer"
import Section from "../home/section/secti";
import SectionHow from "../home/section/sectionhow";
import Site from "../home/section/site";
import Games from "../home/section/game";
import News from "./section/news";
import Contact from "./section/contact";

export class Home extends Component {
  render() {
    return (
      <main>
        <Intro />
        <Section />
        <SectionHow />
        <Site />
        <Games />
        <News />
        <Contact />
      </main>
    );
  }
}

export default Home;
