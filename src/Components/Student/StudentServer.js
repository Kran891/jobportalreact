import API from "../API";

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