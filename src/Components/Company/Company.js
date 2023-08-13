import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import API from "../API";
import CompanyHeader from "./CompanyHeader";
import { GetAllJobsByCompanyId, GetStudentsAppliedForJob } from "./CompanyServer";
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
    
      await GetStudentsAppliedForJob(jobId,showdata);
    }
    async function deletejob(jobId){
        
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
                    <p><button onClick={()=>{deletejob(ele.jobId)}}>Delete Job</button></p>
                    </div>
                    <div>
                    </div>
                </div>

            })}
            {div2 && !!showdata && showdata.map(ele => {
                return <div className="show-grid-card">
                    <h3>{ele.title}</h3>
                    
                    <p>Skills:{ele.studentskills.join()}</p>
                    <div className="show-icons-flex">
                    <p><FontAwesomeIcon icon="fa-solid fa-location-pin" />{ele.email}</p>
                    <p><FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" />{ele.phoneNumber}</p>
                    </div>
                    <div className="show-icons-flex">
                    <a href={`${API}/student/resume/${ele.resume}`} className="btn btn-primary" download></a>
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