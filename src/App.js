
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Bongani", 
      role: 'Software Developer', 
      img: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg'
    },
    {
      id: 2,
      name: "Chris", 
      role: 'Manager', 
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg '
    },
    {
      id: 3,
      name: "Timothy", 
      role: 'Intern', 
      img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg'
    },
    {
      id: 4,
      name: "Mike", 
      role: 'Junior Developer', 
      img: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg'
    },
    {
      id: 5,
      name: "John", 
      role: 'Senior Executive Producer', 
      img: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg'
    },
    {
      id: 6,
      name: "Steve", 
      role: 'Technician', 
      img: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg'
    }
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee
    })
    setEmployees(updatedEmployees)
  }

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input
        type="text"
        onChange={(e) =>{
          setRole(e.target.value)
        }} 
        />
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
            <Employee 
                key={employee.id} 
                id={employee.id}
                name={employee.name} 
                role={employee.role} 
                img={employee.img} 
                updateEmployee={updateEmployee}/>
            )
          })}
        </div>
      </>
    )  :  <p>You cannot see the employees</p>
    }
      </div>
  );
}

export default App;
