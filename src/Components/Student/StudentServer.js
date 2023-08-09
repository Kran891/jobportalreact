import API from "../API";
async function GetJobsByLocation(Location,userId){
  const response=fetch(API+"student/getjobsbylocation/"+location+"/"+userId,
  {
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
  }
  ).then(res=>res.json)
  .then(result=>{
      return result;
  })
}

async function GetAllJobs(userId){
  const response=fetch(API+"student/getalljobs/"+userId,
  {
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
  }
  ).then(res=>res.json)
  .then(result=>{
      return result;
  })
}

async function GetJobsByYourSkills(userId){
  const response=fetch(API+"student/getjobsbyyuorskills/"+userId,
  {
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
  }
  ).then(res=>res.json)
  .then(result=>{
      return result;
  })
}

async function GetAppliedJobs(userId){
  const response=fetch(API+"student/getappliedjobs/"+userId,
  {
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
  }
  ).then(res=>res.json)
  .then(result=>{
      return result;
  })
}

async function GetInterviewsScheduled(userId){
  const response=fetch(API+"student/getinterviewsscheduled/"+userId,
  {
      method:'GET',
      headers:{
          'Content-Type':'application/json'
      }
  }
  ).then(res=>res.json)
  .then(result=>{
      return result;
  })
}

async function InsertStudentData(data){
    try{
       const formData=new FormData();
       formData.append("studentModel", JSON.stringify(data));
        formData.append("ResumeFile", data.ResumeFile);
      const response=fetch(API+"student/insertstudentdetails",
      {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:formData
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
async function InsertUser1(data){
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
      // localStorage.setItem("role",role);
      // localStorage.setItem("userId",userId);
      // localStorage.setItem("token",token);
      return result;

    }
      )
   

  }catch(err){
      console.error("Error: ",err);
  }
}
export{InsertStudentData,InsertUser1}