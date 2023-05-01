import React, { useState,useEffect } from 'react' ;
import './App.css';
import Header from './components/Header';
/* import Content from './components/Content'; */
import Footer from './components/Footer';
import Employees from './components/Employees';

function App() {

  const [team, setTeam] = useState(JSON.parse(localStorage.getItem("selectedTeam")) ||'TeamB')

    
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) ||
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
          teamName: 'TeamA'
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
          designation: 'C programmer',
          gender: 'Female',
          teamName: 'TeamC'
      },
      {
        id:8,
        fullName: 'Tm Papa',
        designation: 'Cyber Sec',
        gender: 'Male',
        teamName: 'TeamC'
    },
    {
      id:9,
      fullName: 'Suzy Anne',
      designation: 'Python',
      gender: 'Female',
      teamName: 'TeamC'
  },
  {
    id:10,
    fullName: 'Zack Maina',
    designation: 'C programmer',
    gender: 'Male',
    teamName: 'TeamD'
},
{
  id:11,
  fullName: 'Ray Omondi',
  designation: 'IT expert',
  gender: 'Male',
  teamName: 'TeamD'
},
{
  id:12,
  fullName: 'jay Melody',
  designation: 'Accounts',
  gender: 'Female',
  teamName: 'TeamD'
}
])

  useEffect(() => (
    localStorage.setItem('employeeList', JSON.stringify(employees))
  ), [employees]);

  useEffect(() => (
    localStorage.setItem('selectedTeam', JSON.stringify(team))
  ), [team]);

  const handleSelect = (event) => {
      setTeam(event.target.value)
  }

  const handleEmployeeCardClick = (event) => {
      const transformedEmployees = employees.map(( employee ) => (
        employee.id === parseInt(event.currentTarget.id)
      ? ((employee.teamName === team)? 
      {...employee, teamName:''}: {...employee, teamName: team}): 
      employee));

      setEmployees(transformedEmployees)
  }


  return (
    <div>
      <Header team={team} 
      teamMemberCount = {employees.filter((employee) => employee.teamName === team).length}
       />
      <Employees  employees={employees}
                  team={team}
                  handleEmployeeCardClick={handleEmployeeCardClick}
                  handleSelect={handleSelect}/>
      <Footer/>
    </div>

  );
}

export default App;
