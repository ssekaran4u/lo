import FirminfodetailsPage from "./firminfodetailsPage";
import { State } from "../../../rootReducer";
import { connect } from "react-redux";
import { loginAction } from "../../../common/action/loginAction";


const mapStateToProps = (state) => ({
    loginResult: state.login,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    loginAction: (form) => dispatch(loginAction(form))
  });
  
  export const FirminfodetailsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(FirminfodetailsPage);