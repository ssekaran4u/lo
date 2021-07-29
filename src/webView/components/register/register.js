import React, { useState } from "react";
import shop from "../../../assets/images/shop.svg";
import zipcode from "../../../assets/images/zip-code.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { IconButton } from "@material-ui/core";
import smartphone from "../../../assets/images/smartphone.svg";
import password from "../../../assets/images/password.svg";
import eyeOn from "../../../assets/images/eye.svg";
import eyeOff from "../../../assets/images/eyeOff.svg";
import './register.css';

/**
* @author
* @function Login
**/

const Register = (props) => {
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
      <div className="lo-form-space">
          <div className="hearder_div">
              <h3 className="lo-title">Register With 'Live Order’</h3>
              <h5 className="lo-subtitle">Dear Buyer Please Enter your details below.</h5>
          </div>
          <p className="login-error-msg success-color"></p>
          <p className="login-error-msg"></p>

          <form>
              
              <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                  <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo BuyerFirmName">

                      <div className="LoIptStyle-root LoIptStyle-positionGo">
                        <img src={shop} alt="User"/>
                      </div>

                      <input name="BuyerFirmName" placeholder="Buyer Firm Name" type="name" className="LoIptBase-input LoOtlnIpt-input LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo iptboxfocus" id="BuyerFirmName"/ >

                      <fieldset  className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                          <legend className="PrvtNotchOtln-legend-2">
                            <span>​</span>
                          </legend>
                      </fieldset>
                  </div>
                  <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error BuyerFirmName_error hide">Not a valid firm name</p>
              </div>

              <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                  <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo BuyerFirmName">

                      <div className="LoIptStyle-root LoIptStyle-positionGo">
                        <img src={zipcode} alt="User"/>
                      </div>

                      <input name="BuyerFirmName" placeholder="Pin Code" type="number" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-inputStyleEnd LoOtlnIpt-inputStyleEnd iptboxfocus" id="BuyerFirmName"/>

                      <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                          <legend className="PrvtNotchOtln-legend-2">
                              <span>​</span>
                          </legend>
                      </fieldset>
                  </div>
                  <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error BuyerFirmName_error hide">Not a valid firm name</p>
              </div>
                      
              <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                  <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo Mobilenumber">

                      <div className="LoIptStyle-root LoIptStyle-positionGo">
                        <img src={smartphone} alt="Smart Phone"/>
                      </div>

                      <input name="OTP" placeholder="Mobile Number" type="number" className="LoIptBase-input LoOtlnIpt-input LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo iptboxfocus" id="Mobilenumber"/>

                      <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                          <legend className="PrvtNotchOtln-legend-2">
                            <span>​</span>
                          </legend>
                      </fieldset>
                  </div>
                  <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error Mobilenumber_error hide">Not a valid number</p>
              </div>

              <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                  <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo LoIptBase-StyleEnd CreatPassword">

                      <div className="LoIptStyle-root LoIptStyle-positionGo">
                        <img src={password} alt="Password"/>
                      </div>

                      <input id="Password" name="c_new_pwd" placeholder="Create New Password" type="password" className="LoIptBase-input LoOtlnIpt-input LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-inputStyleEnd LoOtlnIpt-inputStyleEnd iptboxfocus ipt-radious-0" id="CreatPassword" / >

                      <div className="LoIptStyle-root LoIptStyle-positionEnd pointer padd-right-12">
                          <img className="eyeopen" src={eyeOn} alt="Eye"/>
                          <img className="eyeclose hide" src={eyeOff} alt="close-Eye"/>
                      </div>

                      <fieldset  className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                          <legend className="PrvtNotchOtln-legend-2">
                            <span>​</span>
                          </legend>
                      </fieldset>
                  </div>
                  <p className="LoFormHelperText-root LoFormHelperText-contained">Password should contain 4 - 16 character &amp; should contain alphanumeric and special character</p>
                  <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error CreatPassword_error hide">Not a valid Password</p>
              </div>

              <button className="LoBtnBase-root LoBtn-root LoBtn-contained theme-btn LoBtn-containedPrimary" type="button">
                <span className="LoBtn-label">REGISTER</span>
                <span className="LoTouchRipple-root"></span>
              </button>

              <h5 className="another-registration">Are you a seller? <a href="sellerregister.html">Register here</a></h5>

          </form>

         <h5 className="copyright-text">Copyright © 2021 C-Square Info Solutions Pvt. Ltd.. All rights reserved.</h5>
          <h5 className="static-links">
              <a href="/">Terms &amp; Conditions</a> | <a href="/">Cookie Policy</a>
          </h5>

      </div>
    </>
  )

}

export default Register