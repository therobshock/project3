import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import logo from "../logo.svg";
import "./Compstyles/Dashbodystyle.css";

const DashBody = () => (



    
        <div class="container">
                 <div class="row">
                    <div class="col-12">
                    <h1>Welcome! (UserName)!</h1>
                    </div>
                 </div>
                
                <div class="row">
                    <div class="col-6">
                    <button type="button" class="btn btn-success btn-lg">Get rid of your shit</button> <br />
                    <button type="button" class="btn btn-primary btn-lg">Talk about your shit</button>
                    </div>
                    <div class="col-6">
                    <div id="randomGif"></div>
                    <div id="randomQuote"></div>
                    </div>
                </div>
              
        </div>
    
                
);
 



export default DashBody;