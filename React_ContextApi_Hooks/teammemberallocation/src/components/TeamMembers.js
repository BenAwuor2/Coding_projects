import React from "react";
import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({employees, handleEmployeeCardClick, handleSelect}) => {
    return (
            employees.map((employee) => (
                <TeamMemberCard employee={employee} handleEmployeeCardClick={handleEmployeeCardClick} handleSelect={handleSelect}/>
            ))
        )

}

export default TeamMembers;