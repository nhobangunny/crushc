import React from "react";
import gif from "./../img/waves2.gif";
function contact() {
  return (
    <section id="section-contact" className="onscroll fitscreen seen">
      <div className="layer back">
        <div className="v-half bottom"></div>
        {/* <div className="rope sketch" style={{ opacity: 1 }}></div> */}
      </div>

      <div className="container" style={{ transform: "scale(-1,1)" }}>
        <svg width={500} height={500}>
          <defs>
            <linearGradient id="gradient-1">
              <stop offset={0} stopColor="white" stopOpacity={1}></stop>
              <stop offset={1} stopColor="white" stopOpacity={1}></stop>
            </linearGradient>

            <mask id="text-mask-3" x={0} y={0} width={100} height={100}>
              <text x={0} y={492} fontSize="43em" fill="url(#gradient-1)">
                C
              </text>
            </mask>
          </defs>
          <image height={500} width={500} href={gif} id="mask" />
        </svg>
      </div>
      <div className="layer fore">
        <div className="centered-small clear-after">
          <div className="half fitheight">
            <div className="v-half top">
              <div className="stick-bottom right-pad-15">
                <div className="title">
                  <h3 style={{color:"#708E97"}} >Contact</h3>
                  <h2 style={{ color: "#033747"}}>Have you any question?</h2>
                  <br />
                  <h2 style={{ color: "#033747" }}>
                    Or perhaps a business need?
                  </h2>
                  <br />
                </div>
              </div>
            </div>
            <div className="v-half bottom right-pad-15 hide-mobile">
              <p className="t-regular" style={{color:"#2E5966"}}>
                If you would like to contact us, feel free to get in touch here.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="center-holder">
        <a
          href="#"
          className="btn-outline red big blue-back red-back-hover blue-hover from-center"
        >
          <span className="in" style={{color:"red"}}>Contact Us</span>
        </a>
      </div>
      <div
        className="wave wave-home-6 parallax translate hide-mobile"
        style={{transform:"translateY(27.3603%)", opacity: 1}}
      >
        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 300 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter-wave6)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M165.038 9L112.024 34.773L59.0137 9L11 32.3453V68.5629L59.1161 45.1647L111.971 70.9263L164.993 45.1434L218.185 71L271 45.1562V45.0673L270.827 9.11956L218.048 34.773L165.038 9Z"
              fill="#E20953"
            ></path>
          </g>
          <g filter="url(#filter-wave6)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M165.038 77L112.024 102.773L59.0137 77L11 100.345V136.563L59.1161 113.165L111.971 138.926L164.993 113.143L218.185 139L271 113.156V113.067L270.827 77.1196L218.048 102.773L165.038 77Z"
              fill="#E20953"
            ></path>
          </g>
          <defs>
            <filter
              id="filter-wave6"
              x="0"
              y="0"
              width="300"
              height="170"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></feColorMatrix>
              <feOffset dx="9" dy="11"></feOffset>
              <feGaussianBlur stdDeviation="10"></feGaussianBlur>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.00784314 0 0 0 0 0.211765 0 0 0 0 0.27451 0 0 0 0.24 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="pagination">
        <div className="current">
          <font>
            <font style={{color:"#2F6170"}}>07</font>
          </font>
        </div>
        <div className="totals">
          <font>
            <font style={{color:"#2F6170",opacity:"0.6"}} >07</font>
          </font>
        </div>
      </div>
    </section>
  );
}

export default contact;
