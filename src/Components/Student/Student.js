import React, { useEffect, useState } from "react";
import './InsertStudent.css'
import StudentHeader from "./StudentHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { applyJob, GetJobsByYourSkills } from "./StudentServer";
function Student() {
    const [showdata, setshowdata] = useState([]);
    useEffect(() => {
         const x=async ()=>{
            await GetJobsByYourSkills(localStorage.userId,setshowdata);
         }
         x();
    }, []);
    async function applyjob(jobid){
       applyJob(jobid,localStorage.userId,setshowdata);
    }
    return <div>
        <StudentHeader />
        <div className="show-grid-container">
            {!!showdata && showdata.map(ele => {
                return <div className="show-grid-card">
                    <h3>{ele.title}</h3>
                    <h2>{ele.companyName}</h2>
                    <p>Skills:{ele.requiredSkills.join()}</p>
                    <div className="show-icons-flex">
                    <p><FontAwesomeIcon icon="fa-solid fa-location-pin" />{ele.locations}</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{ele.salary}</p>
                    </div>
                    <div className="show-icons-flex">
                    <p><FontAwesomeIcon icon="fa-solid fa-person-walking-arrow-right" />{ele.noOfApplicants}</p>
                    <p><button onClick={()=>{applyjob(ele.jobId)}}>Apply Job</button></p>
                    </div>
                    <div>
                    </div>
                </div>

            })}
        </div>
    </div>;
}
export default Student;