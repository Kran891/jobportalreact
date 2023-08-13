import React from "react";
import { Link } from "react-router-dom";
function CompanyHeader(){
   return( 
   <header>
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <p className="navbar-brand">JOB PORTAL</p>
            </div>
            <ul className="nav navbar-nav navbar-right">

                <li id="home"><Link href="/">HOME</Link></li>
                <li id="about"><button className="">InterViews</button></li>
                <li id="contact"><button className="">CONTACT US</button></li>
            </ul>
        </div>
    </nav>
    </header>);
}
export default CompanyHeader;