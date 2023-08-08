import React from "react";
async function InsertStudent(data){
    try{
        var headers={
            
        }
      const response=fetch(API+"student/insertstudentdetails",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
      ).then(async res=>await res.json())
      
      .then(async result=>{
        const nummsg =await result;
        return nummsg;       

      }
        )
     

    }catch(err){
        console.error("Error: ",err);
    }
}