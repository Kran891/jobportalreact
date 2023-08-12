
import API from "../API";
async function InsertCompanyData(data,navigatefun){
   
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
      ).then(async res=>{
        if(!res.ok){
          throw new Error("Status:",res.status);
        }
        return await res.json();
      })
      .then(async result=>{
        // const {token,role,userId}=await result;
         localStorage.clear();
         navigatefun("/"); 
      }).catch(err=>alert(err))
      }catch(err){
        console.error("Error: ",err);
        alert("Error:",err)
    }
  }
  async function InsertJob(data,navigatefun){
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
      ).then(async res=>{
        if(!res.ok)
          throw new Error("Error :",res.status)
        return await res.json();
      }).then(result=>{
        if(parseInt(result.data)>1)
          navigatefun("/company");
        else{
          alert("Already Exsits the job title");
          navigatefun("/company");
        }
          
      }).catch(err=>{
        alert(err);
      })
     

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
      ).then(async res=>{
        if(!res.ok){
          throw new Error("Status:",res.status);
        }
      })
      .then(async result=>{

        return result;
  
      }
        )
     
  
    }catch(err){
        console.error("Error: ",err);
        alert("Error:",err)
    }
  }
  export {InsertCompanyData,InsertInterviewData,InsertJob};
