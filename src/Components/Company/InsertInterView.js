import React from "react";
import { useParams } from "react-router-dom";
import './PostJob.css';

function InsertInterview() {
    const {appliedJob}=useParams();
    
    return (
        <div className="schedule-interview-container">
            <h1>Schedule Interview</h1>
            <form>
                <label htmlFor="candidate-name">Candidate Name</label>
                <input 
                    type="text" 
                    id="candidate-name" 
                    name="candidate-name" 
                    required
                />
                <span 
                    id="candidate-name-error" 
                    className="error"
                ></span>

                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company" 
                    name="company" 
                    required
                />
                <span 
                    id="company-error" 
                    className="error"
                ></span>

                <label htmlFor="interview-mode">Interview Mode</label>
                <select 
                    id="interview-mode" 
                    name="interview-mode" 
                    required
                >
                    <option value="" disabled selected className="options-list">Select Interview Mode</option>
                    <option value="in-person">In-Person</option>
                    <option value="virtual">Virtual</option>
                </select>
                <span id="interview-mode-error" className="error"></span>

                <label htmlFor="timing">Timing</label>
                <input 
                    type="time" 
                    id="timing" 
                    name="timing" 
                    required
                />
                <span id="timing-error" className="error"></span>

                <label htmlFor="date">Date</label>
                <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    required
                />
                <span id="date-error" className="error"></span>

                <label htmlFor="position">Position</label>
                <input 
                    type="text" 
                    id="position" 
                    name="position" 
                    required
                />
                <span id="position-error" className="error"></span>

                <label htmlFor="location">
                    <span className="location-icon">&#128205;</span>
                    Location
                </label>
                <input 
                    type="text" 
                    id="location" 
                    name="location"
                />
                <span id="location-error" className="error"></span>

                <button type="submit">Schedule Interview</button>
            </form>
        </div>
    );
} 

export default InsertInterview;