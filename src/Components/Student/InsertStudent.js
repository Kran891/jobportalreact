import React from "react";
function InsertStudent() {
    return <div class="container">
    <div class="apply_box">
      <h1>
        Job Application
        <span class="title_small"></span>
      </h1>
      <form action="#">
        <div class="form_container">
          <div class="form_control">
            <label for="first_name"> First Name </label>
            <input
              id="first_name"
              name="first_name"
              placeholder="Enter First Name..."
            />
            <span id="first_name_error" class="error"></span>
          </div>
          <div class="form_control">
            <label for="last_name"> Last Name </label>
            <input
              id="last_name"
              name="last_name"
              placeholder="Enter Last Name..."
            />
            <span id="last_name_error" class="error"></span>
          </div>
          <div class="form_control">
            <label for="email"> Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email..."
            />
            <span id="email_error" class="error"></span>
          </div>
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