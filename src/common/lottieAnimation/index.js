import React from 'react';
import Lottie from 'react-lottie';

/**
* @author
* @function LottiAnimations
**/

const LottiAnimations = (props) => {
    const {Illustration, height, width} =props;
  return(
    <>
    <Lottie
      options={{
        animationData: Illustration,
        autoplay: true
      }}
      height={650}
      width={850}
      
    /></>
   )

 }

export default LottiAnimations