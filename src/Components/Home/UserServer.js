import axios from "axios";


import API from "../API";
async function InsertUser(data,navigate){
    
    try{
       
      const response=fetch(API+"user/insertuser",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      ).then(async res=>await res.json())
      .then(async result=>{
        const {token,role,userId}=await result;
        localStorage.setItem("role",role);
        localStorage.setItem("userId",userId);
        localStorage.setItem("token",token);
        
          if(localStorage.role==="Student")
         navigate("/student/insertstudent");
         else if(localStorage.role==="Company")
         navigate("/company/insertcompany");
        
         

      }
        )
     

    }catch(err){
        console.error("Error: ",err);
    }
}
async function LoginUserData(data,navigatefun){
 
  try{
     
    const response=fetch(API+"user/loginuser",
    {
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }
    ).then(async res=>await res.json())
    .then(async result=>{
      const {token,role,userId,companyId}=await result;
      localStorage.setItem("role",role);
      localStorage.setItem("userId",userId);
      localStorage.setItem("token",token);
      localStorage.setItem("companyId",companyId)
      
        if(localStorage.role==="student")
       navigatefun("/student");
      else if(localStorage.role==="admin")
      navigatefun("/admin");
      else if(localStorage.role==="company")
      navigatefun("/company");

    }
      )
   

  }catch(err){
      console.error("Error: ",err);
  }
}
async function InsertUser1(data){
  try{
     
    const response=axios.post(API+"user/insertuser",data).then(async res=>{});
  }catch(err){
      console.error("Error: ",err);
  }
}
export {InsertUser,LoginUserData,InsertUser1};
