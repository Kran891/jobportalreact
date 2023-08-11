import { useNavigate } from "react-router-dom";
import API from "../API";
async function InsertCompanyData(data){
   let navigate=useNavigate();
    try{
        var headers={
            Name:"hello"
        }
      const response=fetch(API+"company/insertcompany",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      ).then(async res=>await res.json())
      .then(async result=>{
        // const {token,role,userId}=await result;
         localStorage.removeItem("role");
         localStorage.removeItem("userId");
         localStorage.removeItem("token");
         navigate("/"); 
         
  
      }
        )
     
  
    }catch(err){
        console.error("Error: ",err);
    }
  }
  async function InsertJob(data){
    try{
        var headers={
            Name:"Hello"
        }
      const response=fetch(API+"company/addjob",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      );
     

    }catch(err){
        console.error("Error: ",err);
    }
}
async function InsertInterviewData(data){
    try{
        var headers={
            
        }
      const response=fetch(API+"company/insertcompany",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      ).then(async res=>await res.json())
      .then(async result=>{

        return result;
  
      }
        )
     
  
    }catch(err){
        console.error("Error: ",err);
    }
  }
  export {InsertCompanyData,InsertInterviewData,InsertJob};
