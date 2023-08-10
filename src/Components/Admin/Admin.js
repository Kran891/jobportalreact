import React, { useEffect, useState } from 'react';
import './adminstyle.css';

import { getcompanies, getjobpostedtoday, unverifiedCompanies, verifyaccount } from './AdminServer';

function Admin() {
    const [disdata,setdisData]=useState();
    useEffect(()=>{
    const x=async ()=>{ await unverifiedCompanies(setdisData)};
    (x());
    },[]);
    const [showDiv1, setShowDiv1] =useState(true);
   //  setTimeout(()=>{setShowDiv1(true)},3000);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);
    
    const showDiv = async(divNumber) => {
        if (divNumber === 1) {
            setShowDiv1(true);
            setShowDiv2(false);
            setShowDiv3(false);
            await unverifiedCompanies(setdisData);
        } else if (divNumber === 2) {
            setShowDiv1(false);
            setShowDiv2(true);
            setShowDiv3(false);
            await getjobpostedtoday(setdisData);
        } else if (divNumber === 3) {
            setShowDiv1(false);
            setShowDiv2(false);
            setShowDiv3(true);
            await getcompanies(setdisData);
        }
    };
    async function verifyCompany(id){
        await verifyaccount(id,setdisData);
        
    }
    return (
        <div className="post-job-container">
            <h1>Admin</h1>
            <div className="header-buttons">
                <button onClick={() => showDiv(1)}>Unverified Companies</button>
                <button onClick={() => showDiv(2)}>Jobs Posted Today</button>
                <button onClick={() => showDiv(3)}>Gell All Companies</button>
            </div>
            <div className="content-div">
                {showDiv1 &&!!disdata && <div className="div1 admin-grid">
                    {disdata.map(ele=>{
                        return <div>
                        <h1>{ele.name}</h1>
                        <h3>{ele.ownerName}</h3>
                        <p>{"Locations:"+ele.companyLocations.join()}</p>
                        <button onClick={()=>{verifyCompany(ele.companyId)}}>Verify Company</button>
                        </div>
                    })}
                </div>}
                {showDiv2 && <div className="div2">Div 2 Content</div>}
                {showDiv3 && <div className="div3 admin-grid">
                {disdata.map(ele=>{
                        return <div>
                        <h1>{ele.name}</h1>
                        <h3>{ele.ownerName}</h3>
                        <p>{"Locations:"+ele.companyLocations.join()}</p>
                        </div>
                    })}
                </div>}
            </div>
        </div>
    );
}

export default Admin;
