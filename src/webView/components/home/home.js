import React, { useState } from "react";
import { ENV } from "../../../common/constant/env";
// import styles from './home.scss';
import  './home.css';
// .banner
// {
//     padding: 16px 0px;
// }
var styles = {
  banner: {
      padding: '16px 0px'
  }
};

/**
* @author
* @function Home
**/

const Home = (props) => {
 
  return (
    <>
    <section>
        <div class={`${styles.banner}`}>
            <img src={`${ENV.IMG_URL}landing_page/assets/images/banner/banner.svg`}/>
        </div>
    </section>
    <div class="container">
        <div class="row clearfix">
            <div class="col-lg-12 clearfix">
                <div class="info-bar">
                    <div>
                        <h4 class="info-heading">Preferred Sellers Inspired By Your Purchase</h4>
                        <h5 class="info-sub-heading">Pick your favourite sellers &amp; order</h5>
                    </div>
                    <div>
                        <button class="btn_tealish margin-right-16 font-size-14" type="button">
                            <span>Order Now</span>
                        </button>
                        <button class="btn_burple font-size-14" type="button">
                            <span>View All</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <section class="wrapperAll">
                <section class="sliderComplete">
                    <section class="wrapper">
                        <div class="slider">
                            <div class="row clearfix">

                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="adv-seller-box">
                                        <div class="adv-seller-logs">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/sellers/seller1.jpg`} alt="SellerOne"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="adv-seller-box">
                                        <div class="adv-seller-logs">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/sellers/seller2.jpg`} alt="SellerOne"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="adv-seller-box">
                                        <div class="adv-seller-logs">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/sellers/seller3.jpg`} alt="SellerOne"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="adv-seller-box">
                                        <div class="adv-seller-logs">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/sellers/seller4.jpg`} alt="SellerOne"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="adv-seller-box">
                                        <div class="adv-seller-logs">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/sellers/seller5.jpg`} alt="SellerOne"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="adv-seller-box">
                                        <div class="adv-seller-logs">
                                            <img src={`${ENV.IMG_URL}landing_page/assets/images/sellers/seller6.jpg`} alt="SellerOne"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </section>

        <div class="row clearfix">
            <div class="col-lg-12 col-sm-12 clearfix">
                <div class="info-bar">
                    <div>
                        <h4 class="info-heading">Top/Most Ordered Products</h4>
                        <h5 class="info-sub-heading">In Bangalore</h5>
                    </div>
                    <div>
                        <button class="btn_burple font-size-14" type="button">
                            <span>View All</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

        <section class="wrapperAll container-2">
            <section class="sliderComplete">
                <section class="wrapperAll wrapper container">
                    <div class="slider">
                        <div class="row clearfix">
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </section>
            
        </section>

    <div class="container">

        <div class="row clearfix">
            <div class="col-lg-12 col-sm-12 clearfix">
                <div class="info-bar">
                    <div>
                        <h4 class="info-heading">New Launches</h4>
                        <h5 class="info-sub-heading">All Over India</h5>
                    </div>
                    <div>
                        <button class="btn_burple font-size-14" type="button">
                            <span>View All</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

        <section class="wrapperAll container-2">
            <section class="sliderComplete">
                <section class="wrapperAll wrapper container">
                    <div class="slider">
                        <div class="row clearfix">
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                <div class="cart-container">

                                    <span class="cart-discount-left">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/commerce-and-shopping.svg`}/>
                                    </span>
                                    <span class="cart-wishlist-right">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/wishlist_dark.svg`}/>
                                    </span>

                                    <a href="#" class="cover">
                                        <img class="cart-img" src={`${ENV.IMG_URL}landing_page/assets/images/products/dolo-156.png`}/>
                                    </a>
                                    <p class="cart-product-title">
                                        Dolo 250 mg Syrup
                                    </p>
                                    <p class="cart-packed-size">
                                        Pack Size: 60ml syrup
                                    </p>
                                    <p class="cart-MRP">MRP ₹ 38.50</p>
                                    <p><span class="cart-contains">Contains</span> <span class="cart-contains-Product">Paracetamol</span></p>
                                    <span><button class="btn_aquamarine font-size-12">Add To Cart</button></span>
                                    <span class="cart-slambook">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/icons/shortbook.svg`}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               
               
            </section>
            
        </section>

    <div class="container">
        <div class="row clearfix">
            <div class="col-lg-12 col-sm-12 clearfix">
                <div class="info-bar">
                    <div>
                        <h4 class="info-heading">Shop By Manufacturer</h4>
                        <h5 class="info-sub-heading">Best manufacturer picked for you</h5>
                    </div>
                    <div>
                        <button class="btn_tealish margin-right-16 font-size-14" type="button">
                            <span>Order Now</span>
                        </button>
                        <button class="btn_burple font-size-14" type="button">
                            <span>View All</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <section class="wrapperAll">
                <section class="sliderComplete">
                    <section class="wrapper">
                        <div class="slider">
                            <div class="row clearfix">
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="manufacturer-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/manufacturer/mfc1.jpg`} alt=""/>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="manufacturer-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/manufacturer/mfc2.jpg`} alt=""/>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="manufacturer-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/manufacturer/mfc3.jpg`} alt=""/>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="manufacturer-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/manufacturer/mfc4.jpg`} alt=""/>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="manufacturer-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/manufacturer/mfc5.png`} alt=""/>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-sm-2 adv-box-width-16">
                                    <div class="manufacturer-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/manufacturer/mfc6.svg`} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </section>

        <div class="row clearfix">
            <div class="col-lg-12 col-sm-12 clearfix">
                <div class="info-bar">
                    <div>
                        <h4 class="info-heading">Limited Period Offers By Sellers</h4>
                        <h5 class="info-sub-heading">Pick best offer &amp; order</h5>
                    </div>
                    <div>
                        <button class="btn_burple font-size-14" type="button">
                            <span>View All</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <section class="wrapperAll">
                <section class="sliderComplete">
                    <section class="wrapper">
                        <div class="slider">
                            <div class="row clearfix">
                                <div class="col-lg-4 col-sm-4 offer-width-33">
                                    <div class="discount-adv-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/offers/offer-1@2x.png`} alt="offersOne"/>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 offer-width-33">
                                    <div class="discount-adv-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/offers/offer-2@2x.png`} alt="offersTwo"/>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 offer-width-33">
                                    <div class="discount-adv-box">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/offers/offer-3@2x.png`} alt="offersThree"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
        </section>

        <div class="row clearfix">
            <div class="col-lg-12 clearfix">
                <div class="info-bar">
                    <div>
                        <h4 class="info-heading">C-Square Solutions helpful for you</h4>
                        <h5 class="info-sub-heading">Increase your Business </h5>
                    </div>
                </div>
            </div>
        </div>

        <section class="demo-box">
             <section class="wrapperAll">
                <section class="sliderComplete">
                    <section class="wrapper">
                        <div class="slider">
                            <div class="row clearfix">
                                <div class="col-lg-4 col-sm-4 offer-width-33">
                                    <div class="footer-above-business-sub-image first-image">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/demoimg/demo1.svg`} class="business-image" alt="illustration"/>
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/demoimg/logodemo.svg`} class=" logo-image" alt="logo-eco-green-express"/>
                                        <div class="footer-above-business-sub-title">
                                            The <span>End To End Solution</span> For <br/>All Pharmacies.
                                        </div>
                                        <div class="footer-above-business-sub-paragraph">
                                            <p>Manage your store inventory, Stock &amp; Sales, Billing, Rack Management etc...</p>
                                        </div>
                                        <div class="footer-above-business-sub-button">
                                            <button type="button" onclick="popup()">Ask for Demo</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 offer-width-33">
                                    <div class="footer-above-business-sub-image second-image">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/demoimg/demo2.svg`} class="business-image" alt="lis2"/>
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/demoimg/logodemo.svg`} class=" logo-image" alt="logo-eco-green-express"/>
                                        <div class="footer-above-business-sub-title">
                                            The <span>End To End Solution</span> For <br/>All Pharmacies.
                                        </div>
                                        <div class="footer-above-business-sub-paragraph">
                                            <p>Manage your store inventory, Stock &amp; Sales, Billing, Rack Management etc...</p>
                                        </div>
                                        <div class="footer-above-business-sub-button">
                                            <button type="button" onclick="popup()">Ask for Demo</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-4 offer-width-33">
                                    <div class="footer-above-business-sub-image third-image">
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/demoimg/demo3.svg`} class="business-image" alt="ils3"/>
                                        <img src={`${ENV.IMG_URL}landing_page/assets/images/demoimg/logodemo.svg`} class=" logo-image" alt="logo-eco-green-express"/>
                                        <div class="footer-above-business-sub-title">
                                            The <span>End To End Solution</span> For <br/>All Pharmacies.
                                        </div>
                                        <div class="footer-above-business-sub-paragraph">
                                            <p>Manage your store inventory, Stock &amp; Sales, Billing, Rack Management etc...</p>
                                        </div>
                                        <div class="footer-above-business-sub-button">
                                            <button type="button" onclick="popup()">Ask for Demo</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
          
        </section>

        <div class="bottom-border-dash-line"></div>

        <section class="testimonials-section">
            <div class="row clearfix">
                <div class="col-lg-3 col-sm-3 testimonial-50 row">
                    <div class="col-lg-4 col-sm-4 testimonial-25">
                        <img class="testimonial-img" src={`${ENV.IMG_URL}landing_page/assets/images/testimonials/team.svg`}/>
                    </div>
                    <div class="col-lg-8 col-sm-8 testimonial-75 testimonials">
                        <p class="testimonials-heading">10K + Trusted </p>
                        <p class="testimonials-sub-heading">Customers</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-3 testimonial-50 row">
                    <div class="col-lg-4 col-sm-4 testimonial-25">
                        <img class="testimonial-img" src={`${ENV.IMG_URL}landing_page/assets/images/testimonials/transaction.svg`}/>
                    </div>
                    <div class="col-lg-8 col-sm-8 testimonial-75 testimonials">
                        <p class="testimonials-heading">22 Cr + </p>
                        <p class="testimonials-sub-heading">Transactions</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-3 testimonial-50 row">
                    <div class="col-lg-4 col-sm-4 testimonial-25">
                        <img class="testimonial-img" src={`${ENV.IMG_URL}landing_page/assets/images/testimonials/products.svg`}/>
                    </div>
                    <div class="col-lg-8 col-sm-8 testimonial-75 testimonials">
                        <p class="testimonials-heading">4 Lac + </p>
                        <p class="testimonials-sub-heading">Products</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-3 testimonial-50 row">
                    <div class="col-lg-4 col-sm-4 testimonial-25">
                        <img class="testimonial-img" src={`${ENV.IMG_URL}landing_page/assets/images/testimonials/ilustration_4.svg`}/>
                    </div>
                    <div class="col-lg-8 col-sm-8 testimonial-75 testimonials">
                        <p class="testimonials-heading">India's B2B </p>
                        <p class="testimonials-sub-heading">'Pharma System'</p>
                    </div>
                </div>
                
            </div>
        </section>
        
    </div>
    </>
  )

}

export default Home