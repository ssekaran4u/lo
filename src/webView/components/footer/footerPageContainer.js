import FooterPage from "./footerPage";
import { State } from "../../../rootReducer";
import { connect } from "react-redux";
import { loginAction } from "../../../common/action/loginAction";


const mapStateToProps = (state) => ({
    loginResult: state.login,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    loginAction: (form) => dispatch(loginAction(form))
  });
  
  export const FooterPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FooterPage);