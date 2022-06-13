import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthTypes } from "../../../redux/action_types/auth_types";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitFn = () => {
    console.log("submit");
    dispatch({
      type: AuthTypes.LOGIN_REQUEST,
      callback: (value) => {
        if (value) {
          navigate("/Dashboard");
        }
      }
    });
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={submitFn}>Submit</button>
    </div>

  )
}

export default Login