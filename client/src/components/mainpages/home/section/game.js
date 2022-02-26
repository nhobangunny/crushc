import React from "react";

function game() {

  return (
    <section id="section-gammes" className="onscroll fitscreen dark dark-bg">
      <div className="layer back"></div>
      <div className="layer mid">
        {/* <div className="rope sketch" style={{ opacity: 1 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448.48401 1080.0042"
            preserveAspectRatio="xMidYMid meet"
            version="1.1"
            id="svg-line5"
            style={{ fill: "none" }}
          >
            <path
              d="m 225.5808,1.25 h -1.24501 v 17.77 c 0,41.1 10.656,110.44 46.135,141.29 22.456,19.52 54.439,35.23 99.531,35.23 73.696,0 81.169,-26.86 75.912,-47.67 -4.101,-16.22 -16.175,-29.11 -31.516,-35.8 -25.451,-11.12 -74.599,-19.87 -142.516,25.71 C 169.33279,206.6 53.825787,194.84 53.825787,194.84 3.4357875,189.44 -1.9752125,166.25 2.4907875,148.1 c 3.996,-16.22 15.9169995,-29.18 31.2049995,-35.93 1.121,-0.5 2.287,-0.99 3.506,-1.47 12.609,-5.01 26.249,-6.93 39.798,-6.13 l 0.482,0.03 c 27.615003,1.69 62.544003,15.11 86.456003,29.02 26.26,15.26 59.537,35.36 78.433,50.86 28.77,23.6 66.397,44.98 112.14,39.82 19.438,-2.2 32.871,-13.04 33.936,-24.34 1.873,-19.93 -19.837,-37.16 -39.644,-40.15 -19.709,-2.98 -50.323,-1.28 -90.203,20.24 -49.834,26.9 -93.891,38.83 -117.235,43.74 -14.829,3.11 -30.184,3.34 -44.923003,-0.2 -11.596,-2.77 -23.923,-7.9 -30.395,-17.36 -7.194,-10.5 -5.076,-19.63 -1.155,-26.13 3.985,-6.6 10.569,-11.18 17.877,-13.65 15.111,-5.1 49.171003,-12.58 86.828003,5.87 49.332,24.19 54.739,39.69 54.739,170.95002 l -0.094,736.73398"
              id="path-line5"
              style={{
                stroke: "rgb(226, 9, 83)",
                strokeWidth: "2.5",
                strokeDasharray: "2774.28, 2774.28",
                strokeDashoffset: "2774.28px",
              }}
            ></path>
          </svg>
        </div> */}
      </div>
      <div className="centered-large">
        <div className="middle-holder">
          <div className="middle">
            <div className="title">
              <h4>Our product ranges</h4>
              <h2>
                Our three product ranges
                <br />
              </h2>
            </div>
            <div className="tiles-container">
              <div className="tiles carousel three slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: "1",
                      width: "1050px",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="tile gamme-00 slick-slide slick-current slick-active"
                      data-slick-index="0"
                      aria-hidden="false"
                      tabIndex="0"
                      style={{ width: 350 }}
                    >
                      <style type="text/css"></style>
                      <a
                        href="https://crustac.fr/en/our-product-ranges/prestige/"
                        className="inner"
                        tabIndex={0}
                      >
                        <div className="middle-holder">
                          <div className="middle">
                            <div className="image">
                              <div className="scaler">
                                <img
                                  className="square"
                                  srcSet="
                                    https://crustac.fr/wp-content/uploads/2020/07/gamme_prestige_resized-768x781.png 768w,
                                    https://crustac.fr/wp-content/uploads/2020/07/gamme_prestige_resized-295x300.png 300w
                                  "
                                  sizes="(min-width: 900px) 15vw, 75vw"
                                  src="./Crusta C - Công ty hàng đầu của Pháp về các sản phẩm thủy sản nhãn hiệu riêng từ năm 1993_files/gamme_prestige_resized-768x781.png"
                                />
                              </div>
                              <div className="g-label">Desiccate</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      className="tile gamme-01 slick-slide slick-active"
                      data-slick-index="1"
                      aria-hidden="false"
                      tabIndex="0"
                      style={{ width: 350 }}
                    >
                      <style type="text/css"></style>
                      <a
                        href="https://crustac.fr/en/our-product-ranges/marinated/"
                        className="inner"
                        tabIndex="0"
                      >
                        <div className="middle-holder">
                          <div className="middle">
                            <div className="image">
                              <div className="scaler">
                                <img
                                  className="square"
                                  srcSet="
                                    https://crustac.fr/wp-content/uploads/2020/07/gamme_elaboree_resized-768x771.png 768w,
                                    https://crustac.fr/wp-content/uploads/2020/07/gamme_elaboree_resized-300x300.png 300w
                                  "
                                  sizes="(min-width: 900px) 15vw, 75vw"
                                  src="./Crusta C - Công ty hàng đầu của Pháp về các sản phẩm thủy sản nhãn hiệu riêng từ năm 1993_files/gamme_elaboree_resized-768x771.png"
                                />
                              </div>
                              <div className="g-label">Marinated</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div
                      className="tile gamme-02 slick-slide slick-active"
                      data-slick-index="2"
                      aria-hidden="false"
                      tabIndex="0"
                      style={{ width: 350 }}
                    >
                      <a
                        href="https://crustac.fr/en/our-product-ranges/tradition/"
                        className="inner"
                        tabIndex="0"
                      >
                        <div className="middle-holder">
                          <div className="middle">
                            <div className="image">
                              <div className="scaler">
                                <img
                                  className="square"
                                  srcSet="
                                    https://crustac.fr/wp-content/uploads/2020/07/gamme_tradition_resized-768x743.png 768w,
                                    https://crustac.fr/wp-content/uploads/2020/07/gamme_tradition_resized-300x290.png 300w
                                  "
                                  sizes="(min-width: 900px) 15vw, 75vw"
                                  src="./Crusta C - Công ty hàng đầu của Pháp về các sản phẩm thủy sản nhãn hiệu riêng từ năm 1993_files/gamme_tradition_resized-768x743.png"
                                />
                              </div>
                              <div className="g-label">Frozen</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center-holder">
              <a
                href="#"
                className="btn-outline red big blue-back red-back-hover blue-hover from-center"
              >
                <span className="in">Find out more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="next-screen a-input scrollto" data-target="section-news" style={{color:"white"}}><span className="in">Next</span></a>
      <div className="pagination">
        <div className="current">
          <font>
            <font style={{color:"#2F6170"}}>05</font>
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

export default game;
