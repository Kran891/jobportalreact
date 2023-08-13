import React, { useEffect, useState } from "react";
import './InsertStudent.css'
import StudentHeader from "./StudentHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { applyJob, GetAppliedJobs, GetInterviewsScheduled, GetJobsByYourSkills } from "./StudentServer";
function Student() {
    const [showdata, setshowdata] = useState([]);
    const [div1,setdiv1]=useState(true);
    const [div2,setdiv2]=useState(false);
    const [div3,setdiv3]=useState(false);
    useEffect(() => {
         const x=async ()=>{
            await GetJobsByYourSkills(localStorage.userId,setshowdata);
         }
         x();
    }, []);
    async function applyjob(jobid){
       applyJob(jobid,localStorage.userId,setshowdata);
    }
    async function handleShowApplied(){
        setdiv1(false);
        setdiv2(true);
        setdiv3(false);
        await GetAppliedJobs(localStorage.userId,setshowdata);
    }
    async function handleShowInterViews(){
        setdiv1(false);
        setdiv2(false);
        setdiv3(true);
        await  GetInterviewsScheduled(localStorage.userId,setshowdata);
    }
    return <div>
        <StudentHeader handleShowApplied={handleShowApplied} handleShowInterViews={handleShowInterViews}  />
        <div className="show-grid-container">
            {div1 && !!showdata && showdata.map(ele => {
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
            {div2 && !!showdata && showdata.map(ele => {
                return <div className="show-grid-card">
                    <h3>{ele.title}</h3>
                    <h2>{ele.companyName}</h2>
                    <p>Skills:{ele.requiredSkills.join()}</p>
                    <div className="show-icons-flex">
                    <p><FontAwesomeIcon icon="fa-solid fa-location-pin" />{ele.locations}</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{ele.salary}</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-person-walking-arrow-right" />{ele.noOfApplicants}</p>
                    </div>
                    <div>
                    </div>
                </div>

            })}
            {!!showdata && div3 && showdata.map(ele => {
                return <div className="show-grid-card">
                    <h3>{ele.title}</h3>
                    <h2>{ele.companyName}</h2>
                    <p>Skills:{ele.requiredSkills.join()}</p>
                    <p>CompanyLocations{ele.companyLocations}</p>
                    <div className="show-icons-flex">
                    <p>Date{ele.interViewDate}</p>
                    <p>Mode{ele.interViewMode}</p>
                    {<p>location{ele.interViewLocation}</p>} 
                    <p></p>
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