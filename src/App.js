import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Login } from "./components/auth/login.jsx"
import { Admin } from './components/dashboard/admin.jsx';
import { Employee } from './components/dashboard/employee.jsx';
import { userContext } from './context/authcontext.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [user, setUser] = useState('');
  const [loginData, setLoginData] = useState(null)
  const data = useContext(userContext)

  function handleLogin(email, password) {

    //   if (email === 'awes@gmail.com' && password === 'awes@112233') {
    //     setUser('admin')
    //   } else {
    //     if (data) {
    //       const employee = data.employee.find((e) => e.email === email && e.password === password)
    //       if (employee) {
    //         setUser('employee')
    //         setLoginData(employee)
    //       }
    //     } else {
    //       alert("Invalid Email")
    //     }
    //   }
    // }

    if (email === 'awes@gmail.com' && password === 'awes@112233') {
      setUser('admin')
    } else {
      if (data && Array.isArray(data.employee)) {
        const employee = data.employee.find(
          (e) => e.email === email && e.password === password
        )
        if (employee) {
          setUser('employee')
          setLoginData(employee)
        } else {
          alert("Invalid Email or Password")
        }
      } else {
        alert("Employee data not available")
      }
    }
  }



  return (
    <>
      {user ? '' : <Login changeUser={setUser} handleLogin={handleLogin} />}
      {user === 'admin' ? <Admin changeUser={setUser} /> : ''}
      {user === 'employee' ? <Employee changeUser={setUser} data={loginData} /> : ''}
    </>

  )
}

export default App;
