import React, { useState } from "react";
import { InsertCompanyData } from "./CompanyServer";


function InsertCompany(){
  const [cLoc,setCLoc]=useState([]);
  const [cdata,setcdata]=useState({
    Name:"",
    Description:"",
    OwnerId:"",
    CompanyLocations:cLoc,
    Loc:""
  })
  function handleChange(event){
    const {name,value}=event.target;
    setcdata(pre=>{
      return{
        ...pre,
        [name]:value
      }
    })
  }
  async function handleSubmit(event){
    cdata.OwnerId=localStorage.userId;
    cdata.CompanyLocations=[...new Set(cLoc)];
    await InsertCompanyData(cdata);
    event.preventDefualt();
  }
  function addLoc(event){
    const value=cdata.Loc;
    setCLoc(p=>{
      return [...p,value]
    })
  }
  return <div>
    <form onSubmit={handleSubmit}>
    <label>Company Name</label>
    <input type="text" name="Name" onChange={handleChange} value={cdata.Name} />
    <label>Description</label>
    <textarea name="Description"
    rows="4"
    cols="50"
    onChange={handleChange}
    value={cdata.Description}
    >
    </textarea>
    <label>Company Locations</label>
    <input type="text" name="Loc" onChange={handleChange} value={cdata.Loc} />
    <button type="button" onClick={addLoc} >Add Location</button>
    {cLoc.length>0 && <label>Location</label>}
    <ul>
    {cLoc.map(x=>{
      return <li>{x}</li>
    })}
    </ul>
    <button type="submit">Submit</button>
    
    </form>
  </div>
}
export default InsertCompany;