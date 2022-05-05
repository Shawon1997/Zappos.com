import "./Home.css"
import { Button } from "./Button"
export const Home=()=>{
    return (<div className='container'>
    
        <div className="font-image">
        <div className="blank-div"></div>
        <div className="font-div">
             <div className="Dresses"><h2>Dresses & Skirts:Spring Style Starts Here</h2></div>
             <div className="find"><p>Find whimsical fits, updated florals, pretty pastels, and electric hues!</p></div>
             <div className="font-button"><p>SHOP DRESSES & SKIRTS</p></div>
         </div>
        </div>
         <div className="shop"><h3>Shop Popular Categories</h3></div>
        <div className="middle_div">
            <div className="middle_img1">
           <div className="middle_img2"><img src="https://m.media-amazon.com/images/G/01/2021/homepage11.01/COOP-NEW-ARRIVAL-LOGO-1X_3.svg"></img></div>
         <div className="middle_img2p"><p style={{fontsize:"large"}}>Have a Mommy & Me moment with UGG®.
          Get matching brights for you and your 
         little—all in comfy, playful styles you can dress up!</p></div>
         <div className="middle_button"><p>Shop New Matching UGG® Styles</p></div>
            </div>
            <div className="middle_img1">
            <img src="https://m.media-amazon.com/images/G/01/2022/homepage5.02/COOP-UGG-NEW-ARRIVALS-DESKTOP-RIGHT-1X-634x634_1.jpg"></img>
            </div>
        </div>
        <div className="get">
            <div className="get_box1">
                <div><h2>Get Outside &amp; Play!</h2></div>
                <div><p>Because nature just hits different when you’ve got the right gear.</p></div>
                <div className="shop_button"><Button><h5 className="shop_buttonp">Shop Our Best in Outdoor Gear</h5></Button></div>
            </div>
            <div className="get_box2">
                <img src="https://m.media-amazon.com/images/G/01/2022/homepage5.02/OUTDOOR-GROUP-AOE-960x500.jpg"></img>
            </div>
        </div>
        <div><h3>Popular Items</h3></div>
        <div className="get">
            <div className="get_box2">
                <img src="https://m.media-amazon.com/images/G/01/2022/the-style-room/FASHION-THE-STYLE-ROOM-COACH-MAY-960x500.jpg"></img>
            </div>
            <div className="get_box1">
                <div><img src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/thestyleroom/The-Style-Room-Logo.svg"></img></div>
                <div><h2>Super Puff with COACH</h2></div>
                <div><p>Featuring the Pillow Tabby handbag and Kellie sandal in the super puffy trend everyone is loving for 2022!</p></div>
                <div className="shop_button"><Button><h5 className="shop_buttonp">Shop COACH</h5></Button></div>
            </div>
        </div>
        <div>
            <img src="https://m.media-amazon.com/images/G/01/zopus2020v/ZAfterpay/Afterpay_Banner_CTA_1440x250.jpg"></img>
        </div>
        <div className="bottom_image">
            <div><img src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2021/homepage/Zappos_ONE_Retina.png"></img>
            <div>
            <h3>Diversity Equity &amp; Inclusion</h3>
            At Zappos, diversity and individuality are central to our core values.
            <h4 style={{marginTop:"4px"}}>Learn More About Zappos ONE Purpose</h4>
            </div>
            </div>
            <div><img src="https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg"></img>
            <div>
            <h3>Zappos for Good</h3>
            Learn how to easily donate or recycle your secondhand items.
            <h4 style={{marginTop:"4px"}}>Explore Zappos for Good</h4>
            </div></div>
            <div> <img src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png"></img>
            <div>
            <h3>Goods for Good</h3>
            We're highlighting brands who are making a difference and helping build a better place for us all.
            <h4 style={{marginTop:"4px"}}>Shop Goods for Good</h4>
            </div></div>
        </div>
    </div>)
}