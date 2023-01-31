import React from 'react';

function SliderArrow(props) {

  const { onClick } = props;
   return (
     <div className={`arrow__container ${props.arrowContainerClass}`} onClick={onClick}>
       <div className={`arrow ${props.arrowClass}`} ></div>
     </div>
   );
 }

 export default SliderArrow;
