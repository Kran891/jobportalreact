import React, { useState } from "react";
import '../Home/styles.css';
import { InsertCompanyData } from "./CompanyServer";
function InsertCompany()
 {
    const [CompanyData, setCompanyData] = useState({
        OwnerId: localStorage.userId,
        Name: "",
        Description:"",
        CompanyId:"",
        CompanyLocations: "",
        Location:""
        
      });
    const [CompanyLocations, setLocations] = useState([]
    );

    function addLocations(event) {
        const value = CompanyData.Location;
        setLocations(prevValues => [...prevValues, value]);
}
   function handleChange (event){
    const{name,value}=event.target;
    setCompanyData(prevValues => ({
        ...prevValues,
        [name]: value
      }))

   }

   async function handleSubmit (event){
    event.preventDefault();
     CompanyData.CompanyLocations=CompanyLocations;
     
    console.log(CompanyData);
   
    await InsertCompanyData(CompanyData);
    
   }
    return <div class="container">
    <div class="apply_box">
      <h1>
        Add Company
        <span class="title_small"></span>
      </h1>
      <form action="#">
        <div class="form_container">
          <div class="form_control">
            <label for="company_name"> Company Name </label>
            <input onChange={handleChange}
              id="company_name"
              name="Name"
              value={CompanyData.Name}
              placeholder="Enter Company Name..."
            />
            <span id="company_name_error" class="error"></span>
          </div>
          
         
         
          <div class="textarea_control">
            <label for="description"> Description </label>
            <textarea
              id="description"
              name="Description"
              value={CompanyData.Description}
              rows="4"
              cols="50"
              placeholder="Enter Description"
            ></textarea>
            <span class="error"></span>
          </div>

          <div class="form_control">
            <label for="location"> Location </label>
            <input onChange={handleChange}
              type="text"
              id="location"
              name="Location"
              value={CompanyData.Location}
              placeholder="Enter Location..."
            />
            <span class="error"></span>
          </div>

          <div className="button_container">
                <button type="button" onClick={addLocations}>Add location</button>
              </div>
              <label htmlFor="locationssarray"> Locations </label>
              <ul>
                {CompanyLocations.map(ele => (
                  <li key={ele} >
                    {ele}
                  </li>
                ))}
              </ul>
              <span id="locations_error" className="error"></span>
            </div>
        <div class="button_container">
          <button type="submit">Apply Now</button>
        </div>
      </form>
    </div>
  </div>
} 
export default InsertCompany;