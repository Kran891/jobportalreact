import React, { useEffect, useState } from 'react';
import './adminstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


import { getcompanies, getjobpostedtoday, unverifiedCompanies, verifyaccount } from './AdminServer';

function Admin() {
    const [disdata, setDisData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            await unverifiedCompanies(setDisData);
        };
        fetchData();
    }, []);

    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv2, setShowDiv2] = useState(false);
    const [showDiv3, setShowDiv3] = useState(false);

    const showDiv = async (divNumber) => {
        if (divNumber === 1) {
            setShowDiv1(true);
            setShowDiv2(false);
            setShowDiv3(false);
            await unverifiedCompanies(setDisData);
        } else if (divNumber === 2) {
            setShowDiv1(false);
            setShowDiv2(true);
            setShowDiv3(false);
            await getjobpostedtoday(setDisData);
        } else if (divNumber === 3) {
            setShowDiv1(false);
            setShowDiv2(false);
            setShowDiv3(true);
            await getcompanies(setDisData);
        }
    };

    async function verifyCompany(id) {
        await verifyaccount(id, setDisData);
    }

    return (
        <div>
            <h2>ADMIN PAGE</h2>
            <div className="header-buttons">

                <button onClick={() => showDiv(1)}>Unverified Companies</button>
                <button onClick={() => showDiv(2)}>Jobs Posted Today</button>
                <button onClick={() => showDiv(3)}>Get All Companies</button>
            </div>

            <div className="post-job-container">

                {showDiv1 && !!disdata.length && (
                    <div className="div1 admin-grid">
                        {disdata.map((ele) => (
                            <div className="centered" key={ele.companyId}>
                                <h1>{ele.name}</h1>
                                <h2>{ele.ownerName}</h2>
                                <p>{"Locations: " + ele.companyLocations.join()}</p>
                                <button onClick={() => verifyCompany(ele.companyId)}>Verify Company</button>
                            </div>
                        ))}
                    </div>
                )}
                {showDiv2 && <div className="div2 admin-grid">
                    {disdata.map((ele) => (
                        <div className="centered" key={ele.jobId}>
                            <h1>{ele.title}</h1>
                            <h2>{ele.companyName}</h2>
                            
                                {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" /> */}
                                {/* {"Skills: " + ele.requiredSkills.join()}</p> */}
                            
                        </div>
                    ))}
                </div>}
                {showDiv3 && (
                    <div className="div3 admin-grid">
                        {disdata.map((ele) => (
                            <div className="centered" key={ele.companyId}>
                                <h1>{ele.name}</h1>
                                <h2>{ele.ownerName}</h2>
                                <p>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                                    {"Locations: " + ele.companyLocations.join()}</p>
                                <button>Button</button>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </div>
    );
}

export default Admin;
