
import API from "../API";
async function unverifiedCompanies(setdata){
    const result=fetch(API+"admin/getallunverifiedcompanies",
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
   
    ).then(res=>res.json())
    .then(result=>{
       setdata(result.data);
       console.log(result.data);
    })
    
}
async function verifyaccount(id,setdata){
    const response=fetch(API+"admin/verifycompany/"+id,
    {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    ).then(async x=>{
       await unverifiedCompanies(setdata); 
    })
    
}
async function getjobpostedtoday(){
    const response=fetch(API+"admin/getjobpostedtoday",
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
async function getcompanies(){
    const response=fetch(API+"admin/getcompanies",
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
export {unverifiedCompanies,getcompanies,getjobpostedtoday,verifyaccount};