import React from "react";
import gif from "./../img/aaa.gif";
function intro() {
  return (
    <section id="section-intro" className="fitscreen seen loaded">
      <div className="container">
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
      <a href="#" className="next-screen a-input scrollto">
        <span className="in">Scroll</span>
      </a>
      <div className="pagination">
        <div className="current">
          <font>
            <font style={{color:"#2F6170"}}>01</font>
          </font>
        </div>
        <div className="totals">
          <font>
            <font style={{color:"#2F6170",opacity:"0.6"}} >08</font>
          </font>
        </div>
      </div>
    </section>
  );
}

export default intro;
