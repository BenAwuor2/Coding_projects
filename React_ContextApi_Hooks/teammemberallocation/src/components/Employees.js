import React, { useState } from "react";
import femaleProfile from '../images/femaleProfile.bmp';
import maleProfile from '../images/maleProfile.bmp';

const Employees = () => {
    const [team, setTeam] = useState('TeamB')

    const handleSelect = (e) => {
        console.log(e.target.value)
        setTeam(e.target.value)
    }

    const [employees, setEmployees] = useState(
    [

        {
            id:1,
            fullName: 'Ben Oketch',
            designation: 'JavaScript Developer',
            gender: 'Male',
            teamName: 'TeamA'
        },
        {
            id:2,
            fullName: 'Papa Apache',
            designation: 'JavaScript Developer',
            gender: 'Male',
            teamName: 'TeamA'
        },
        {
            id:3,
            fullName: 'Rayan Paul',
            designation: 'Python',
            gender: 'Male',
            teamName: 'TeamB'
        },
        {
            id:4,
            fullName: 'Penny Girl',
            designation: 'Python',
            gender: 'Female',
            teamName: 'TeamB'
        },
        {
            id:5,
            fullName: 'simba lion',
            designation: 'Python',
            gender: 'Female',
            teamName: 'TeamB'
        },
        {
            id:6,
            fullName: 'luiz surez',
            designation: 'Python',
            gender: 'Female',
            teamName: 'TeamB'
        },
        {
            id:7,
            fullName: 'jane Doe',
            designation: 'Python',
            gender: 'Female',
            teamName: 'TeamB'
        }
    ]
    )


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
                           <div id={employee.id} className="card m-2" style={{cursor:'pointer'}}>

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