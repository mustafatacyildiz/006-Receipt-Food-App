
import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles';
import meal from "../../assets/meal.svg";

const Login = () => {
  const handleSubmit = (e)=>{
    const user = {
      username:"user"
    }
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user))
    window.location.href = "/home";
  }

  return (
  <LoginContainer>
<FormContainer> 
<StyledImg src={meal} alt=""/>
<Header>
{"Clarusway/>"}Recipe 
</Header>
<StyledForm onSubmit={handleSubmit}> 
<StyledInput type="text" placeholder="username" required/>
<StyledInput type="password" placeholder="password" required/>
<StyledButton type="submit">Login</StyledButton>
</StyledForm>
</FormContainer>
  </LoginContainer>
  )
}

export default Login