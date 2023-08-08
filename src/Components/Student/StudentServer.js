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
export{InsertStudentData}