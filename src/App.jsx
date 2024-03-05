import { useState } from "react";
import Result from "./components/Result";
import UserInput from "./components/UserInput";


function App() {
  const [userInputs, setUserInputs]= useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  const validInput = userInputs.duration >= 1 ;
  function handleInput(inputField, newValue){
    setUserInputs(prevUserInputs=> {
        return {
            ...prevUserInputs,
            [inputField] : +newValue
        }
    })
  }


  return (
    <>
      <UserInput onChange={handleInput} userInput={userInputs}/>
      {validInput ? 
        (<Result input ={userInputs}/>) : 
        (<p className="center">Please Enter Duration greater than 0.</p>)
      }
    </>
  );
}

export default App
