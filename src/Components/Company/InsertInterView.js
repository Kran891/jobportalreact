import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './PostJob.css';

function InsertInterview() {
    const {appliedJob}=useParams();
    const [interviewData,setInterviewData]=useState(
        {
            AppliedId:"",
            InterViewMode:"",
            InterViewDate:"",
            InterViewLocation:"",
            IDate:"",
            ITime:""
        }
    );
    function handleChange(event){
        const {name,value}=event.target;
        setInterviewData(prevValues=>{
            return{
                ...prevValues,
                [name]:value
            }
        })
    }
    function handleSubmit(event){
      
    }
    return (
        <div className="schedule-interview-container">
            <h1>Schedule Interview</h1>
            <form onSubmit={handleSubmit}>
                

                

                <label htmlFor="interview-mode">Interview Mode</label>
                <select 
                    id="interview-mode" 
                    name="InterViewMode" 
                    required
                    value={interviewData.InterViewMode}
                >
                    <option value="" disabled defaultValue className="options-list" >Select Interview Mode</option>
                    <option value="Offline">In-Person</option>
                    <option value="Online">Virtual</option>
                </select>
                <span id="interview-mode-error" className="error"></span>

                
                <label htmlFor="date">Date</label>
                <input 
                    type="date" 
                    id="date" 
                    name="IDate"
                    value={interviewData.IDate} 
                    onChange={handleChange}
                    required
                />
                <span id="date-error" className="error"></span>
                <label htmlFor="timing">Timing</label>
                <input 
                    type="time" 
                    id="timing" 
                    name="ITime"
                    value={interviewData.ITime} 
                    onChange={handleChange}
                    required
                />
                <span id="timing-error" className="error"></span>

                
                <label htmlFor="location">
                    <span className="location-icon">&#128205;</span>
                    Location
                </label>
                <input 
                    type="text" 
                    id="location" 
                    name="InterViewLocation"
                    onChange={handleChange}
                    value={interviewData.InterViewLocation}
                />
                <span id="location-error" className="error"></span>

                <button type="submit">Schedule Interview</button>
            </form>
        </div>
    );
} 

export default InsertInterview;