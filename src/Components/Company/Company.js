import React from "react";
import { Link } from 'react-router-dom';
function Company(){
    return (
        <header>
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <p className="navbar-brand">DAILY JOURNAL</p>
                    </div>
                    <ul className="nav navbar-nav navbar-right">

                        <li id="home"><a href="/company">HOME</a></li>
                        <li id="about"><Link to="/company/postjob">Post Job</Link></li>
                        <li id="contact"><a href="/contact">CONTACT US</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Company;