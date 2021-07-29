import React, { useState } from "react";
import { ENV } from "../../../common/constant/env";
import './header.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
 
  return (
    <>
      <header>
        <div class="header">
            <div class="container">
                <div class="row hidden-sm-up">
                    <div class="col-lg-2 col-sm-2">
                        <div class="logo">
                            <img src={`${ENV.IMG_URL}landing_page/assets/images/Logo.svg`} alt class=""/>
                        </div>
                    </div>
                    <div class="col-lg-5 col-sm-6">
                        <div class="searchbox">
                            <div class="textbox">
                                <input type="text" name="searchBox" placeholder="Search products/Molecules"/>
                            </div>
                            <div class="searchlist cursor-pointer">
                                <img src={`${ENV.IMG_URL}landing_page/assets/images/searchwithlist.svg`} alt/>
                            </div>
                            <div class="searchscan cursor-pointer">
                                <img src={`${ENV.IMG_URL}landing_page/assets/images/searchwithscan.svg`} alt/>
                            </div>
                            <div class="searchborder">
                            </div>
                            <div class="searchtype-cont">
                                <div class="MuiFormControl-root">
                                    <div class="MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiOutlinedInput-input Lo-Select-ellipsis" id="LoListItem-button">
                                        <div>Products</div>
                                    </div>
                                </div>
                                <div class="Lo-Menu-List" id="LoListItemMenu">
                                    <ul class="MuiList-root">
                                        <li class="Lo-ListItem-root Lo-MenuItem-root Lo-ListItem-gutters LoListItem-button Lo-Item-selected" data-value="products">Products/Molecules</li>
                                        <li class="Lo-ListItem-root Lo-MenuItem-root Lo-ListItem-gutters LoListItem-button" data-value="seller">Sellers</li>
                                        <li class="Lo-ListItem-root Lo-MenuItem-root Lo-ListItem-gutters LoListItem-button" data-value="molecules">Manufacturers</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="searchbtn">
                                <img src={`${ENV.IMG_URL}landing_page/assets/images/search.svg`} alt/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-3 text-center">
                        <div class="quicklinkicons">
                            <ul class="mpz">
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/notification-icon.svg`}/>
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/order-icon.svg`}/>
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/cart-icon.svg`}/>
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/shortbook-icon.svg`}/>
                                        </span>
                                    </button>
                                </li>
                                <li class="hide-tab">
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist.svg`}/>
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/smart-cart-icon.svg`}/>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-1 md-text-right">
                        <div class="cursor-pointer Lo-ListItem-root web-header-profile" id="LoProfile">
                            <img src={`${ENV.IMG_URL}landing_page/assets/images/clientprofile.png`} class="web-header-profile-img" alt="Picture"/>
                            <div class="web-profile-details hidden-md">
                                <h4 class="web-profile-name">
                                    <div>Maruthi Medicals</div>
                                    <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/down-arrow-line-2.svg`} alt=""/>
                                </h4>
                                <h5 class="web-profile-location">Bangalore</h5>
                            </div><span class="MuiTouchRipple-root"></span>
                        </div>
                        <div class="profile-dropdown" id="LoProfile-Menu">
                            <div class="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded">
                                <ul class="MuiList-root MuiList-padding" id="split-button-menu">
                                    <li class="MuiButtonBase-root Lo-ListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/profile.svg`} alt="Avatar"/>My Profile
                                        <span class="MuiTouchRipple-root"></span>
                                    </li>
                                    <li class="MuiButtonBase-root Lo-ListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/feedback.svg`} alt="Return"/>Feedback
                                        <span class="MuiTouchRipple-root"></span>
                                    </li>
                                    <li class="MuiButtonBase-root Lo-ListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/return.svg`} alt="Return"/>Returns
                                        <span class="MuiTouchRipple-root"></span>
                                    </li>
                                    <li class="MuiButtonBase-root Lo-ListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/sign-out.svg`} alt="signout"/>Sign Out
                                        <span class="MuiTouchRipple-root"></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container only-sm">
                <div class="row clearfix">
                    <div class="col-4">
                        <div class="logo">
                            <img src={`${ENV.IMG_URL}landing_page/assets/images/Logo.svg`} alt class=""/>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="quicklinkicons">
                            <ul class="mpz">
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist.svg`}/>
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/shortbook-icon.svg`}/>
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/cart-icon.svg`}/>
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button class="Lo-Btn-Base Lo-Btn-root" type="button">
                                        <span class="Lo-Btn-label">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/clientprofile.png`}/>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row clearfix">
                    <div class="col-12 clearfix">
                        <div class="searchbox pos-rel ">
                            <div class="textbox">
                                <input type="text" name="searchBox" placeholder="Search products/Molecules"/>
                            </div>
                            <div class="searchlist">
                                <ul class="text-right">
                                    <li><img src={`${ENV.IMG_URL}landing_page/assets/images/searchwithlist.svg`} alt/></li>
                                    <li><img src={`${ENV.IMG_URL}landing_page/assets/images/searchwithscan.svg`} alt/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container hidden-sm-up">
                <div class="row roof-menu">
                    <div class="col-lg-3 col-sm-3">
                        <div class="allcategories-sec">
                            <button class="allcategories pos-rel ttn all-globala btn-null" type="button" id="Allcategories">
                                <span class="p-l-16px p-r-5px">All Categories</span>
                            </button>
                        </div>
                        <div class="fixed web-header-allcat" id="AllcategoriesMenu">
                            <div class="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded">
                                <ul class="MuiList-root MuiList-padding text-dec-none">
                                    <a href="#/home">
                                        <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                            <span>Generic Medicines</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </li>
                                    </a>
                                    <a href="#/home">
                                        <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                            <span>Ayurvedic Medicines</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </li>
                                    </a>
                                    <a href="#/home">
                                        <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                            <span>FMCG</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </li>
                                    </a>
                                    <a href="#/home">
                                        <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                            <span>OTC</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </li>
                                    </a>
                                    <a href="#/home">
                                        <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button">
                                            <span>All Products</span>
                                            <span class="MuiTouchRipple-root"></span>
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-sm-4">
                        <div class="db-qlinks">
                            <ul class="mpz list-style-none list-inline-block">
                                <li><a href="">Dashboard</a></li>
                                <li><a href="">Offers &amp; Promotion</a></li>
                                <li class="hidden-md"><a href="">LC Wallet &amp; Payments</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-3">
                        <div class="db-qlinks-2">
                            <ul class="mpz list-style-none list-inline-block text-right">
                                <li><a href="">Patient</a></li>
                                <li><a href="">Watchlist</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-2">
                        <div class="order-to-sell-sec text-right">
                            <button class="order-to-sell pos-rel ttn all-orderto btn-null Lo-Button-Animate" type="button">
                                <span class="p-l-16px p-r-5px">Order To Sellers</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  )

}

export default Header