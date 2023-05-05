import React from 'react';
import Teams from './Teams';
import TeamMembers from './TeamMembers';


const Employees = ({employees,team,handleEmployeeCardClick,handleSelect}) => {


    return (
        <main>
            <div className="container">
            <div className="row justify-content-md-center mt-3 mb-3">
                <div className="col-6">
                    <Teams team={team} handleSelect={handleSelect}/>
                    {/* <select className="form-select form-select-lg" value={team} onChange={handleSelect}>
                        <option value='TeamA'>TeamA</option>
                        <option value='TeamB'>TeamB</option>
                        <option value='TeamC'>TeamC</option>
                        <option value='TeamD'>TeamD</option>
                    </select> */}
                </div>
            </div>
                <div className="row justify-content-md-center mt-3 mb-3">
                    <div className="col-8">
                        <div className="card-collection">
                                               
                           <TeamMembers employees={employees}
                                        handleEmployeeCardClick={handleEmployeeCardClick}
                                        team={team}/> 
                 
                        </div>
                    </div>
                </div>
            </div>
            
            
        </main>
    );
        }
export default Employees;