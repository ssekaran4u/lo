import React, { useState } from "react";
import phone from "../../../assets/images/phone.svg";
import password from "../../../assets/images/password.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { IconButton } from "@material-ui/core";
import eye from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import './login.css';

/**
* @author
* @function Login
**/

const Login = (props) => {
  const {
    
    changeFunction, blurFunction,
    loginProcess,
    forgot,
    inputs,
    errors,
    errorMessage,
    loading
  } = props;
  console.log(blurFunction,"blurFunction")
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <>
      <div className="lo-form">
        <div className="lo-form-space">
          <div className="hearder_div">
            <h3 className="lo-title">Welcome To 'Live Order'</h3>
            <h5 className="lo-subtitle">India's Fastest B2B Pharma 'Eco System'</h5>
          </div>
          <p className="login-error-msg success-color"></p>
          <p className="login-error-msg">{errorMessage}</p>

          <form onSubmit={(e) => loginProcess(e)}>
            <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
              <div className={`LoIptBase-root LoOtlnIpt-root LoIptBase-StyleGo LoOtlnIpt-StyleGo LoIptBase-StyleEnd Mobilenumber ${errors.username ? "errorborder" : ""}  `}>
              {/* textbox-focus */}

                <div className="LoIptStyle-root LoIptStyle-positionGo" id="login-Illustration-img">
                  <img src={phone} alt="Smart Phone" />
                </div>

                <input 
                
                
                error={errors.username}
                name="username" 
                onBlur={e => blurFunction(e)}
                placeholder="Mobile Number/User Name" type="text" className="LoIptBase-input LoOtlnIpt-input LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo iptboxfocus" id="Mobilenumber" onChange={e => changeFunction(e)}
               
                />

                <fieldset aria-hidden="true" className="PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                  <legend className="PrvtNotchOtln-legend-2">
                    <span>​{errors.username}</span>
                  </legend>
                </fieldset>
              </div>
              <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error Mobilenumber_error">{errors.username && "Not a valid mobile number"}</p>
            </div>
            <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
              <div className={`LoIptBase-root LoOtlnIpt-root LoIptBase-StyleGo LoOtlnIpt-StyleGo LoIptBase-StyleEnd CreatPassword ${errors.password ? "errorborder" : ""}  `}>

                <div className="LoIptStyle-root LoIptStyle-positionGo">
                  <img src={password} alt="Password" />
                </div>

                <input 
                autoComplete="off" 
                error={errors.password}
                id="Password" 
                onChange={e => changeFunction(e)} 
                onBlur={e => blurFunction(e)}
                name="password" 
                placeholder="Password" 
                type={showPassword ? "text" : "password"} 
                className="LoIptBase-input LoOtlnIpt-input LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-inputStyleEnd LoOtlnIpt-inputStyleEnd iptboxfocus ipt-radious-0" 
                />

                <div className="LoIptStyle-root LoIptStyle-positionEnd padd-right-12">
                  <button className="LoBtnBase-root  password-visibility-icon" type="button" aria-label="toggle password visibility">
                  {showPassword ? (<img className="eyeopen" onClick={handlePassword} src={eye} alt="Eye" />):(<img className="eyeclose" src={eyeOff} onClick={handlePassword} alt="close-Eye" />)}
                    
                    
                    <span className="LoTouchRipple-root"></span>
                  </button>
                  <div className="LoIptStyle-root web-forgot-link LoIptStyle-positionEnd">
                    <p className="LoTypography-root LoTypography-body1 LoTypography-colorTextSecondary">Forgot?</p>
                  </div>
                </div>

                <fieldset aria-hidden="true" className="PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                  <legend className="PrvtNotchOtln-legend-2">
                    <span>​</span>
                  </legend>
                </fieldset>
              </div>
              {errors.password ? (
                <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error CreatPassword_error">Password should contain 4 - 16 character &amp; should contain alphanumeric and special character</p>
              ):(
                <p className="LoFormHelperText-root LoFormHelperText-contained">Password should contain 4 - 16 character &amp; should contain alphanumeric and special character</p>
              )}
              
              
            </div>

            <button className="LoBtnBase-root LoBtn-root LoBtn-contained theme-btn LoBtn-containedPrimary" type="submit">
              <span className="LoBtn-label">SIGN IN</span>
              <span className="LoTouchRipple-root"></span>  
            </button>
          </form>
             
        
        
          <h5 className="copyright-text">Copyright © 2021 C-Square Info Solutions Pvt. Ltd.. All rights reserved.</h5>
          <h5 className="static-links">
            <a href="/">Terms &amp; Conditions</a> | <a href="/">Cookie Policy</a>
          </h5>

        </div>
      </div>
    </>
  )

}

export default Login