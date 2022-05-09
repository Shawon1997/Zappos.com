import "./footer.css";
import img from "../img/f1.png"
import img2 from "../img/f2.png"
import survey from "../img/survey.png"
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <img src={img} alt="" />
        </div>
        <div className="footer2">
          <div className="box1">
            <ul>
              <h3>Explore Zappos</h3>
              <br />
              <li>Brands</li>
              <li>Clothing</li>
              <li>The Style Room</li>
              <li>Eyewear</li>
              <li>New Arrivals</li>
              <li>Outdoor</li>
              <li>Rideshop</li>
              <li>Running</li>
              <li>Jackets</li>
              <li>Leather Jackets</li>
              <li>Rain Jackets</li>
              <li>Shoes</li>
              <li>Watches</li>
              <li>Wedding</li>
              <li>Denim Jackets</li>
              <li>Zappos Adaptive</li>
              <li>Education & Military Program</li>
              <li>Clueless Crocs</li>
              <li>All Departmentss</li>
            </ul>
          </div>
          <div className="box2">
            <ul>
              <h3>Customer Service</h3>
              <br /> <br /> <li>FAQs</li>
              <li>Contact Info</li>
              <li>¿Ayuda en español?</li>
              <li>Shipping And Returns Policy</li>
              <li>About Proposition 65</li>
              <br /> <br /> <h3>Measurement Guide</h3>
              <li>Size Conversion Chart</li>
              <li>Measure Your Bra Size</li>
            </ul>
          </div>
          <div className="box3">
            <ul>
              <h3>About Zappos</h3>
              <br /> <li>About</li>
              <li>Zappos ONE</li>
              <li>Zappos for Good</li>
              <li>Get the Zappos Mobile App</li>
              <li>Amazon Prime Benefits</li>
              <li>Zapoos VIP Benefits</li>
              <li>Powered by Zapoos</li>
              <li>Coupons</li>
              <li>Accessibility Statement</li>
              <li>Accesibility Survey</li>
              <li>Beyond the Box Blog</li>
              <br /> <h3>Reources</h3>
              <li>Associates Program</li>
              <li>Influencer Program</li>
              <li>Jobs</li>
              <li>Press Kit</li>
              <li>Glossary Items</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className="box4">
            <img src={survey} alt="" />
            <div className="smedia">
              <a href="https://www.facebook.com/zappos" target="blank">
                <div className="slogo1">
                  <img
                    src="https://img.icons8.com/ios/2x/facebook--v2.gif"
                    alt=""
                  />
                </div>
              </a>
              <a href="https://www.instagram.com/zappos/" target="blank">
                {" "}
                <div className="slogo2">
                  <img
                    src="https://img.icons8.com/color/2x/instagram-new--v2.gif"
                    alt=""
                  />
                </div>
              </a>
              <a href="https://twitter.com/zappos" target="blank">
                <div className="slogo3">
                  <img
                    src="https://img.icons8.com/color/2x/twitter--v2.gif"
                    alt=""
                  />
                </div>
              </a>
              <a href="https://www.pinterest.com/zappos" target="blank">
                {" "}
                <div className="slogo4">
                  <img
                    src="https://img.icons8.com/ios/2x/pinterest--v5.gif"
                    alt=""
                  />
                </div>
              </a>
              <a href="https://www.youtube.com/user/zappos" target="blank">
                {" "}
                <div className="slogo5">
                  <img
                    src="https://img.icons8.com/color/2x/youtube--v3.gif"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="footer3">
          <img src={img2} alt="" />
        </div>
      </div>
      <img src="../f1.png" alt="" />
    </>
  );
}

export { Footer };
