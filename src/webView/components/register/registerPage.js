import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Illustration from '../../../assets/animation/Illustration.json';
import LottiAnimations from '../../../common/lottieAnimation';
import Button from "@material-ui/core/Button";
import Register from "./register";
/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
      });
      const [errors, setErrors] = useState({
        username: false,
        password: false
      });
      const [errorMessage, setErrorMessage] = useState("");


      const changeFunction = (e) => {
        let { name, value } = e.target;
       
        setErrorMessage("");
        setErrors({ ...errors, [name]: false });  
    
        if(name === "username"){
          if (value.length > 10) {
            value = value.slice(0, 10);
          } else {
            setInputs({ ...inputs, [name]: value });
          }
        } else {
          if (value.length > 16) {
            value = value.slice(0, 16);
          } else {
            setInputs({ ...inputs, [name]: value });
          }
        }  
      };
      const blurFunction = (e) => {
        let { name, value } = e.target;
    
        if(name === "username"){
          if(value.length < 10){
            setErrors({ ...errors, [name]: true });
          }
        } else if(name === "password"){
          if(!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{4,16}$/.test(value))){
            setErrors({ ...errors, [name]: true });
          }
        }
      }

      const loginProcess = (event) => {
        event.preventDefault();
        if (inputs.username === "" || errors.username === true ) {
          setErrors({ ...errors, username: true });
        } else if (inputs.password === "" || errors.password === true) {
          setErrors({ ...errors, password: true });
        } else {
          
          const form = new FormData();
          form.append("username",inputs.username);
          form.append("password",inputs.password);
    
          props.loginAction(form);
        }
        
      };
      const forgotProcess = () => {
        setErrors({ ...errors, password: false,  });
        setInputs({ ...inputs, password: ""})
        if (inputs.username === "") {
          setErrors({ ...errors, username: true,  });
        } else {
    
          const form = new FormData();
          // form.append("username",inputs.username);
          form.append("c_username",inputs.username);
          form.append("page","login");
          props.SendOTP(form);
    
          // props.SendOTP(inputs.username, "login");
    
        }
      };

      useEffect(() => {
        if(inputs.username !== ""){
          if (props.loginResult.error !== "") {
            setErrorMessage(props.loginResult.error);
          }
        }
      }, [props.loginResult]);

      useEffect(() => {
        if(inputs.username !== ""){
          if (props.sendOTPResult.error !== "") {
            setErrorMessage(props.sendOTPResult.error);
          }
        }
      }, [props.sendOTPResult]);
  return(
    <>
    <div className="lo-container">
        <div className="lo-left-container">
          <div className="space-3">
            {/* <img src={AuthIllustration} alt="AuthIllustration" /> */}
            <LottiAnimations Illustration={Illustration} height="850" width="650" />
          </div>
        </div>
        <div className="lo-right-container">
          <div className="lo-links">
            <span className="lo-text">Already have an account?</span>
            <a href="login.html">
              <button className="LoBtnBase-root LoBtn-root LoBtn-outlined default-btn" type="button">
                <span className="LoBtn-label">SIGN IN</span>
                <span className="LoTouchRipple-root"></span>
              </button>
              </a>
          </div>
          <div className="lo-form">
            <Register
              changeFunction={changeFunction}
              blurFunction={blurFunction}
              loginProcess={loginProcess}
              forgotProcess={forgotProcess}
              inputs={inputs}
              errors={errors}
              errorMessage={errorMessage}
            />
          </div>
        </div>
      </div>
    </>
   )

 }

export default RegisterPage;