import React from "react";
import femaleProfile from '../images/femaleProfile.bmp';
import maleProfile from '../images/maleProfile.bmp';

const TeamMemberCard = ({employee, handleEmployeeCardClick, team}) => {
    return (
        <div key={employee.id} id={employee.id} className={(employee.teamName === team ? 'card m-2 standout' : 'card m-2' )} style={{cursor:'pointer'}} onClick={ handleEmployeeCardClick }>

                {(employee.gender === 'Male') ? 
                <img src={ maleProfile } alt="female-pic" className="card-img-top"/> 
                : <img src={ femaleProfile } alt="female-pic" className="card-img-top"/>}
            
                <div className="card-body">
                    <h5>Full Name: { employee.fullName }</h5>
                    <p className='card-text'>Designation: {employee.designation}</p>
                </div>
        </div>
        )

}

export default TeamMemberCard;