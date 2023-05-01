import React from "react";


const Header = ({team, teamMemberCount}) => {
    return (
        <header className="container">
            <div className="row justify-content-md-center mt-3 mb-4">
                <div className="col-8">
                   <h1>Team Member Allocation</h1>
                   <h3>{team} has {teamMemberCount} Members</h3>
                </div>
            
            </div>
            
        </header>
    );
}

export default Header;