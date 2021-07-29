import React, { useState } from "react";
import user from "../../../assets/images/user.svg";
import email from "../../../assets/images/email.svg";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import { IconButton } from "@material-ui/core";
import smartphone from "../../../assets/images/smartphone.svg";
import password from "../../../assets/images/password.svg";
import address from "../../../assets/images/address.svg";
import zipcode from "../../../assets/images/zip-code.svg";
import worldwide from "../../../assets/images/worldwide.svg";
import placeholder from "../../../assets/images/placeholder.svg";
import calendar from "../../../assets/images/calendar.svg";
import gst from "../../../assets/images/gst.svg";
import tax from "../../../assets/images/tax.svg";

import './firminfo.css';
/**
* @author
* @function Firminfodetails
**/

const Firminfodetails = (props) => {
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
      <div className="lo-form-space lo-form-space-firm">
        <div className="lo-container">
            <div className="hearder_div">
                <h3 className="lo-title">Register With 'Live Order’</h3>
                <h5 className="lo-subtitle">Please fill Business Information for next step.</h5>
            </div>
            <div className="hearder_div1">
                <h5 className="lo-skiptitle pointer"><a href="login.html">Skip</a></h5>
            </div>
        </div>
        
        <p className="login-error-msg success-color"></p>
        <p className="login-error-msg"></p>

        <form>
            <div className="lo-container">

                <div className="LoPaper-root forgot-paper LoPaper-rounded mg-b-16">
                    <div className="LoTabs-root forgot-tabs">
                        <div className="LoTabs-scroller LoTabs-fixed overflow-hidden">
                            <div className="LoTabs-flexContainer" role="tablist">
                                <button className="LoButtonBase-root LoTab-root LoTab-textColorPrimary Lo-selected tab1 width-182px" type="button" role="tab" id="scrollable-auto-tab-0">
                                    <span className="LoTab-wrapper">Firm Contact Information</span>
                                    <span className="LoTouchRipple-root"></span>
                                </button>
                                <button className="LoButtonBase-root LoTab-root LoTab-textColorPrimary tab2 width-146px"type="button" role="tab" id="scrollable-auto-tab-1">
                                    <span className="LoTab-wrapper">Firm legal Identities</span>
                                    <span className="LoTouchRipple-root"></span>
                                </button>
                            </div>
                            <span className="jss376 jss377 LoTabs-indicator selecter-left"></span>
                        </div>
                    </div>
                </div>
                <button className="Rectangle-4135 hide">Add License</button>
                
                
                <div className="lo-container tab1_details">
                    <div className="lo-form_split1">
                        <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                            <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo BuyerFirmName">

                                <div className="LoIptStyle-root LoIptStyle-positionGo">
                                  <img src={user} alt="User"/>
                                </div>

                                <input aria-invalid="false" autoComplete="off" name="BuyerFirmName" placeholder="Contact Person" type="name" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-iptStyleEnd LoOtlnIpt-iptStyleEnd iptboxfocus" id="BuyerFirmName"/>

                                <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                    <legend className="PrvtNotchOtln-legend-2">
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                            <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error BuyerFirmName_error hide">Not a valid firm name</p>
                        </div>                             
                    </div>
                   
                    <div className="lo-form_split2">
                        <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                            <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo ">

                                <div className="LoIptStyle-root LoIptStyle-positionGo">
                                  <img src={email} alt="User"/>
                                </div>

                                <input aria-invalid="false" autoComplete="off" name="" placeholder="E-mail Address" type="name" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-iptStyleEnd LoOtlnIpt-iptStyleEnd iptboxfocus"/>

                                <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                    <legend className="PrvtNotchOtln-legend-2">
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                            <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                        </div>
                    </div>

                    <div className="lo-form_split1">
                        <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                            <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo ">

                                <div className="LoIptStyle-root LoIptStyle-positionGo">
                                  <img src={address} alt="User"/>
                                </div>

                                <input aria-invalid="false" autoComplete="off" name="" placeholder="Address Line 1" type="name" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-iptStyleEnd LoOtlnIpt-iptStyleEnd iptboxfocus"/>

                                <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                    <legend className="PrvtNotchOtln-legend-2">
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                            <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                        </div>                             
                    </div>
                   
                    <div className="lo-form_split2">
                        <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                            <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo ">

                                <div className="LoIptStyle-root LoIptStyle-positionGo">
                                  <img src={address} alt="User"/>
                                </div>

                                <input aria-invalid="false" autoComplete="off" name="" placeholder="Address Line 2" type="name" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-iptStyleEnd LoOtlnIpt-iptStyleEnd iptboxfocus"/>

                                <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                    <legend className="PrvtNotchOtln-legend-2">
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                            <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                        </div>
                    </div>

                    <div className="lo-form_split1">
                        <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                            <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo ">

                                <div className="LoIptStyle-root LoIptStyle-positionGo">
                                  <img src={zipcode} alt="User"/>
                                </div>

                                <input aria-invalid="false" autoComplete="off" name="" placeholder="Pin Code" type="number" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-iptStyleEnd LoOtlnIpt-iptStyleEnd iptboxfocus"/>

                                <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                    <legend className="PrvtNotchOtln-legend-2">
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                            <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                        </div>                             
                    </div>
                   
                    <div className="lo-form_split2">
                        <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                            <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo  select-wrap">

                                <div className="LoIptStyle-root LoIptStyle-positionGo">
                                  <img src={worldwide} alt="User"/>
                                </div>

                                <select id="select" className="LoIptBase-input LoOtlnIpt-input Lo-disabled LoIptBase-iptStyleGo iptboxfocus lo-select select-wrap" required>
                                    <option value="">State</option>
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                </select>

                                <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                    <legend className="PrvtNotchOtln-legend-2">
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                            <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                        </div>
                    </div>

                    <div className="lo-form_split1">
                        <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                            <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo  select-wrap">

                                <div className="LoIptStyle-root LoIptStyle-positionGo">
                                  <img src={placeholder} alt="User"/>
                                </div>

                                <select id="select" className="LoIptBase-input LoOtlnIpt-input Lo-disabled LoIptBase-iptStyleGo iptboxfocus lo-select select-wrap" required>
                                    <option value="">City</option>
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                </select>

                                <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                    <legend className="PrvtNotchOtln-legend-2">
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                            <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                        </div>                             
                    </div>
                   
                    <div className="lo-form_split2">
                        <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                            <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo  select-wrap">

                                <div className="LoIptStyle-root LoIptStyle-positionGo">
                                  <img src={placeholder} alt="User"/>
                                </div>

                                <select id="select" className="LoIptBase-input LoOtlnIpt-input Lo-disabled LoIptBase-iptStyleGo iptboxfocus lo-select select-wrap" required>
                                    <option value="">Area</option>
                                    <option value="1">Value 1</option>
                                    <option value="2">Value 2</option>
                                </select>

                                <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                    <legend className="PrvtNotchOtln-legend-2">
                                        <span>​</span>
                                    </legend>
                                </fieldset>
                            </div>
                            <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error hide">Not a valid firm name</p>
                        </div>
                    </div>

                    <button className="LoBtnBase-root LoBtn-root LoBtn-contained theme-btn LoBtn-containedPrimary" tabindex="0" type="button">
                        <span className="LoBtn-label">DONE</span>
                        <span className="LoTouchRipple-root"></span>
                    </button>
                </div>
                <div className="lo-container tab2_details hide" id="content">    
                    <div className="width100per">
                        <h5 className="lo-subtitle_drug">Add Drug License no 1.</h5>
                        <div className="lo-form_split1 float-left">
                            <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                                <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo LoIptBase-StyleEnd CreatPassword">

                                    <div className="LoIptStyle-root LoIptStyle-positionGo">
                                      <img src={password} alt="Password"/>
                                    </div>

                                    <label for="choose-file" className="custom-file-upload upload-img" id="choose-file-label">
                                       Drug License No 1
                                    </label>
                                     

                                    <input aria-invalid="false" autoComplete="off" id="choose-file" name="uploadDocument" placeholder="Drug License Number 1" type="file" className="display-none LoIptBase-input LoOtlnIpt-input LoIptBase-inputStyleGo LoOtlnIpt-inputStyleGo LoIptBase-inputStyleEnd LoOtlnIpt-inputStyleEnd iptboxfocus ipt-radious-0" id="CreatPassword" accept=".jpg,.jpeg,.pdf,doc,docx,application/msword,.png" />

                                   

                                    <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                        <legend className="PrvtNotchOtln-legend-2">
                                            <span>​</span>
                                        </legend>
                                    </fieldset>
                                </div>

                                <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error CreatPassword_error hide">Not a valid number</p>
                            </div>
                        </div>
                       
                        <div className="lo-form_split2 float-left">
                            <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                                <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo ">

                                    <div className="LoIptStyle-root LoIptStyle-positionGo">
                                      <img src={calendar} alt="User"/>
                                    </div>

                                    <input aria-invalid="false" autoComplete="off" name="" placeholder="Valid Till" type="text" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-iptStyleEnd LoOtlnIpt-iptStyleEnd iptboxfocus"/>

                                    <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                        <legend className="PrvtNotchOtln-legend-2">
                                            <span>​</span>
                                        </legend>
                                    </fieldset>
                                </div>
                                <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                            </div>
                        </div>

                        <div className="lo-form_split1 float-left">
                            <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                                <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo ">

                                    <div className="LoIptStyle-root LoIptStyle-positionGo">
                                      <img src={gst} alt="User"/>
                                    </div>

                                    <input aria-invalid="false" autoComplete="off" name="" placeholder="GST Type" type="name" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-iptStyleEnd LoOtlnIpt-iptStyleEnd iptboxfocus"/>

                                    <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                        <legend className="PrvtNotchOtln-legend-2">
                                            <span>​</span>
                                        </legend>
                                    </fieldset>
                                </div>
                                <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                            </div>                             
                        </div>
                       
                        <div className="lo-form_split2 float-left">
                            <div className="LoFormCtrl-root LoTextField-root lo-input LoFormCtrl-marginNormal">
                                <div className="LoIptBase-root LoOtlnIpt-root LoIptBase-formCtrl LoIptBase-StyleGo LoOtlnIpt-StyleGo ">

                                    <div className="LoIptStyle-root LoIptStyle-positionGo">
                                      <img src={tax} alt="User"/>
                                    </div>

                                    <input aria-invalid="false" autoComplete="off" name="" placeholder="GSTIN Number" type="name" className="LoIptBase-input LoOtlnIpt-input Lo-disabled Lo-disabled LoIptBase-iptStyleGo LoOtlnIpt-iptStyleGo LoIptBase-iptStyleEnd LoOtlnIpt-iptStyleEnd iptboxfocus" />

                                    <fieldset className="fieldset-padd PrvtNotchOtln-root-1 LoOtlnIpt-notchedOutline">
                                        <legend className="PrvtNotchOtln-legend-2">
                                            <span>​</span>
                                        </legend>
                                    </fieldset>
                                </div>
                                <p className="LoFormHelperText-root LoFormHelperText-contained Lo-error _error hide">Not a valid firm name</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lo-container tab2_details hide">
                    <button className="LoBtnBase-root LoBtn-root LoBtn-contained theme-btn LoBtn-containedPrimary" tabindex="0" type="button">
                        <span className="LoBtn-label">DONE</span>
                        <span className="LoTouchRipple-root"></span>
                    </button>
                </div>
            </div>
        </form>

        <h5 className="copyright-text">Copyright © 2021 C-Square Info Solutions Pvt. Ltd.. All rights reserved.</h5>
        <h5 className="static-links">
            <a href="/">Terms &amp; Conditions</a> | <a href="/">Cookie Policy</a>
        </h5>

    </div>
    </>
  )

}

export default Firminfodetails