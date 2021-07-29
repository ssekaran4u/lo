import React from 'react'
import { BrowserRouter as Router , Route, Switch, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { collectToken } from '../../common/collectToken/collectToken';
import { LandingPageContainer, LoginPageContainer, RegisterPageContainer, FirminfodetailsPageContainer,HeaderPageContainer, FooterPageContainer, HomePageContainer} from '../../webView/components';

/**
* @author
* @function Web
**/


const PublicPageLayout = (props) => {
    const { Component, path } = props;
    const token = collectToken();
    
    if (!token){
        return <Route path={path} component={Component} />;
    } 
    return <Redirect to="/home" />;
  };  

  const PrivatePageLayout = (props) => {
    const { path, Component, Layout, pageTitle,pageSubTitle, subPath } = props;
    const token = collectToken();
  
    if (token)
      return <Layout path={path} Component={Component} pageTitle={pageTitle} pageSubTitle={pageSubTitle} subPath={subPath}/>
    // return <Redirect to="/login" />;
    return <Layout path={path} Component={Component} pageTitle={pageTitle} pageSubTitle={pageSubTitle} subPath={subPath}/>
  };

  const HomePageLayout = (props) => {
    const { Component, path } = props;
  
    return (
      <Route
        path={path}
        render={props => (
          <>
            <HeaderPageContainer/>
            <Component {...props}/>
            <FooterPageContainer/>
          </>
        )}
      />
    );
  };


  const MainPageLayout = (props) => {
    const { Component, path, pageTitle, pageSubTitle, subPath } = props;
    return (
      <Route
        path={path}
        render={(props) => (
          <>
            
            <div className="website-body">
              <Component {...props }/>
              <div className="web-bottom-height"></div>
              <div className="termsAndCondi">
                <Container fixed>
                  {/* Copyright © 2018 C-Square Info Solutions Pvt. Ltd.. All rights
                  reserved. */}
                  Copyright © 2021 C-Square Info Solutions Pvt. Ltd.. All rights reserved.
                </Container>
              </div>
            </div>
          </>
        )}
      />
    );
  };

  const PageNotFoundPageLayout = (props) => {
    const { Component, path, pageTitle, pageSubTitle, subPath } = props;
   // console.log("in main layout ",props)
    return (
      <Route
        path={path}
        render={(props) => (
          <>
           
            <div className="website-body">
              {/* <NavigationPageContainer pageTitle={pageTitle} pageLink={path} pageSubTitle={pageSubTitle} subPath={subPath} {...props} /> */}
              <Component {...props }/>
              <div className="web-bottom-height"></div>
              <div className="termsAndCondi">
                <Container fixed>
                  Copyright © 2021 C-Square Info Solutions Pvt. Ltd.. All rights
                  reserved.
                </Container>
              </div>
            </div>
          </>
        )}
      />
    );
  };
const Web = (props) => {
   
  return(
    <>
    <Router>
      <Switch>
        <PublicPageLayout exact={true} path="/" Component={LandingPageContainer}  />
        <PublicPageLayout path="/login" Component={LoginPageContainer} />
        <PublicPageLayout path="/register" Component={RegisterPageContainer} />
        <PublicPageLayout path="/firminfodetails" Component={FirminfodetailsPageContainer} />
        <PublicPageLayout path="/header" Component={HeaderPageContainer} />
        <PublicPageLayout path="/footer" Component={FooterPageContainer} />
        <HomePageLayout path="/home" Component={HomePageContainer} />
      </Switch>
    </Router>
    </>
   )

 }

export default Web