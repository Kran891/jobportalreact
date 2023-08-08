import API from "../API";
async function InsertJob(data){
    try{
        var headers={
            
        }
      const response=fetch(API+"company/addjob",
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