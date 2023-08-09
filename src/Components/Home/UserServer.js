import API from "../API";
async function InsertUser(data){
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
        body:JSON.stringify(headers)
      }
      ).then(async res=>await res.json())
      .then(async result=>{
        const {token,role,userId}=await result;
        localStorage.setItem("role",role);
        localStorage.setItem("userId",userId);
        localStorage.setItem("token",token);
        return userId;

      }
        )
     

    }catch(err){
        console.error("Error: ",err);
    }
}
async function LoginUserData(data){

  try{
      var headers={
          
      }
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
      const {token,role,userId}=await result;
      localStorage.setItem("role",role);
      localStorage.setItem("userId",userId);
      localStorage.setItem("token",token);
      return userId;

    }
      )
   

  }catch(err){
      console.error("Error: ",err);
  }
}
export {InsertUser,LoginUserData};
