import { LocalStorage } from "../constant/localStorage";


export const collectToken = () => {
    if(localStorage.getItem(LocalStorage.CUST_ID)&&
    localStorage.getItem(LocalStorage.TOKEN)&&localStorage.getItem(LocalStorage.MOBILE_NO)){
      return true;
    } else {
      return false
    }
      
  };