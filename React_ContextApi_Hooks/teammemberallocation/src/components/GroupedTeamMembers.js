import React from "react";
import { useState } from "react";


const GroupedTeamMembers = ({employees, team, setTeam}) => {
    const [GroupedEmployees, setGroupedData] = useState(GroupedTeamMembers())
    function GroupedTeamMembers() {
        var teams = []

        var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA')
        var teamA = {teem:'TeamA', members:teamAMembers, collapsed:team === "TeamA"?false:true}
        teams.push(teamA)

        var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB')
        var teamB = {teem:'TeamB', members:teamBMembers,collapsed:team === "TeamB"?false:true}
        teams.push(teamB)

        var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC')
        var teamC = {teem:'TeamC', members:teamCMembers, collapsed:team === "TeamC"?false:true}
        teams.push(teamC)

        var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD')
        var teamD = {teem:'TeamD', members:teamDMembers, collapsed:team === "TeamD"?false:true}
        teams.push(teamD)

        return teams;
    }

    function handleTeamClick(event) {
        var transformedGroupData = GroupedEmployees.map((groupedData) => groupedData.teem === event.currentTarget.id
                                                                 ? {...groupedData,collapsed: !groupedData.collapsed}
                                                                 : groupedData)
        setGroupedData(transformedGroupData);
        setTeam(event.currentTarget.id);
    }

    return (
        <main className="container">
            {
                GroupedEmployees.map((item) => {
                    return  (
                        <div key={item.teem} className='card mt-2' style={{cursor:'pointer'}}>
                            <h4 id={item.teem} className='card-header text-secondary bg-white' onClick = {handleTeamClick}>
                                Team Name: {item.teem}
                            </h4>
                            <div id={"collapse_" + item.teem} className={item.collapsed === true?'collapse':''}>
                                <hr/>
                                {item.members.map(member => {
                                    return (
                                        <div className="mt-2">
                                            <h5 className="card-tittle mt-2">
                                                <span className="text-dark">Full Name:{member.fullName}</span>
                                            </h5>
                                            <p>Designation: {member.designation}</p>

                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                    )
                       
                    })
            }
            
        </main>
    );
}

export default GroupedTeamMembers;