import React, { useState } from "react";
import { ENV } from "../../../common/constant/env";
import './footer.css';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
 
  return (
    <>
      <footer>

        <section class="footer-section-1">
            <div class="container">

                <div class="row clearfix">
                    <div class="col-lg-2 col-sm-2 clearfix">
                        <span class="footer-above-text">Stay Updated</span>
                    </div>
                    <div class="col-lg-7 col-sm-7 clearfix footer-above-subscribe">
                        <input class="footer-above-input" type="" name="" placeholder="Your E-mail Address"/>
                        <button class="footer-above-button" type="button">Subscribe</button>
                    </div>

                    <div class="col-lg-3 col-sm-3 clearfix social-media-button">
                        <div class="footer-above-social-media">
                            <div class="footer-social-sec">
                                <div class="social-sec facebook">
                                    <svg viewBox="0 0 24 24">
                                        <path class="social-hover" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"></path>
                                    </svg>
                                </div>
                                <div class="social-sec twitter">
                                    <svg viewBox="0 0 24 24">
                                        <path class="social-hover" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
                                    </svg>
                                </div>
                                <div class="social-sec linkedin">
                                    <svg viewBox="0 0 24 24">
                                        <path class="social-hover" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="footer-section-2">
            <div class="container">

                <div class="row clearfix">
                    <div class="col-lg-3 col-sm-3 img-center">
                        <img src={`${ENV.IMG_URL}landing_page/assets/images/main-logo-footer.svg`}/>
                    </div>
                    <div class="col-lg-2 col-sm-2 footer-sec-2-width-19">
                        <span class="footer-menu-title">Know Us</span>
                        <ul class="footer-menu-list">
                            <li><a href="">About Us</a></li>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Our Team</a></li>
                            <li><a href="">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-sm-2 footer-sec-2-width-28">
                        <span class="footer-menu-title">Our Policies</span>
                        <ul class="footer-menu-list">
                            <li><a href="">Privacy policy</a></li>
                            <li><a href="">Terms and Conditions</a></li>
                            <li><a href="">Lorem Ipsum</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-sm-2 footer-sec-2-width-29">
                        <span class="footer-menu-title">Our Services</span>
                        <ul class="footer-menu-list">
                            <li><a href="">Lorem Ipsum</a></li>
                            <li><a href="">Lorem Ipsum</a></li>
                            <li><a href="">Lorem Ipsum</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-sm-2 footer-sec-2-width-24">
                        <span class="footer-menu-title">Need Help</span>
                        <ul class="footer-menu-list">
                            <li><a href="">Support@c2info.com</a></li>
                            <li><a href="">+91-9087656789</a></li>
                        </ul>
                    </div>
                </div>

                <div class="bottom-border-dash-line"></div>

                <div class="row clearfix footer-section-2-container">
                    <div class="col-lg-4 col-sm-4">
                        <div class="row clearfix">
                            <div class="col-lg-3 col-sm-3 footer-sec-2-width-25">
                                <img src={`${ENV.IMG_URL}landing_page/assets/images/footer/value-driven.svg`}/>
                            </div>
                            <div class="col-lg-9 col-sm-9 footer-sub-text footer-sec-2-width-75">
                                <span>Values-Driven</span>
                                <p>Stronger and more concentrated buyers, intense competition and genericization of products.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                        <div class="row clearfix">
                            <div class="col-lg-3 col-sm-3 footer-sec-2-width-25">
                                <img src={`${ENV.IMG_URL}landing_page/assets/images/footer/cost-effective.svg`}/>
                            </div>
                            <div class="col-lg-9 col-sm-9 footer-sub-text footer-sec-2-width-75">
                                <span>Cost-effective</span>
                                <p>Stronger and more concentrated buyers, intense competition and genericization of products.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-4">
                        <div class="row clearfix">
                            <div class="col-lg-3 col-sm-3 footer-sec-2-width-25">
                                <img src={`${ENV.IMG_URL}landing_page/assets/images/footer/secure.svg`}/>
                            </div>
                            <div class="col-lg-9 col-sm-9 footer-sub-text footer-sec-2-width-75">
                                <span>Secure-Payments</span>
                                <p>Stronger and more concentrated buyers, intense competition and genericization of products.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row clearfix">
                    <div class="col-lg-12">
                        <div class="lo-footer-sub-menu footer-copy-right-text">
                            <span class="copy-right-title">2021© Powered by C-Square Info Solutions Pvt. Ltd.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </footer>
    </>
  )

}

export default Footer