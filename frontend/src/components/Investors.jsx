import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Investors() {



  const settings4 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
    <>

      <div className="c">



        <p><Link to='/' >Home</Link>  <span style={{ fontSize: "13px", fontFamily: "sans-serif" }}>   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
        </svg>  <u style={{ color: "rgb(3, 3, 107)", fontWeight: "bold" }}>Investors Relations</u></span></p>



        <h1>Our Business</h1>


      </div>



      <div className="c1">

        <div className="na">

          <ul id="na">
            <li>IR Home</li>
            <li>Financial Information</li>
            <li>IR Resources</li>
            <li>Corporate Governance</li>
            <li>Investor Information</li>
            <li>Regulation 46</li>
          </ul>

        </div>

      </div>


      <div className="c2">

        <p><u>Announcements</u></p>

        
          <ul>
            <Slider {...settings4} >





              <li></li>

              <li>2</li>
              <li>3</li>
              <li>4</li>
              {/* <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li> 

               */}




            </Slider>
          </ul>
        

      </div>


    </>
  )
} export default Investors