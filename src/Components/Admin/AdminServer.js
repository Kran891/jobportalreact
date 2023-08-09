import API from "../API";
async function unverifiedCompanies(){
    const response=fetch(API+"admin/getallunverifiedcompanies",
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
async function verifyaccount(id){
    const response=fetch(API+"admin/verifyaccount/"+id,
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
async function getjobpostedtoday(){
    const response=fetch(API+"admin/getjobpostedtoday/"+id,
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
    const response=fetch(API+"admin/getcompanies/"+id,
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