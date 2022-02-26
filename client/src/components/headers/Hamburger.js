import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./Animations";

import tamky from "./images/tamky.png";
import danang from "./images/demo.jpg";
import hanoi from "./images/hanoi.jpg";
import hochiminh from "./images/hcm.jpg";

const cities = [
  { name: "Tam Ky", image: tamky },
  { name: "Ha Noi", image: hanoi },
  { name: "Ho Chi Minh", image: hochiminh },
  { name: "Da Nang", image: danang },
];

const Hamburger = ({ state, isLogged, isAdmin, cart }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };
  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link
            onMouseEnter={(e) => handleHover(e)}
            onMouseOut={(e) => handleHoverExit(e)}
            ref={(el) => (line1 = el)}
            to="/history"
          >
            History Order
          </Link>
        </li>
        {isAdmin ? (
          ""
        ) : (
          <li>
            <Link
              onMouseEnter={(e) => handleHover(e)}
              onMouseOut={(e) => handleHoverExit(e)}
              ref={(el) => (line1 = el)}
              to="/cart"
            >
              Your Cart:{cart.length}
            </Link>
          </li>
        )}
        <li>
          <Link
            onMouseEnter={(e) => handleHover(e)}
            onMouseOut={(e) => handleHoverExit(e)}
            ref={(el) => (line1 = el)}
            to="/"
            onClick={logoutUser}
          >
            Logout
          </Link>
        </li>
      </>
    );
  };
  const adminRouter = () => {
    return (
      <>
        <li>
          <Link
            onMouseEnter={(e) => handleHover(e)}
            onMouseOut={(e) => handleHoverExit(e)}
            ref={(el) => (line1 = el)}
            to="/admin"
          >
            Admin Page
          </Link>
        </li>
      </>
    );
  };
  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background"
          id="cover"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/our-story"
                    >
                      Corporate identity
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/opportunities"
                    >
                      Our production sites
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/opportunities"
                    >
                      Our product ranges
                    </Link>
                  </li>

                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/solutions"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/contact-us"
                    >
                      Contact us
                    </Link>
                  </li>
                  {isAdmin && adminRouter()}
                  {isLogged ? (
                    loggedRouter()
                  ) : (
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line1 = el)}
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
              <div
                ref={(el) => (info = el)}
                className="info"
                style={{ width: "300px" }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1.2rem",
                    margin: "8px auto",
                  }}
                >
                  Our Promise
                </h3>
                <p
                  style={{
                    color: "#fff",
                    margin: "0 auto",
                    fontSize: "0.8rem",
                  }}
                >
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p>
              </div>
              <div className="locations">
                Locations :{/* Returning the list of cities */}
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
