import React from 'react'

function site() {
  return (
    <section id="section-sites" className="onscroll fitscreen">
      <div className="layer back">
        <div className="half image fitheight-nextscreen right" id="siteimg"></div>
        {/* <div class="rope sketch" style="opacity: 1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16.353896 285.75079"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            id="svg-line4"
          >
            <g id="layer-line4" transform="translate(-59.570075,-11.250221)">
              <path
                d="m 67.704466,11.250221 c 0,7.802563 -0.0677,41.833602 -0.0709,112.334479 0,3.13002 -1.45838,6.08541 -3.9452,7.99041 -5.04746,3.86557 -5.05037,10.19705 -0.007,14.0679 l 2.84506,2.18281 2.83845,2.17752 c 5.04243,3.87086 5.04243,10.19969 0,14.07054 l -2.83845,2.17753 -2.83924,2.18016 c -5.04137,3.86821 -5.04137,10.19969 0,14.0679 l 2.83924,2.18016 2.83845,2.18017 c 5.04243,3.86821 5.04243,10.19969 0,14.0679 -1.04934,0.80698 -1.66661,2.05581 -1.66661,3.37873 -0.0097,142.98409 0.04506,31.50701 0.04881,92.69455"
                id="path-line4"
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
        </div> */}
      </div>
      <div className="layer fore">
        <div className="centered-thin clear-after">
          <div className="half fitheight right-pad-10">
            <div className="middle-holder">
              <div className="middle">
                <div className="title">
                  <h3 style={{color:"#2E5966"}}>Expertise</h3>
                  <h2 style={{color:"#033747"}}>Find out more about our production sites<br /></h2>
                </div>
                <p className="t-regular" style={{color:"#2E5966"}}>
                  We have four strategically-located, highly-efficient
                  production sites in France which are ideally-sited to cater to
                  the wider European market.<br />
                </p>
                <a
                  href="https://crustac.fr/en/our-production-sites/"
                  className="btn-outline blue blue-back-hover white-hover from-left"
                  ><span className="in">Find out more</span></a
                >
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://crustac.fr/en/home/#"
          className="next-screen a-input scrollto"
          data-target="section-gammes"
          ><span className="in">Next</span></a
        >
      </div>
      <div className="wave wave-home-4 parallax translate hide-mobile">
        <svg
          viewBox="0 0 409 437"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter-wave4)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M167.261 9L60.8244 60.6761L-45.6032 9L-142 55.8085V128.427L-45.3978 81.512L60.7193 133.165L167.171 81.4693L273.963 133.313L380 81.4949V81.3168L379.654 9.23973L273.688 60.6761L167.261 9Z"
              fill="#E20953"
            ></path>
          </g>
          <g filter="url(#filter-wave4)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M167.261 145.344L60.8244 197.02L-45.6032 145.344L-142 192.152V264.77L-45.3978 217.855L60.7193 269.509L167.171 217.813L273.963 269.657L380 217.838V217.66L379.654 145.583L273.688 197.02L167.261 145.344Z"
              fill="#E20953"
            ></path>
          </g>
          <g filter="url(#filter-wave4)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M167.261 281.687L60.8244 333.363L-45.6032 281.687L-142 328.495V401.113L-45.3978 354.199L60.7193 405.852L167.171 354.156L273.963 406L380 354.182V354.004L379.654 281.927L273.688 333.363L167.261 281.687Z"
              fill="#E20953"
            ></path>
          </g>
          <defs>
            <filter
              id="filter-wave4"
              x="-153"
              y="0"
              width="562"
              height="437"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
              <fecolormatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              ></fecolormatrix>
              <feoffset dx="9" dy="11"></feoffset>
              <fegaussianblur stdDeviation="10"></fegaussianblur>
              <fecolormatrix
                type="matrix"
                values="0 0 0 0 0.00784314 0 0 0 0 0.211765 0 0 0 0 0.27451 0 0 0 0.24 0"
              ></fecolormatrix>
              <feblend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              ></feblend>
              <feblend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              ></feblend>
            </filter>
          </defs>
        </svg>
      </div>
      <div className="pagination">
        <div className="current">
          <font>
            <font style={{color:"#2F6170"}}>04</font>
          </font>
        </div>
        <div className="totals">
          <font>
            <font style={{color:"#2F6170",opacity:"0.6"}} >07</font>
          </font>
        </div>
      </div>
    </section>
  )
}

export default site