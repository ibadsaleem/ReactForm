import React, { useState, useEffect } from 'react'
import '../Components/form.css';
import fire from './fire';
import firebase from 'firebase';

export default function Form() {

    const [details, setdetails] = useState({

        fname: "",
        lname: "",
        address: "",
        contact_num: 0
    });
    const [submitted, setSubmit] = useState(false);
    const [valid, setValid] = useState(false);
    
    const handlefname = (data) => {
        setdetails({ ...details, fname: data.target.value });
    }

    const handlelname = (data) => {
        setdetails({ ...details, lname: data.target.value });
    }

    const handlecnt = (data) => {
        setdetails({ ...details, contact_num: data.target.value });
    }

    const handleaddr = (data) => {
        setdetails({ ...details, address: data.target.value });
    }
    const refresh=()=>{
        window.location.reload();
    }
    const handlesubmitted = (data) => {
        data.preventDefault();
        if (details.fname && details.lname && details.contact_num && details.address) {
            let messageRef= fire.database().ref('Details').orderByKey().limitToFirst;
            fire.database().ref('Details').push(details);
            setValid(true);
        }
        setSubmit(true);
        setTimeout(refresh,3000);
        
    }

    return (

        <div className='container'>
            <div className="Card">
                <h1>Form Using React JS</h1>
                <center>
                    {submitted && valid ? <div className="Notice">Success! Thank You For Your Time</div> : null}
                </center><br />
                <div className="FormD">
                    <label htmlFor="fname">
                        First Name
                        <input style={{ width: '90%' }} type="text" placeholder='First Name' onChange={handlefname} />
                    </label>
                </div>
                {submitted && !details.fname ? <span className='Error'>Please Enter Your First Name</span> : null}

                <div className="FormD">
                    <label htmlFor="lname">
                        Last Name
                        <input style={{ width: '90%' }} type="text" placeholder='Last Name' onChange={handlelname} />
                    </label>
                </div>
                {submitted && !details.lname ? <span className='Error'>Please Enter Your Last Name</span> : null}

                <div className="FormD">
                    <label htmlFor="cntnum">
                        Contact No
                        <input style={{ width: '90%' }} type='text' placeholder='Contact No' onChange={handlecnt} />
                    </label>
                </div>
                {submitted && !details.contact_num ? <span className='Error'>Please Enter Your Contact Number</span> : null}

                <div className="FormD">
                    <label htmlFor="addr">
                        Address
                        <input style={{ width: '100%' }} type="text" placeholder='Address' onChange={handleaddr} />
                    </label>
                </div>
                {submitted && !details.address ? <span className='Error'>Please Enter Your Address</span> : null}

            </div>
            <div className="Form" style={{ width: '30%', margin: '0 auto', position: 'relative', bottom: 70 }}>
                <input style={{ width: '90%' }} className="btn btn-primary" type="submit" value="Submit" onClick={handlesubmitted} />
            </div>
        </div>
    )
}
