import React from 'react'
import PropTypes from 'prop-types';
export const FuctionSample = (props) => {
    const {handhleClick}=props;
  return (
    <div>
        <button onClick={handhleClick}>Click Me</button>
    </div>
  )
};
FuctionSample.propTypes={
    handhleClick:PropTypes.func.isRequired,
};
