import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Footer from "./Footer";
// import logo from "../logo.svg";
import "./Compstyles/Dashbodystyle.css";

const DashBody = () => (



    
        <div class="container dashbody">
                 <div class="row blankrow">
                    <div class="col-12">
                    <div id="randomQuote"></div>
                    </div>
                 </div>
                
                <div class="row">
                    <div class="col-lg-6">
                    <h1 className="dashHeader">Welcome! (UserName)!</h1>
                    <h3><a href="/add-shit">Get rid of your shit</a></h3>
                    <p>Are you ready to ditch the crap that's taking over your life? Here you can add items that you're thinking of getting rid of and we'll help you prioritize the one's you should throw away now. </p>
                    <h3><a href="/journal">Talk about your shit</a></h3>
                    <p>Sometimes we develop an unhealthy attachment to material things. Explore the thoughts and feeling that are making you cling to stuff you don't really need. </p>
                    </div>
                    <div class="col-lg-6">
                    <div id="randomGif"></div>
                    
                    </div>
                </div> 
                <div class="row pastEntries">
                    <div class="col-lg-6 shitlist">
                    <h3>The Shit List</h3>
                    <p>Cat Panties<br />
                    Raccoon Parts<br />
                    Fuzzy Dice<br /></p>
                    </div>
                    <div class="col-lg-6">
                    <h3>Shit Talk</h3>
                    <p>WHy is this happening now?<br />
                    Santa Brought me Corndogs<br />
                    Fuzzy Dice, I love you<br /></p>
                    </div>
                </div>
                
                <div id="footer" class="animated bounceInUp bounce">
        
        
        
    </div>
        </div>
    
                
);
 



export default DashBody;