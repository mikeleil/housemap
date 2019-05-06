import React from 'react';

const Area = props => {
  return (
    <div>
      { `${props.area || 0 } sq. fr.` }
    </div>
  );
}

export default Area