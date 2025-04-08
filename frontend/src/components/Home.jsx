import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home({ pop, pop1, pop2, pop3, pop4, todo }) {



  const settings = {
    autoplay: true,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // slidesToShow: 1,
    slidesToScroll: 1
  };



  const settings2 = {
    className: "center",
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 2,
    speed: 500,
    dots: true,
  };


  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <>

      {pop && <div className="p1">

       

       <ul>
       <li>Suv</li>
       <li>Sedan</li>
       <li>Hatchback</li>
       <li>Electric</li>
       <li>ALL</li>
       </ul>




      </div>}





      {pop1 && <div className="p2">

        <ul>
          <li style={{ fontSize: '18px', fontWeight: "bold" ,color:"black" }}>Ready To Buy</li>
          <li>Get Quotation</li>
          <li>Online Booking</li>
          <li>Online Finance</li>
        </ul>

        <ul>
          <li style={{ fontSize: '18px', fontWeight: "bold" ,color:"black" }}>Shopping Assist</li>
          <li>Request a Test Drive</li>
          <li>Download E-Brochure</li>
          <li>Special Offers</li>
          <li>Prices</li>
          <li>Find a Dealer and Website</li>
        </ul>

        <ul>
          <li style={{ fontSize: '18px', fontWeight: "bold" ,color:"black" }}>Used Car</li>
          <li>Hyundai-Promise</li>
        </ul>


      </div>}

      {pop2 && <div className="p3">


        <ul>

          <li>Hyundai Service</li>
          <li>Warranty Policy</li>
          <li>Maintainance</li>
          <li>Road Side Assistance</li>
          <li>Genuine Parts</li>
          <li>Service Calculator</li>
          <li>Important customer Notification</li>
          <li>Navigation Updates</li>
          <li>Services Packages</li>

        </ul>





      </div>}

      {pop3 && <div className="p3">



        <ul>
          <li>Hyundai Motor India</li>
          <li>Media Center</li>
          <li>Bluelink</li>
          <li>CSR</li>
          <li>Apply for Hyundai Dealership</li>
          <li>Coorporate Governance</li>
          <li>Career</li>
          <li>N line Merchandise</li>
          <li>Progress for Humanity</li>
          <li>myHyundai App</li>
          <li>Samarth by Hyundai</li>
          <li>Unveiling Our Journey</li>
          <li>Hy-CNG Duo</li>
          <li>Compatibility Results</li>
          <li>Hyundai Evolvers</li>
          <li>Hyundai India 2025 Calendar</li>
          <li>Bihu 2025</li>
          
        </ul>



      </div>}

      {pop4 && <div className="p5">

        <p>Institutional Sales</p>


      </div>}







      <div className="b">
        <Slider {...settings}>

          <div>
            <button id="b1">Know more</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/images/ClicktoBuy/specialoffer/home_aprilspecialoffer_pc1.jpg" alt="" />
          </div>

          <div >
            <button id="b1">Know More</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/images/ClicktoBuy/home_march_pc.jpg" alt="" />
          </div>

          <div>
            <button id="b1">Play Now</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/home/creta-ev-home-banner-pc.jpg" alt="" />
          </div>

          <div>
            <button id="b1">Know More</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/ioniq/ioniqbannerpcfeb.jpg" alt="" />
          </div>

          <div>
            <button id="b2">Know More</button>
            <button id="b1">Test Drive</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/creta-electric/highlights/evcreta-home_orignal-pc.jpg" alt="" />
          </div>

          <div>
            <button id="b1">Know More</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/images/hyundai-story/hyundai-eVolvers/hyundai-evolvers-home-pc-1860x720.jpg" alt="" />
          </div>

          <div>
            <button id="b1">Know More</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Alcazar/Highlights/pc/venueadventurehomepc.jpg" alt="" />
          </div>

          <div>
            <button id="b2">Test Drive</button>
            <button id="b1">Know More</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Alcazar/Highlights/mob/alcazarhomepc1.jpg" alt="" />
          </div>

          <div>
            <button id="b2">Know More</button>
            <button id="b1">click to buy</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Exter/Highlights/knightinnerkvpc.jpg" alt="" />
          </div>

          <div>
            <button id="b1">Know More</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/images/hyundai-story/samrath/home_samarth_pc.jpg" alt="" />
          </div>

          <div>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/ioniq/icotypc01.jpg" alt="" />
          </div>

          <div>
            <button id="b2">Watch Now</button>
            <button id="b1">Know More</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/common/verna-homepage-desktop.jpg" alt="" />
          </div>

          <div>
            <button id="b2">Know More</button>
            <button id="b1">Test Drive</button>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/homepage-creative-pc.jpg" alt="" />
          </div>

        </Slider>

      </div>



      <div style={{ paddingTop: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Hyundai Cars</h1>


        <div className="slider1">
          <Slider {...settings2} className="f2">


            {todo.map((item) => <>
              <img src={item.a} width={"600px"} />

              <ul>
                <li><th>Starting at</th>
                  <td>{item.pr}</td>
                  <td>*Ex Showroom Price</td></li>

                <li><th>Engine</th>
                  <td>{item.gd}</td>
                  <td>{item.mp}</td>
                  <td>{item.cd}</td></li>

                <li><th>Transmission available</th>
                  <td>{item.ct}</td>
                  <td>{item.vt}</td></li>
              </ul>
            </>
            )}



          </Slider>
        </div>

      </div>


      <div className="f3">


        <ul>
          <li><button>Request a Test Drive</button></li>
          <li><button>Download E-Brochure</button></li>
          <li><button>Click To Buy</button></li>
          <li><button>Prices</button></li>
        </ul>


      </div>


      <div className="f4">


        <h5>WHAT'S NEW</h5>
        <h2>See what’s happening</h2>

      </div>

      <div className="f5">


        <ul>

          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/creta-electric/highlights/cretaevhomepage_1.jpg" alt="" width={"270px"} /><br />
            <span style={{ fontSize: "9px", fontFamily: "sans-serif", color: " rgb(3, 3, 107)", letterSpacing: "0.1em", fontWeight: "bold" }}>BRAND</span>
            <p>Hyundai Creta Electric</p>
          </li>

          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/Proposed-homepage/samarth_homepage.jpg" alt="" width={"270px"} /><br />
            <span style={{ fontSize: "9px", fontFamily: "sans-serif", color: " rgb(3, 3, 107)", letterSpacing: "0.1em", fontWeight: "bold" }}>BRAND</span>
            <p>Samarth by Hyundai</p>
          </li>

          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/images/hyundai-story/our-journey/unveiling.jpg" alt="" width={"270px"} /><br />
            <span style={{ fontSize: "9px", fontFamily: "sans-serif", color: " rgb(3, 3, 107)", letterSpacing: "0.1em", fontWeight: "bold" }}>BRAND</span>
            <p>Empowering India:</p>
            <p>Hyundai’s Journey of Excellence</p>
          </li>

        </ul>

      </div>



      <div className="f6">

        <Slider {...settings3}>

          <div>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/connect-to-service/service-section-second-banner-pc.jpg" alt="" />
          </div>
          <div>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/connect-to-service/service-section-third-banner-pc.jpg" alt="" />
          </div>
          <div>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/connect-to-service/second-image-main-inner-kv-pc.jpg" alt="" />
          </div>
          <div>
            <img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/connect-to-service/service-sective-first-banner-pc.jpg" alt="" />
          </div>

        </Slider>


      </div>


      <button id="bt1">Know More</button>

      <div className="f4" id="f4">

        <h5>SOCIAL</h5>
        <h1>Check out what's trending</h1>


      </div>

      <div className="f7">


        <ul>
          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/Instagram/social/worldrecord.jpg" alt="" /></li>
          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/Instagram/social/cretaelectriclaunchsocial.jpg" alt="" /></li>
          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/Instagram/social/nitinsocial.jpg" alt="" /></li>
        </ul>

        <ul>
          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/Instagram/social/evolverssocial.jpg" alt="" /></li>
          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/Instagram/social/greatindiadrive.jpg" alt="" /></li>
          <li><img src="https://www.hyundai.com/content/dam/hyundai/in/en/data/Instagram/social/jalosh1social.jpg" alt="" /></li>
        </ul>


      </div>


      <div className="im">

        <h2>News</h2>


        <div className="f6">

          <Slider {...settings3}>


            <div className="im1">

              <ul>

                <li style={{ fontSize: "14px", fontFamily: "sans-serif", color: "gray", position: "relative", top: "-20px" }}>India News <span style={{ color: "gray", fontSize: "10px" }}>|</span> 2025.04.01</li>

                <li><p style={{ fontWeight: "bold", }}>Hyundai Motor India Limited continues its rein <br /> as the second largest Passenger Vehicle OEM <br /> in India in FY 24-25 Hyundai CRETA is <br /> Indiaâ€™s No. 1 SUV in Jan-Mar quarter of FY <br /> 24-25 with 52,898 units</p></li><br />


                <button id="btn">Learn More</button>

              </ul>
            </div>




            <div className="im1">

              <ul>

                <li style={{ fontSize: "14px", fontFamily: "sans-serif", color: "gray", position: "relative", top: "-20px" }}>India News <span style={{ color: "gray", fontSize: "10px" }}>|</span> 2025.04.01</li>

                <li><p style={{ fontWeight: "bold", }}>Rev Up with INSTEROID: Hyundai Motorâ€™s <br /> Gaming-Inspired Concept Car Debuts in Seoul

                </p></li><br />


                <button id="btn">Learn More</button>

              </ul>
            </div>




            <div className="im1">

              <ul>

                <li style={{ fontSize: "14px", fontFamily: "sans-serif", color: "gray", position: "relative", top: "-20px" }}>India News <span style={{ color: "gray", fontSize: "10px" }}>|</span> 2025.03.28</li>

                <li><p style={{ fontWeight: "bold", }}>Hyundai Motor Group Launches â€˜Pleosâ€™ <br /> Software Brand, Unveiling New SDV <br /> Technologies and Collaborations</p></li><br />


                <button id="btn">Learn More</button>

              </ul>
            </div>



            <div className="im1">

              <ul>

                <li style={{ fontSize: "14px", fontFamily: "sans-serif", color: "gray", position: "relative", top: "-20px" }}>India News <span style={{ color: "gray", fontSize: "10px" }}>|</span> 2025.03.28</li>

                <li><p style={{ fontWeight: "bold", }}>Hyundai Motor India Debuts in NIFTY Next 50, <br /> NIFTY 100, NIFTY 500, S&amp;P BSE 500</p></li><br />


                <button id="btn">Learn More</button>

              </ul>
            </div>




            <div className="im1">

              <ul>

                <li style={{ fontSize: "14px", fontFamily: "sans-serif", color: "gray", position: "relative", top: "-20px" }}>India News <span style={{ color: "gray", fontSize: "10px" }}>|</span> 2025.03.25</li>

                <li><p style={{ fontWeight: "bold", }}>Ready to Play? Hyundai Motor Teases <br /> INSTEROID, A Sporty Gaming-Inspired EV <br /> Design Fantasy</p></li><br />


                <button id="btn">Learn More</button>

              </ul>
            </div>



          </Slider>


        </div>


      </div>


    </>
  )
}
export default Home