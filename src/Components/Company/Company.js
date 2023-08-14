import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import API from "../API";
import CompanyHeader from "./CompanyHeader";
import { DeleteJob, GetAllJobsByCompanyId, GetSheduledInterViews, GetStudentsAppliedForJob } from "./CompanyServer";
function Company() {
    const [showdata, setshowdata] = useState([]);
    const [div1, setdiv1] = useState(true);
    const [div2, setdiv2] = useState(false);
    const [div3, setdiv3] = useState(false);
    useEffect(() => {
        const x = async () => {
            await GetAllJobsByCompanyId(localStorage.companyId, setshowdata);
        }
        x();
    }, []);
    async function showCandidets(jobId){
      setdiv1(false); 
      setdiv2(true);
      setdiv3(false);
      await GetStudentsAppliedForJob(jobId,showdata);
    }
    async function deletejob(jobId){
        await DeleteJob(jobId,showdata);
    }
    async function showInterview(jobId){
        setdiv1(false); 
        setdiv2(false);
        setdiv3(true);
     await GetSheduledInterViews(jobId,showdata);
    }
    return (
        <div>
        <CompanyHeader />
        <div className="show-grid-container">
        {div1 && !!showdata && showdata.map(ele => {
                return <div className="show-grid-card">
                    <h3>{ele.title}</h3>
                    <p>Skills:{ele.requiredSkills.join()}</p>
                    <div className="show-icons-flex">
                    <p><FontAwesomeIcon icon="fa-solid fa-location-pin" />{ele.locations}</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{ele.salary}</p>
                    </div>
                    <div className="show-icons-flex">
                    <p><FontAwesomeIcon icon="fa-solid fa-person-walking-arrow-right" />{ele.noOfApplicants}</p>
                    {ele.noOfApplicants>0 &&<button onClick={()=>{showCandidets(ele.jobId)}}>Show Candidates</button>}
                    {ele.noOfApplicants>0 &&<button onClick={()=>{showInterview(ele.jobId)}}>InterViews</button>}
                    <p><button onClick={()=>{deletejob(ele.jobId)}}>Delete Job</button></p>
                    </div>
                    <div>
                    </div>
                </div>

            })}
            {div2 && !!showdata && showdata.map(ele => {
                return <div className="show-grid-card">
                    <h3>{ele.fullName}</h3>
                    
                    <p>Skills:{ele.studentskills.join()}</p>
                    <div className="show-icons-flex">
                    <p><FontAwesomeIcon icon="fa-solid fa-location-pin" />{ele.email}</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{ele.phoneNumber}</p>
                    </div>
                    <div className="show-icons-flex">
                    <p><a href={`${API}/student/resume/${ele.resume}`} className="btn btn-primary" download>Resume</a></p>
                    
                    <p><Link to={"/company/insertinterview/"+ele.appliedId} className="btn btn-primary">Schedule Interview</Link></p>
                    </div>
                    <div>
                    </div>
                </div>

            })}
            {!!showdata && div3 && showdata.map(ele => {
                return <div className="show-grid-card">
                    <h3>{ele.fullName}</h3>
                    
                    <p>Skills:{ele.studentskills.join()}</p>
                    <p>CompanyLocations{ele.companyLocations}</p>
                    <div className="show-icons-flex">
                    <p>Date{ele.interViewDate}</p>
                    <p>Mode{ele.interViewMode}</p>
                    {!!ele.interViewLocation &&<p>location{ele.interViewLocation}</p>} 
                    </div>
                    <div className="show-icons-flex">
                    <p><FontAwesomeIcon icon="fa-solid fa-person-walking-arrow-right" />{ele.noOfApplicants}</p>
                    <a href={`${API}/student/resume/${ele.resume}`} className="btn btn-primary" download>Resume</a>
                    </div>
                    <div>
                    </div>
                </div>

            })}
        </div>
        </div>
    );
}
export default Company;