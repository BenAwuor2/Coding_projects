import React from "react";

const Footer = () => {
    var today = new Date();
    return (
        <footer className="container">

            <div className="row justify-content-md-center mt-3 mb-4">
                <div className="col-8">
                <h1>Team Member Allocation App - {today.getFullYear()}</h1>
                </div>
            </div>
           
        </footer>
    );
}

export default Footer;