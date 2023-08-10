import React, { useEffect, useState } from 'react';
import './adminstyle.css';

import { unverifiedCompanies, verifyaccount } from './AdminServer';

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
    
    const showDiv = (divNumber) => {
        if (divNumber === 1) {
            setShowDiv1(true);
            setShowDiv2(false);
            setShowDiv3(false);
        } else if (divNumber === 2) {
            setShowDiv1(false);
            setShowDiv2(true);
            setShowDiv3(false);
        } else if (divNumber === 3) {
            setShowDiv1(false);
            setShowDiv2(false);
            setShowDiv3(true);
        }
    };
    async function verifyCompany(id){
        await verifyaccount(id,setdisData);
        
    }
    return (
        <div className="post-job-container">
            <h1>Admin</h1>
            <div className="header-buttons">
                <button onClick={() => showDiv(1)}>Button 1</button>
                <button onClick={() => showDiv(2)}>Button 2</button>
                <button onClick={() => showDiv(3)}>Button 3</button>
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
                {showDiv3 && <div className="div3">Div 3 Content</div>}
            </div>
        </div>
    );
}

export default Admin;
