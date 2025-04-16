import './App.css';
import { useState } from 'react';
import cover from "./assets/cover.png";
import cart from "./assets/cart.png";
import GalaxyS25 from "./assets/This_Week/GalaxyS25.png";
import GalaxyS24 from "./assets/This_Week/GalaxyS24.png";
import GalaxyA36 from "./assets/This_Week/GalaxyA36.png";
import zfold6 from "./assets/This_Week/zfold6.png";
import Charger from "./assets/This_Week/Charger.png";
import GalaxyS25Ultra from "./assets/Mobile_Poster/GalaxyS25Ultra.png"
import NeoQLED from "./assets/Mobile_Poster/NeoQLED.png";
import Endless from "./assets/Mobile_Poster/Endless.png";
import BeSpoke from "./assets/Mobile_Poster/BeSpoke.png";
import Qled from "./assets/TV/Qled.png";
import one from "./assets/Reommended/one.png";
import two from "./assets/Reommended/two.png";
import three from "./assets/Reommended/three.png";
import four from "./assets/Reommended/four.png";
import women from "./assets/Explore/women.png"
import five from "./assets/Reommended/five.png";
import six from "./assets/Reommended/six.png";
import seven from "./assets/Reommended/seven.png";
import ss from "./assets/ss.png";


function App() 
{
  const arr=[Endless,cover,BeSpoke];
  const [index, setIndex]=useState(1);
  const tv=[NeoQLED,Qled];
  const [tvindex,setTv]=useState(1);

  const [value,setValue]=useState("Light 🌞");

  let t=false;
  
 
  function Left()
  {
    let q=document.querySelector("#cover");
    document.querySelector("#poster1").style.display="none";
    document.querySelector("#poster2").style.display="none";

    if(index==0)
    {
      setIndex((i)=>{
        
        q.style.width="1450px";
       ;
        i=2;
        return i;
      });
      
    }
    else
    {
      setIndex((p)=>{
        p=p-1;
       
        return p;
      })
    }
    if(q)
    {
       q.src=arr[index];
    }
  }

  function Right()
  {
    let q=document.querySelector("#cover");
    document.querySelector("#poster1").style.display="none";
    document.querySelector("#poster2").style.display="none";

    if(index==2)
    {
      setIndex((i)=>{
        i=0;
        q.style.width="1450px";
       
        return i;
      });
      
    }
    else
    {
      setIndex((p)=>p+1)
    }
    if(q)
    {
       q.src=arr[index];
    }
  }

  function firsttv()
  {
    setTv(0);
    
  }
  function secoundtv()
  {
    setTv(1);
  }
  let moved = false;
  function dragl() {
    const inside = document.querySelector(".inside");
    if (!moved) {
      inside.style.transform = "translateX(-30%)";
      moved = true;
    } else {
      inside.style.transform = "translateX(0%)";
      moved = false;
    }
    inside.style.transition = "transform ease 1.5s";
  }
  
  function dragr() {
    const inside = document.querySelector(".inside");
    if (!moved) {
      inside.style.transform = "translateX(30%)";
      moved = true;
    } else {
      inside.style.transform = "translateX(0%)";
      moved = false;
    }
    inside.style.transition = "transform ease 1.5s";
  }

  function mod()
  {
    if(value=="Light 🌞")
    {
      setValue((p)=>{
        p="Dark 🌙";
        document.querySelector("body").style.backgroundColor="rgba(79, 79, 82, 0.79)";
        document.querySelector("body").style.filter="brightness(0.8)";
        return p;});
  }
    else
    {
      setValue((p)=>{
        p="Light 🌞";

        document.querySelector("body").style.backgroundColor="white";
    
        return p;})
    }
    
  }
  return(<>
      <Navup v={value} mod={mod}></Navup>
  <section>
      <Top arr={arr} index={index} Left={Left} Right={Right}></Top>
  </section>
  <section>
    <h1 id="poster1">Experience a new Era of Samsung Gadegts</h1>
    <h1 id="poster2">Samsung AI TV , Gaming Concoles and much more</h1>
    <button className="buy" style={{position: "relative", bottom: "200px", right:"900px", height: "45px", backgroundColor:"white" , color: "black", borderRadius: "40px" ,width: "155px", border: "none", fontSize: "20px"}}>Buy Now</button>
  </section>
  <section>
    <ThisWeek></ThisWeek>
  </section>
  <section>
    <MobilePoster></MobilePoster>
  </section>
  <section>
    <TV firsttv={firsttv} secoundtv={secoundtv} tv={tv} tvindex={tvindex}></TV>
  </section>
  <section>
    <Recomended dragr={dragr} dragl={dragl}></Recomended>
  </section>
  <section>
    <Explore></Explore>
  </section>
  <section style={{display: "flex", flexDirection: "column"}}>
    <Looking></Looking>
  </section>
  <section>
    <Foot></Foot>
  </section>
  <section>
  <div className='note'>
        <p>Copyright ⓒ 1995-2025 SAMSUNG All Rights reserved.</p>
        <p>Please dispose of e-waste and plastic waste responsibly.
        For more information or e-waste pick up, please call 1800 5 7267864 or click here for more details.</p>
        <p>Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001
        Corporate Identification Number (CIN): U31900DL1995PTC071387</p>
      </div>
     
  </section>
  <hr></hr>
  <section>
    <img src={ss} style={{height: "61px", width: "62%"}}/>
  </section>
  </>)
}
function Navup({v,mod})
{
 return(<>
  <nav>
    <div className="nav">
      <div className="leftnav">
        <h2 style={{position: "relative", bottom: "4px"}}>SAMSUNG</h2>
        <span>  </span>
        <h4>Shop</h4>
        <h4>Mobile</h4>
        <h4>TV & AV</h4>
        <h4>Appliances</h4>
        <h4>Computing & Displays</h4>
        <h4>Accessories</h4>
        <h4>Smart Things</h4>
      </div>
      <div className="rightnav">
        <input type="text" className="search" placeholder='🔍 Search' />
        <img src={cart} style={{}} />
        <button style={{border: "none" , boxShadow: "10px 5px 20px white", backgroundColor: "transparent"}} onClick={mod}>Mode: {v}</button>
      </div>
    </div>
  </nav>
  </>)
}

function Top({Left,arr,index,Right})
{
  return(<>
  <div className="coverimage">
  <button id="controlTop" onClick={Left}>(</button>
    
    <img id="cover" src={arr[index]} />
  
  <button id="controlTop" onClick={Right}>)</button>

  </div>
  

  </>);

}

function ThisWeek()
{
  return (<>
    <div className="thisweek">
      <h1 style={{fontSize: "2.3em"}}>This Weeks Higlights</h1>
      <div className="writting">
        <h3>NewIn</h3>
        <h3>Mobile</h3>
        <h3>TV</h3>
        <h3>Applications</h3>
        <h3>ECO SYstem</h3>
        <h3>Samsung LIve</h3>
       </div>
       <div className="picthisweek">
        <div className="leftpicthisweek">
          <div className="imageleftpicthisweek">
          <img src={GalaxyS25}></img>
          </div>
          <div className='textleftpicthisweek'>
            <h1>GalaxyS25 Ultra</h1>
            <p>Starting at ₹117999*</p>
            <p>Avail at ₹6000* instant cart discount</p>
          </div>
        </div>
        <div className="rightpicthisweek">
          <div className="imagerigthpicthisweek">
             <img src={GalaxyS24} />
             <h1>GalaxyS24 at ₹54000</h1>
          </div>
          <div className="imagerigthpicthisweek">
              <img src={GalaxyA36} alt="" />
              <h1>GalaxyS24 at 54000</h1>

          </div>
          <div className="imagerigthpicthisweek" style={{position: "relative", bottom: "75px"}}>
              <img src={zfold6} alt="" />
              <h1>GalaxyS24 at 54000</h1>

          </div>
          <div className="imagerigthpicthisweek"  style={{position: "relative", bottom: "75px"}}>
              <img src={Charger} alt="" />
              <h1>GalaxyS24 at 54000</h1>

          </div>
        </div>
       </div>
    </div>
  </>);
}

function MobilePoster()
{
  return (<>
  <div className="moblieposter">
     <h1 style={{fontSize: "2.3em"}}>Mobile</h1>
      <div className="writting1">
        <h3>Galaxy S25 Ultra</h3>
        <h3>Galaxy S25 | S25+ </h3>
        <h3>Galaxy S25 Series </h3>
        <h3>Galaxy Tab S10 Series </h3>
        <h3>Galaxy Watch Ultra </h3>
       </div>
       <img id="idiot" src={GalaxyS25Ultra} />
  </div>
  
  </>);
}

function TV({firsttv,secoundtv,tv,tvindex})
{
  return (<>
    <div className="tv">
       <h1 style={{fontSize: "2.3em"}}>TV  & AV</h1>
        <div className="writting2">
          <h3 onClick={firsttv}>New QLED 8K</h3>
          <h3 onClick={secoundtv}>OLED</h3>
          <h3>Monitor</h3>
          <h3>The Frame</h3>
          <h3>Crystal 4K</h3>
         </div>
         <img id="final" src={tv[tvindex]} />
    </div></>);
}

function Looking()
{
  return (<>
    <div className="upper">
      <h1 style={{fontSize: "40px"}}>looking for Something Else?</h1>
      <input type="text" className="looking" placeholder='Search Keyword..'/>
    </div>
    <div className="lower">
  <ul>
    <li>*Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</li>
    <li>*Image simulated. Samsung account login may be required for certain AI features.</li>
    <li>*Image simulated. Available colours of Galaxy Buds3 Pro may vary by country or carrier. Galaxy Buds3 Pro supports Galaxy AI features such as interpreter and Live Translate when paired with compatible Samsung Galaxy devices. Availability of Galaxy AI features may vary by device model. See samsung.com for details.</li>
    <li>5G Devices are 5G ready, connectivity dependent on network availability.</li>
    <li>Pen Fold Edition sold separately and is only compatible with Z Fold5, Z Fold4 and Z Fold3. Flex mode supported at angles between 75˚ and 115˚.</li>
    <li>Watch screen image simulated for illustrative purpose. Availability of colours, sizes, models, and watch bands may vary by country or carrier.</li>
    <li>T&C Apply. Cashback at the sole discretion of the issuer / NBFC.</li>
    <li>Offers may be revised or withdrawn without prior notice.</li>
    <li>Select offers are also available separately.</li>
  </ul>
</div>

  </>);
}

function Recomended({dragl,dragr})
{
  return (<>
  <div className="recomended">
 
    <div className="inside">
      <div className="cart">
        <img src={one}/>
        <h3>Galaxy S25 Ultra (Special COlour)</h3>
        <p><b>Colour:</b> Titanium Jetblack</p>
        <p>MRP (Inclusive of all taxes)</p>
        <h3>₹129999.00</h3>
        <button className="buy">Buy Now</button>
      </div>
      <div className="cart">
       <img src={two}/>
       <h3>Galaxy S25 Ultra</h3>
       <p><b>Colour:</b> Titanium Silver</p>
       <p>MRP (Inclusive of all taxes)</p>

        <h3>₹123999.00</h3>
        <button className="buy" style={{position: "relative", top:"19px"}}>Buy Now</button>

      </div>
      <div className="cart">
       <img src={three}/>
       <h3>1.63m (65) Neo QlED 4k Smart Ai TV</h3>
       <p><b>Colour:</b> Black / Silver</p>
       <p>MRP (Inclusive of all taxes)</p>

        <h3>₹204999.00</h3>
        <button className="buy">Buy Now</button>

      </div>
      <div className="cart">
       <img src={four}/>
       <h3>2.14m (85)  QlED 4k Smart Ai TV 2024</h3>
       <p><b>Colour:</b> Black / Silver</p>
       <p>MRP (Inclusive of all taxes)</p>
       <h3>₹449990.00</h3>
       <button className="buy">Buy Now</button>

      </div>
      <div className="cart">
       <img src={five}/>
       <h3>Galaxy M35 5G</h3>
       <p><b>Colour:</b> Light Blue</p>
       <p>MRP (Inclusive of all taxes)</p>
        <h3>₹16999.00</h3>
        <button className="buy" style={{position: "relative", top:"17px"}}>Buy Now</button>

      </div>
      <div className="cart">
       <img src={six}/>
       <h3>Galaxy Taba S9 FE (WIFI 6GB Memory)</h3>
       <p><b>Colour:</b> Grey</p>
       <p>MRP (Inclusive of all taxes)</p>
        <h3>₹29999.00</h3>
        <button className="buy" style={{position: "relative", top:"1px"}}>Buy Now</button>

      </div>
      <div className="cart">
       <img src={seven}/>
       <h3>Inverter Split AC (4.40 KW 3 Start)</h3>
       <p><b>Colour:</b> Grey</p>
       <p>MRP (Inclusive of all taxes)</p>
        <h3>₹37490.00</h3>
        <button className="buy">Buy Now</button>

      </div>
      <div className="cart">
       <img src={four}/>
       <h3>QLED 45 inch TV</h3>
       <p><b>Colour:</b> Grey</p>
       <p>MRP (Inclusive of all taxes)</p>
        <h3>₹47490.00</h3>
        <button className="buy" style={{position: "relative", top:"15px"}}>Buy Now</button>

      </div>
    </div>
    <button id="recomleft" onClick={dragl} >(</button>
    <button id="recomright" onClick={dragr}>)</button>
  </div>
   
  </>);
}

function Explore()
{
  return (<>
  <div className='Explore'>
    <h1 style={{fontSize: "40px"}}>Explore #DoWhatYOuCant</h1>
    <br></br>
    <div className="insideexplore">
      <div className="insideexplorepic">
        <img src={women}/>
      </div>
      <div className="insideexplorewritting">
        <h1><span></span>1) Let Our Product Light You Up</h1>
        <br></br>
        <h1>2) Empowering a Better You</h1>
        <br></br>
        <h1>3) Discover How Our AI Works</h1>
        <br></br>
        <h1>1) Tips For Navigating Big Lives</h1>

      </div>
    </div>
  </div>
  </>)
}

function Foot()
{
  return (
    <>
      <div className="foot">
        <div className="insidefoot">
          <h2>Product & Service</h2>
          <p>Smartphones</p>
          <p>Tablets</p>
          <p>Audio Sound</p>
          <p>Watches</p>
          <p>Smart Switch</p>
          <p>Mobile Accessories</p>
          <p>TVs</p>
          <p>Sound Devices</p>
          <p>Refrigerators</p>
          <p>Laundry</p>
          <p>Air Solutions</p>
          <p>Cooking Appliances</p>
          <p>Monitors</p>
          <p>Memory Storage</p>
        </div>
  
        <div className="insidefoot">
          <h2>Shop</h2>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Welcome Voucher</p>
          <p>Samsung Referral Advantage</p>
          <p>Samsung Student Advantage</p>
          <p>Defence Purchase Program</p>
          <p>Corporate Employee Program</p>
          <p>Corporate Bulk Purchase</p>
          <p>Samsung Experience Store</p>
          <p>Store Locator</p>
          <p>Smart Club</p>
          <p>Terms of Use</p>
          <p>Order Grievance Redressal</p>
          <p>Explore</p>
        </div>
  
        <div className="insidefoot">
          <h2>Support</h2>
          <p>WhatsApp Us</p>
          <p>Sign Language</p>
          <p>Email Us</p>
          <p>Call Us</p>
          <p>Email the CEO</p>
          <p>Community</p>
          <p>Product Registration</p>
          <p>Track Repair</p>
          <p>Service Centre</p>
          <p>Share Your Opinion</p>
          <p>Chat with us</p>
        </div>
  
        <div className="insidefoot">
          <h2>Account & Community</h2>
          <p>My Page</p>
          <p>My Products</p>
          <p>Orders</p>
          <p>Wishlist</p>
          <p>Vouchers</p>
          <p>My Referrals</p>
          <p>Service</p>
          <p>Community</p>
        </div>
  
        <div className="insidefoot">
          <h2>Sustainability</h2>
          <p>Environment</p>
          <p>Security & Privacy</p>
          <p>Accessibility</p>
          <p>Diversity · Equity · Inclusion</p>
          <p>Corporate Citizenship</p>
          <p>Corporate Sustainability</p>
          <h2>About Us</h2>
          <p>Company Info</p>
          <p>Business Area</p>
          <p>Brand Identity</p>
          <p>Careers</p>
          <p>Investor Relations</p>
          <p>Newsroom</p>
          <p>Ethics</p>
          <p>Samsung Design</p>
        </div>
      </div>
     
    </>
  );
}  
export default App;
