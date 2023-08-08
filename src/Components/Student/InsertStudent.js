import React, { useState } from "react";
import './InsertStudent.css';

function InsertStudent() {
  const [skillSet, setSkillSet] = useState([]);
  const [preferredLocations, setPreferredLocations] = useState([]);
  const [studentData, setStudentData] = useState({
    StudentId: localStorage.userId,
    studentskills: skillSet,
    ResumeFile: null,
    skill: "",
    address:"",
    pincode:"",
    city:"",
    Address:"",
    preferredLocation: "",
    preferredLocations:preferredLocations
  });

  function addSkill(event) {
    const value = studentData.skill;
    setSkillSet(prevValues => [...prevValues, value]);
  }

  function addLocation(event) {
    const value = studentData.preferredLocation;
    setPreferredLocations(prevValues => [...prevValues, value]);
  }

  function handleChange(event) {
    const { name, files, value } = event.target;
    if (name === "ResumeFile") {
     
      // Handle file input separately
      setStudentData(prevValues => ({
        ...prevValues,
        [name]: files ? files[0] : null
      }));
    } else {
      // Handle other input elements
      setStudentData(prevValues => ({
        ...prevValues,
        [name]: value
      }));
    }
  }

  function removeSkill(event) {
    const { value } = event.target;
    setSkillSet(prevValues => prevValues.filter(x => x !== value));
  }
  function handleSubmit(event){
    event.preventDefault();
    studentData.Address=studentData.address+","+studentData.city+"-"+studentData.pincode;
    studentData.studentskills=skillSet;
    studentData.preferredLocations=preferredLocations;
    studentData.StudentId=localStorage.userId;
    console.log(studentData);
  }
  return (
    <div className="container">
      <div className="apply_box">
        <h1>
          Job Application
          <span className="title_small"></span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <div className="form_control">
              <label htmlFor="skills"> Skill Set </label>
              <input
                type="text"
                id="skills"
                name="skill"
                value={studentData.skill}
                onChange={handleChange}
                placeholder="Enter Skill Set..."
              />
              <div className="button_container">
                <button type="button" onClick={addSkill}>Add Skill</button>
              </div>
              <label htmlFor="skillsarray"> Skills </label>
              <ul>
                {skillSet.map(ele => (
                  <li key={ele} onClick={removeSkill}>
                    {ele}
                  </li>
                ))}
              </ul>
              <span id="skills_error" className="error"></span>
            </div>
            <div className="form_control">
              <label htmlFor="preferredLocation"> Preferred Location </label>
              <input
                type="text"
                id="preferredLocation"
                name="preferredLocation"
                value={studentData.preferredLocation}
                onChange={handleChange}
                placeholder="Enter Preferred Location..."
              />
              <div className="button_container">
                <button type="button" onClick={addLocation}>Add Location</button>
              </div>
              <label htmlFor="locationsArray"> Preferred Locations </label>
              <ul>
                {preferredLocations.map(location => (
                  <li key={location}>{location}</li>
                ))}
              </ul>
            </div>
            <div className="textarea_control">
              <label htmlFor="address"> Address </label>
              <textarea
                id="address"
                name="address"
                rows="4"
                cols="50"
                onChange={handleChange}
                placeholder="Enter Address"
              ></textarea>
              <span id="address_error" className="error"></span>
            </div>
            <div className="form_control">
              <label htmlFor="city"> City </label>
              <input
                id="city"
                name="city"
                onChange={handleChange}
                placeholder="Enter City Name..."
              />
              <span id="city_error" className="error"></span>
            </div>
            <div className="form_control">
              <label htmlFor="pincode"> Pincode </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                onChange={handleChange}
                placeholder="Enter Pincode..."
              />
              <span id="pincode_error" className="error"></span>
            </div>
            <div className="form_control">
              <label htmlFor="upload"> Upload Your CV </label>
              <input
                type="file"
                id="upload"
                name="ResumeFile"
                onInput={handleChange}
              />
            </div>
          </div>
          <div className="button_container">
            <button type="submit">Apply Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InsertStudent;
