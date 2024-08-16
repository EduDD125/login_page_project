import './App.css';
import { useState } from 'react';
import Login from './Components/login/login';
import Navbar from './Components/navbar/navbar'
import Registration from './Components/register/register';



function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);


  console.log("selection option: ", selectedOption);
  console.log(loggedIn);
  return (
    <>
      <Navbar setSelectedOption={setSelectedOption}/>
      <div className='page-container'>

      {loggedIn ?
        <>Bem vindo, {userData.name}</>
      :
        <>
          <Registration selectedOption={selectedOption}/>
          <Login selectedOption={selectedOption} setLoggedIn={setLoggedIn}/>
        </>
      }

        
      </div>
    </>
  );
}

export default App;
