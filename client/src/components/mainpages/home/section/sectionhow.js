import React from "react";

function sectionhow() {
  return (
    <section id="section-how" className="onscroll fitscreen">
      <div className="layer back">
        <div className="half image fitheight-nextscreen" id="haani"></div>
        {/* <div class="rope sketch" style="opacity: 1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.353896 285.75079"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            id="svg-line3"
          >
            <g id="layer-line3" transform="translate(-59.570075,-11.250221)">
              <path
                d="m 67.704466,11.250221 c 0,7.802563 -0.0677,41.833602 -0.0709,112.334479 0,3.13002 -1.45838,6.08541 -3.9452,7.99041 -5.04746,3.86557 -5.05037,10.19705 -0.007,14.0679 l 2.84506,2.18281 2.83845,2.17752 c 5.04243,3.87086 5.04243,10.19969 0,14.07054 l -2.83845,2.17753 -2.83924,2.18016 c -5.04137,3.86821 -5.04137,10.19969 0,14.0679 l 2.83924,2.18016 2.83845,2.18017 c 5.04243,3.86821 5.04243,10.19969 0,14.0679 -1.04934,0.80698 -1.66661,2.05581 -1.66661,3.37873 -0.0097,142.98409 0.04506,31.50701 0.04881,92.69455"
                id="path-line3"
                style="
                  fill: none;
                  stroke: rgb(226, 9, 83);
                  stroke-width: 0.661458;
                  stroke-dasharray: 315.657, 315.657;
                  stroke-dashoffset: 315.657px;
                "
              ></path>
            </g>

          </svg>
        </div>  */}
      </div>
      <div className="layer fore">
        <div className="centered-thin clear-after">
          <div className="half fitheight right left-pad-10">
            <div className="middle-holder">
              <div className="middle">
                <div className="title">
                  <h3>
                    <font>
                      <font style={{color:"#2E5966"}}>Expertise</font>
                    </font>
                  </h3>
                  <h2>
                    <font>
                      <font style={{color:"#033747"}}>Find out more about our expertise</font>
                    </font>
                    <br />
                  </h2>
                </div>
                <p className="t-regular" style={{color:"#2E5966"}}>
                  Our family-run firm boasts decades of experience and an
                  in-depth expertise in all the seafood products that we offer
                  our customers.
                  <br />
                </p>
                <a
                  href="https://crustac.fr/en/our-expertise/"
                  className="btn-outline blue blue-back-hover white-hover from-left"
                >
                  <span className="in">Find out more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://crustac.fr/en/home/#"
          className="next-screen a-input scrollto"
          data-target="section-sites"
        >
          <span className="in">Next</span>
        </a>
      </div>
      <div className="pagination">
        <div className="current">
          <font>
            <font style={{ color: "#FEFEFE" }}>03</font>
          </font>
        </div>
        <div className="totals">
          <font>
            <font style={{ color: "#FEFEFE", opacity: "0.6" }}>08</font>
          </font>
        </div>
      </div>
    </section>
  );
}

export default sectionhow;
