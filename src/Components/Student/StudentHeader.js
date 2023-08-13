import React from "react";
import { Link } from "react-router-dom";
function StudentHeader(props) {
    return (<header>
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <p className="navbar-brand">JOB PORTAL</p>
                </div>
                <ul className="nav navbar-nav navbar-right">

                    <li ><Link href="/student">HOME</Link></li>
                    <li> <button onClick={()=>props.handleShowApplied()} className="btn btn-primary button-padding">APPLIED JOBS</button></li>
                    <li><button onClick={()=>props.handleShowInterViews()}  className="btn btn-primary button-padding">INTERVIEWS</button></li>
                </ul>
            </div>
        </nav>

    </header>);
}
export default StudentHeader;