import React from 'react';
import femaleProfile from '../images/femaleProfile.bmp';
import maleProfile from '../images/maleProfile.bmp';

const Employees = ({employees,team,handleEmployeeCardClick,handleSelect}) => {


    return (
        <main>
            <div className="container">
            <div className="row justify-content-md-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={team} onChange={handleSelect}>
                        <option value='TeamA'>TeamA</option>
                        <option value='TeamB'>TeamB</option>
                        <option value='TeamC'>TeamC</option>
                        <option value='TeamD'>TeamD</option>
                    </select>
                </div>
            </div>
                <div className="row justify-content-md-center mt-3 mb-3">
                    <div className="col-8">
                        <div className="card-collection">
                        {
                        employees.map((employee) => (
                           <div key={employee.id} id={employee.id} className={(employee.teamName === team ? 'card m-2 standout' : 'card m-2' )} style={{cursor:'pointer'}} onClick={ handleEmployeeCardClick }>

                                {(employee.gender === 'Male') ? 
                                <img src={ maleProfile } alt="female-pic" className="card-img-top"/> 
                                : <img src={ femaleProfile } alt="female-pic" className="card-img-top"/>}
                            
                                <div className="card-body">
                                    <h5>Full Name: { employee.fullName }</h5>
                                    <p className='card-text'>Designation: {employee.designation}</p>
                                </div>
                           </div>
                            
                        ))
                    }
                        </div>
                    </div>
                </div>
            </div>
            
            
        </main>
    );
        }
export default Employees;