
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      name: "Bongani", 
      role: 'Software Developer', 
      img: 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg'
    },
    {
      name: "Chris", 
      role: 'Manager', 
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg '
    },
    {
      name: "Timothy", 
      role: 'Intern', 
      img: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg'
    },
    {
      name: "Mike", 
      role: 'Junior Developer', 
      img: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg'
    },
    {
      name: "John", 
      role: 'Senior Executive Producer', 
      img: 'https://images.pexels.com/photos/4890733/pexels-photo-4890733.jpeg'
    },
    {
      name: "Steve", 
      role: 'Technician', 
      img: 'https://images.pexels.com/photos/4556737/pexels-photo-4556737.jpeg'
    }
  ]);

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
      <>
      <input
        type="text"
        onChange={(e) =>{
          console.log(e.target.value);
          setRole(e.target.value)
        }} 
        />
        <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {
            return (
            <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img}/>
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
