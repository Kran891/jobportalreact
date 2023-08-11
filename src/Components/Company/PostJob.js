import React, { useState } from 'react';
import { InsertJob } from './CompanyServer';
import './PostJob.css';

function PostJob() {
    const [postjob,setpostjob]=useState({
        CompanyId:"",
        Salary:"",
        Description:"",
        RequiredSkills:"",
        Title:"",
        skill:""
    });
    
    const [skillSet, setSkillSet] = useState([]);
    async function handleSubmit(event) {
        event.preventDefault();
        postjob.CompanyId=localStorage.companyId;
        postjob.RequiredSkills=skillSet;
        // Add your form submission logic here
        await InsertJob(postjob);
    }

    function handleChange(event) {
        const { name, value } = event.target;
          setpostjob(prevValues=>{
           return {...prevValues,
             [name]:value
        }

          })
        }
        function addSkill(event) {
            const value = postjob.skill;
            setSkillSet(prevValues => [...prevValues, value]);
          }
    return (
        <div className="post-job-container">
            <h1>Job Posting</h1>
            <form onSubmit={handleSubmit}>
              
              <label>Job Title</label>
              <input
              type="text"
              name="Title"
              onChange={handleChange}
              value={postjob.Title}
               />
              <label>Salary</label>
              <input 
                type="number"
                name='Salary'
                onChange={handleChange}
                value={postjob.Salary}
              />
              <label>Description</label>
              <textarea 
               rows="4"
               cols="50"
               name='Description'
               onChange={handleChange}
               value={postjob.Description}
              ></textarea>
              <button type="submit">Add Job</button>
            </form>
        </div>
    );
}

export default PostJob;
