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
        postjob.CompanyId=localStorage.CompanyId;
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
            <form id="post-job-form" onSubmit={handleSubmit}>
                <label htmlFor="jobTitle">Job Title</label>
                <input
                    type="text"
                    
                    name="Title"
                    value={postjob.Title}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="jobSalary">Job Salary</label>
                <input
                    type="text"
                    
                    name="Salary"
                    value={postjob.Salary}
                    onChange={handleChange}
                    required
                />

                <span id="jobTitle-error" className="error"></span>

                <label htmlFor="description">Description</label>
                <textarea
                    
                    name="Description"
                    value={postjob.Description}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>
                <span id="description-error" className="error"></span>

                <label htmlFor="skillsRequired">Skills Required</label>
                <div className="skills-input-container">
                    <input
                        type="text"
                        
                        name="skill"
                        value={postjob.skill}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={addSkill} className="add-skill-button">Add Skill</button>
                </div>
                <label htmlFor="skillsarray"> Skills </label>
              <ul>
                {skillSet.map(ele => (
                  <li key={ele}>
                    {ele}
                  </li>
                ))}
              </ul>
                <span id="skillsRequired-error" className="error"></span>

                <button type="submit">POST JOB</button>
            </form>
        </div>
    );
}

export default PostJob;
