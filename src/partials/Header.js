import React from "react";
import "./index.css";

// eslint-disable-next-line
export default () => {
    return (
        <>
            <div className="header-container">
                <div className="name-desig">
                    <h1 className="name">Ankit Rawat</h1>
                    <h3 className="designation">Software Developer</h3>
                </div>
                <div className="contact-creds">
                    <div className="add-flex email">
                        <img alt="Email" src="https://img.icons8.com/bubbles/50/000000/email.png" />
                        <p className="text">suggestion2ankit@gmail.com</p>
                    </div>

                    <div className="add-flex dob">
                        <img alt="DoB" src="https://img.icons8.com/clouds/50/000000/birthday-date.png" />
                        <p className="text">DoB: 28 Feb 1994</p>
                    </div>

                    <div className="add-flex city">
                        <img alt="Current Location" src="https://img.icons8.com/plasticine/50/000000/worldwide-location.png" />
                        <p className="text">Mumbai, Maharashtra</p>
                    </div>
                </div>
            </div>
        </>
    )
}