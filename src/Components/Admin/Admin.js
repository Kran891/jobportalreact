import React, { useState } from 'react';
import '../Company/PostJob.css';

function Admin() {
    const [showDiv1, setShowDiv1] = useState(false);
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

    return (
        <div className="post-job-container">
            <h1>Admin</h1>
            <div className="header-buttons">
                <button onClick={() => showDiv(1)}>Button 1</button>
                <button onClick={() => showDiv(2)}>Button 2</button>
                <button onClick={() => showDiv(3)}>Button 3</button>
            </div>
            <div className="content-div">
                {showDiv1 && <div className="div1">Div 1 Content</div>}
                {showDiv2 && <div className="div2">Div 2 Content</div>}
                {showDiv3 && <div className="div3">Div 3 Content</div>}
            </div>
        </div>
    );
}

export default Admin;
