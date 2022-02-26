import React from 'react'

function News() {
  return (
    <section id='section-news' className='onscroll fitscreen seen'>
      <div className='layer back'>
        <div className='rope sketch' style={{opacity:1}}>

        </div>

      </div>
      <div className='centered-large'>
        <div className='middle-holder'>
          <div className='middle'>
            <div className='title'>
              <h4>News</h4>
              <h2>The latest news from Crush C, fresh in</h2>
              <br></br>
            </div>
            <div className='tiles-container'>
              <div className='tiles carousel three slick-initialized slick-slider slick-dotted'>
                <div className='slick-list draggable' style={{padding: "0px 50px"}}>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pagination">
        <div className="current">
          <font>
            <font style={{color:"#2F6170"}}>06</font>
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

export default News;