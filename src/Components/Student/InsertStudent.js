import React, { useState } from "react";
import './InsertStudent.css';
function InsertStudent() {
  const [skillSet, setSkillSet]=useState ([]);
  function addSkill(event) {
    
  }
    return <div class="container">
    <div class="apply_box">
      <h1>
        Job Application
        <span class="title_small"></span>
      </h1>
      <form action="#">
        <div class="form_container">
          <div class="form_control">
            <label for="skills"> Skill Set </label>
            <input
              type="text"
              id="skills"
              name="skills"
              placeholder="Enter Skill Set..."
            />
            <span id="skills_error" class="error"></span>
          </div>
          <div class="button_container">
          <button type="button"onclick={addSkill}>Add Skill</button>
        </div>
          <div class="textarea_control">
            <label for="address"> Address </label>
            <textarea
              id="address"
              name="address"
              rows="4"
              cols="50"
              placeholder="Enter Address"
            ></textarea>
            <span id="address_error" class="error"></span>
          </div>
          <div class="form_control">
            <label for="city"> City </label>
            <input
              id="city"
              name="city"
              placeholder="Enter City Name..."
            />
            <span id="city_error" class="error"></span>
          </div>
          <div class="form_control">
            <label for="pincode"> Pincode </label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              placeholder="Enter Pincode..."
            />
            <span id="pincode_error" class="error"></span>
          </div>
          <div class="form_control">
            <label for="date"> Date </label>
            <input
              value="2022-01-10"
              type="date"
              id="date"
              name="date"
            />
            <span id="date_error" class="error"></span>
          </div>
          <div class="form_control">
            <label for="upload"> Upload Your CV </label>
            <input
              type="file"
              id="upload"
              name="upload"
            />
          </div>
        </div>
        <div class="button_container">
          <button type="submit">Apply Now</button>
        </div>
      </form>
    </div>
  </div>
} 
export default InsertStudent;